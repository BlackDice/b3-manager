
data = require './trees/tree.json'

treeConfig = {
	container: '#treant',
	quantize: 50,
	rootOrientation: 'NORTH',
	nodeAlign: 'TOP',
	levelSeparation: 50,
	siblingSeparation: 50,
	node: {
		collapsable: true
	}
	animation: {
		nodeSpeed: 200,
		connectorsSpeed: 200
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
			leftNeighborCId = parseInt activeTreeGraph.getNodeParameter tNodeId, 'leftNeighborId'
			rightNeighborCId = parseInt activeTreeGraph.getNodeParameter tNodeId, 'rightNeighborId'
			unless leftNeighborCId
				$left.addClass 'disabled'
			unless rightNeighborCId
				$right.addClass 'disabled'
			if tNodeId == 0
				$erase.addClass 'disabled'

	$erase.on 'click', (evt) ->
		cNodeId = $(this).parent().attr 'cnodeid'
		tNodeId = parseInt $(this).parent().attr 'tnodeid'

		activeTreeGraph.removeNode tNodeId
		callback {action: 'removeNode', cNodeId: cNodeId}

	document.addEventListener 'click', ->
		$contextmenu.hide()
		clearHighlight()
		clearDisables()

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

			childName = evt.dataTransfer.getData 'text'
			parentCId = evt.target.getAttribute 'cnodeid'
			parentTId = parseInt evt.target.getAttribute 'tnodeid'

			# createRoot, addNode, changeParent
			if parentCId == 'start'
				callback {action: 'createRoot', nodeName: childName}
			else
				callback {action: 'addNode', nodeName: childName, parentCId: parentCId, parentTId: parentTId}

createTNode = (cNode) ->
	tNode = {
		text: {name: cNode.getName(), desc: ' ', contact: ' '}
		image: './assets/nodes/' + cNode.getName().toLowerCase() + '.png'
		collapsed: false
		HTMLclass: 'none'			# running, failure, error, success
		cNodeId: cNode.getId()
	}
	# node.getDescription()

exports.addNodeToTree = (cNode, parentTId) ->
	tNode = createTNode cNode
	activeTreeGraph.addNode tNode, parentTId
	#console.log activeTreeGraph.tree.nodeDB

exports.redrawTree = ->
	activeTreeGraph.redraw()

exports.loadTree = (cTree, callback) ->
	cTree.changeRootNode 'Sequence'
	rootNode = cTree.getRootNode()
	rootNode.addChild cTree.addNode('Failer')
	rootNode.addChild cTree.addNode('Succeeder')

	cNodes = cTree.listNodes()

	start = {
		text: { name: 'Start' }
		image: './assets/nodes/start.png'
		cNodeId: 'start'
	}

	nodeMap = {}
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

	nodeStructure = _.values nodeMap
	nodeStructure.unshift start
	nodeStructure.unshift treeConfig

	activeTreeGraph = new Treant nodeStructure
	registerDragAndDrop treeConfig, callback
	registerRightClick treeConfig, callback


exports.closeTree = (treeId) ->
	activeTreeGraph.destroy()
	activeTreeGraph = null
	console.log 'closing tree', treeId
