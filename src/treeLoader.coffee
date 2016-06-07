
data = require './trees/tree.json'
chief = require 'behavior3-chief'

treeConfig = {
	container: '#treant',
	rootOrientation: 'NORTH',
	nodeAlign: 'TOP',
	levelSeparation: 50,
	siblingSeparation: 50,
	node: {
		collapsable: true
	}
	animation: {
		nodeSpeed: 100,
		connectorsSpeed: 0
	}
	connectors: {
		type: 'stepRounded',
		style: {
			'stroke-width': 7,
			'stroke': '#414141'
		}
	}
}

activeTreeGraph = null
nodeMap = {}

registerRightClick = (treantConfig, callback) ->

	$container = $(treantConfig.container)
	$contextmenu = $('#contextmenu')
	$left = $('#commandMoveLeft')
	$right = $('#commandMoveRight')
	$erase = $('#commandErase')
	highlightedEl = null

	clearDisables = ->
		$left.removeClass 'disabled'
		$right.removeClass 'disabled'
		$erase.removeClass 'disabled'

	clearHighlight = ->
		if highlightedEl
			highlightedEl.classList.remove 'highlight'

	$container.on 'contextmenu', (evt) ->
		if evt.target.classList.contains 'node'
			# visual changes
			clearDisables()
			evt.preventDefault()
			clearHighlight()
			evt.target.classList.add 'highlight'
			highlightedEl = evt.target

			# id's and positions
			cNodeId = evt.target.getAttribute 'cnodeid'
			tNodeId = parseInt evt.target.getAttribute 'tnodeid'
			$contextmenu.attr 'cnodeid', cNodeId
			$contextmenu.attr 'tnodeid', tNodeId
			$contextmenu.show().css({
				top: evt.clientY - 20,
				left: evt.clientX - 20
			})

			# disable those not applicable
			leftNeighborTId = parseInt activeTreeGraph.getNodeAttribute tNodeId, 'leftNeighborId'
			rightNeighborTId = parseInt activeTreeGraph.getNodeAttribute tNodeId, 'rightNeighborId'
			unless leftNeighborTId
				$left.addClass 'disabled'
			unless rightNeighborTId
				$right.addClass 'disabled'
			if tNodeId == 0
				$erase.addClass 'disabled'

	$erase.on 'click', (evt) ->
		cNodeId = $(this).parent().attr 'cnodeid'
		tNodeId = parseInt $(this).parent().attr 'tnodeid'
		activeTreeGraph.removeNode tNodeId
		callback {action: 'removeNode', cNodeId: cNodeId}

	$left.on 'click', (evt) ->
		cNodeIdA = $(this).parent().attr 'cnodeid'
		tNodeId = parseInt $(this).parent().attr 'tnodeid'
		leftNeighborTId = parseInt activeTreeGraph.getNodeAttribute tNodeId, 'leftNeighborId'
		cNodeIdB = activeTreeGraph.getNodeAttribute leftNeighborTId, 'cNodeId'
		activeTreeGraph.switchIndexes tNodeId, leftNeighborTId
		callback {action: 'switchNodes', cNodeIdA: cNodeIdA, cNodeIdB: cNodeIdB}

	$right.on 'click', (evt) ->
		cNodeIdA = $(this).parent().attr 'cnodeid'
		tNodeId = parseInt $(this).parent().attr 'tnodeid'
		rightNeighborTId = parseInt activeTreeGraph.getNodeAttribute tNodeId, 'rightNeighborId'
		cNodeIdB = activeTreeGraph.getNodeAttribute rightNeighborTId, 'cNodeId'
		activeTreeGraph.switchIndexes tNodeId, rightNeighborTId
		callback {action: 'switchNodes', cNodeIdA: cNodeIdA, cNodeIdB: cNodeIdB}

	document.addEventListener 'click', ->
		$contextmenu.hide()
		clearHighlight()
		clearDisables()

dragNode = (evt) ->
	transfer = JSON.stringify
		type: 'change',
		tid: evt.target.getAttribute('tnodeid'),
		cid: evt.target.getAttribute('cnodeid')

	evt.dataTransfer.setData 'text/plain', transfer

registerDragAndDrop = (treantConfig, callback) ->
	$container = $(treantConfig.container)
	$container.on 'dragover', (evt) ->
		if evt.target.classList.contains 'node'
			evt.preventDefault()
			evt.target.classList.add 'highlight'

	$container.on 'dragleave', (evt) ->
		if evt.target.classList.contains 'node'
			evt.target.classList.remove 'highlight'

	$container.on 'drop', (evt) ->
		if evt.target.classList.contains 'node'
			evt.preventDefault()
			evt.target.classList.remove 'highlight'

			obj = JSON.parse evt.dataTransfer.getData 'text'

			parentCId = evt.target.getAttribute 'cnodeid'
			parentTId = parseInt evt.target.getAttribute 'tnodeid'

			switch obj.type
				when 'add'
					# createRoot, addNode, changeParent
					if parentCId == 'start'
						callback {action: 'createRoot', nodeName: obj.name}
					else
						callback {action: 'addNode', nodeName: obj.name, parentCId: parentCId, parentTId: parentTId}
				when 'change'
					unless parentCId == 'start'
						callback {action: 'changeParent', tNodeId: obj.tid, cNodeId: obj.cid, parentTId: parentTId, parentCId: parentCId}

	$('.node').on 'dragstart', (evt) -> dragNode(evt)

createTNode = (cNode) ->
	tNode = {
		text: {name: cNode.getName(), desc: ' ', contact: ' '}
		image: './assets/nodes/' + cNode.getName().toLowerCase() + '.png'
		collapsed: false
		HTMLclass: 'none'			# running, failure, error, success
		cNodeId: cNode.getId()
	}
	# node.getDescription()

updateNode = (status) ->
	cNode = this
	tNode = nodeMap[cNode.getId()].tNode
	tConn = nodeMap[cNode.getId()].connection

	clearClasses tNode.nodeDOM
	clearConnection tConn

	switch status
		when chief.status.SUCCESS
			tNode.nodeDOM.classList.add 'success'
			tConn.attr 'stroke', '#299b44'
		when chief.status.RUNNING
			tNode.nodeDOM.classList.add 'running'
			tConn.attr 'stroke', '#9c7500'
		when chief.status.FAILURE
			tNode.nodeDOM.classList.add 'failure'
			tConn.attr 'stroke', '#d2521a'
		when chief.status.ERROR
			tNode.nodeDOM.classList.add 'error'
			tConn.attr 'stroke', '#d21a1a'

clearClasses = (el) ->
	el.classList.remove 'success'
	el.classList.remove 'failure'
	el.classList.remove 'running'
	el.classList.remove 'error'

clearConnection = (el) ->
	el.attr 'stroke', '#414141'

treantLoaded = ->
	tNodes = activeTreeGraph.tree.nodeDB.db
	for tNode in tNodes
		id = tNode.cNodeId
		if id and id != 'start'
			nodeMap[id].tNode = tNode
			nodeMap[id].connection = activeTreeGraph.tree.connectionStore[tNode.id]

nodeAdded = (cNode, tNode, tNodeDefinition) ->
	# register events
	$(tNode.nodeDOM).on 'dragstart', (evt) -> dragNode(evt)
	cNode.on 'status.change', updateNode.bind(cNode)
	# add to nodeMap
	id = cNode.getId()
	nodeMap[id] = tNodeDefinition
	nodeMap[id].tNode = tNode
	nodeMap[id].connection = activeTreeGraph.tree.connectionStore[tNode.id]

exports.addNodeToTree = (cNode, parentTId) ->
	tNodeDefinition = createTNode cNode
	tNode = activeTreeGraph.addNode tNodeDefinition, parentTId
	activeTreeGraph.redraw -> nodeAdded(cNode, tNode, tNodeDefinition)

exports.changeParent = (tNodeId, parentTId) ->
	activeTreeGraph.changeParent tNodeId, parentTId

exports.redrawTree = ->
	activeTreeGraph.redraw()

exports.loadTree = (cTree, gridSize, cbIndex) ->
	treeConfig.quantize = gridSize
	cTree.changeRootNode 'Sequence'
	rootNode = cTree.getRootNode()
	rootNode.addChild cTree.addNode('Failer')
	rootNode.addChild cTree.addNode('Succeeder')

	cNodes = cTree.listNodes()

	start =
		text: { name: 'Start' },
		image: './assets/nodes/start.png',
		cNodeId: 'start',
		HTMLid: 'start'

	for cNode in cNodes
		nodeMap[cNode.getId()] = createTNode cNode

	for cNode in cNodes
		cParentNode = cNode.getParent()
		tNode = nodeMap[cNode.getId()]
		if cParentNode
			tParentNode = nodeMap[cParentNode.getId()]
			tNode.parent = tParentNode
		else
			tNode.parent = start

		# register events
		cNode.on 'status.change', updateNode.bind(cNode)

	nodeStructure = _.values nodeMap
	nodeStructure.unshift start
	nodeStructure.unshift treeConfig

	activeTreeGraph = new Treant nodeStructure, cbIndex, treantLoaded
	registerDragAndDrop treeConfig, cbIndex
	registerRightClick treeConfig, cbIndex

exports.closeTree = (treeId) ->
	activeTreeGraph.destroy()
	activeTreeGraph = null
	console.log 'closing tree', treeId
