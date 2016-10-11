
_ = require 'lodash'
Chief = require 'behavior3-chief'
data = require './trees/tree.json'
nodeConfig = require './nodeConfig'
memory = require './memory'

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

tActiveTree = null
tActiveTreeHasRoot = null
tActiveNode = null
cActiveTree = null
cActiveNode = null
$container = null
highlightedEl = null
nodeMap = {}
$erase = $('#commandErase')
$left = $('#commandMoveLeft')
$right = $('#commandMoveRight')
$contextmenu = $('#contextmenu')


clearDisables = ->
	$left.removeClass 'disabled'
	$right.removeClass 'disabled'
	$erase.removeClass 'disabled'

clearHighlight = ->
	if highlightedEl
		highlightedEl.classList.remove 'highlight'

registerClick = (treantConfig, callback) ->
	$container = $(treantConfig.container)
	$container.on 'click', (evt) ->
		if evt.target.classList.contains 'node'
			evt.preventDefault()
			if tActiveNode != evt.target
				if tActiveNode then tActiveNode.classList.remove 'highlight'
				highlightedEl = evt.target
				evt.target.classList.add 'highlight'
				tActiveNode = evt.target
				cNodeId = evt.target.getAttribute 'cnodeid'
				cActiveNode = cActiveTree.getNode cNodeId
				callback {action: 'showNodeMemory', cNodeId: cNodeId}
				memory.activate '#tab-nodeEditor'
				nodeConfig.load cActiveNode
				nodeConfig.positionEditor evt.target
				nodeConfig.showEditor()
			else
				evt.target.classList.add 'highlight'
		else
			tActiveNode = null
			nodeConfig.hideEditor()
			memory.disable '#tab-nodeEditor'
			$contextmenu.hide()
			clearHighlight()
			clearDisables()

registerRightClick = (treantConfig, callback) ->
	$container = $(treantConfig.container)

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
			leftNeighborTId = parseInt tActiveTree.getNodeAttribute tNodeId, 'leftNeighborId'
			rightNeighborTId = parseInt tActiveTree.getNodeAttribute tNodeId, 'rightNeighborId'
			unless leftNeighborTId
				$left.addClass 'disabled'
			unless rightNeighborTId
				$right.addClass 'disabled'

	$erase.on 'click', (evt) ->
		if $erase.hasClass 'disabled' then return
		cNodeId = $(this).parent().attr 'cnodeid'
		tNodeId = parseInt $(this).parent().attr 'tnodeid'
		parentId = tActiveTree.getNodeAttribute(tNodeId, 'parentId')
		tActiveTree.removeNode tNodeId
		if parentId is -1 then tActiveTreeHasRoot = false
		callback {action: 'removeNode', cNodeId: cNodeId}
		$contextmenu.hide()

	$left.on 'click', (evt) ->
		if $left.hasClass 'disabled' then return
		cNodeIdA = $(this).parent().attr 'cnodeid'
		tNodeId = parseInt $(this).parent().attr 'tnodeid'
		leftNeighborTId = parseInt tActiveTree.getNodeAttribute tNodeId, 'leftNeighborId'
		cNodeIdB = tActiveTree.getNodeAttribute leftNeighborTId, 'cNodeId'
		tActiveTree.switchIndexes tNodeId, leftNeighborTId
		callback {action: 'switchNodes', cNodeIdA: cNodeIdA, cNodeIdB: cNodeIdB}
		$contextmenu.hide()

	$right.on 'click', (evt) ->
		if $right.hasClass 'disabled' then return
		cNodeIdA = $(this).parent().attr 'cnodeid'
		tNodeId = parseInt $(this).parent().attr 'tnodeid'
		rightNeighborTId = parseInt tActiveTree.getNodeAttribute tNodeId, 'rightNeighborId'
		cNodeIdB = tActiveTree.getNodeAttribute rightNeighborTId, 'cNodeId'
		tActiveTree.switchIndexes tNodeId, rightNeighborTId
		callback {action: 'switchNodes', cNodeIdA: cNodeIdA, cNodeIdB: cNodeIdB}
		$contextmenu.hide()

	window.addEventListener 'resize', (evt) ->
		if tActiveTree
			tActiveTree.resize()


dragNode = (evt) ->
	transfer = JSON.stringify
		type: 'change',
		tid: evt.target.getAttribute('tnodeid'),
		cid: evt.target.getAttribute('cnodeid')

	evt.originalEvent.dataTransfer.setData 'text/plain', transfer

registerDragAndDrop = (treantConfig, callback) ->
	$container = $(treantConfig.container)
	$container.on 'dragover', (evt) ->
		if tActiveTreeHasRoot is false
			evt.preventDefault()
		else if evt.target.classList.contains 'node'
			evt.preventDefault()
			evt.target.classList.add 'highlight'

	$container.on 'dragleave', (evt) ->
		if evt.target.classList.contains 'node'
			evt.target.classList.remove 'highlight'

	$container.on 'drop', (evt) ->
		if tActiveTreeHasRoot is false
			evt.preventDefault()
			obj = JSON.parse evt.originalEvent.dataTransfer.getData 'text'
			callback {action: 'createRoot', behaviorId: obj.behaviorId}

		else if evt.target.classList.contains 'node'
			evt.preventDefault()
			evt.target.classList.remove 'highlight'

			obj = JSON.parse evt.originalEvent.dataTransfer.getData 'text'
			parentCId = evt.target.getAttribute 'cnodeid'
			parentTId = parseInt evt.target.getAttribute 'tnodeid'

			switch obj.type
				when 'add'
					callback {action: 'addNode', behaviorId: obj.behaviorId, parentCId: parentCId, parentTId: parentTId}
				when 'change'
					callback {action: 'changeParent', tNodeId: obj.tid, cNodeId: obj.cid, parentTId: parentTId, parentCId: parentCId}

	$('.node').on 'dragstart', (evt) -> dragNode(evt)

unregisterAllEvents = ->
	$container.unbind 'dragover'
	$container.unbind 'dragleave'
	$container.unbind 'drop'
	$container.unbind 'click'
	$container.unbind 'contextmenu'
	$left.unbind 'click'
	$right.unbind 'click'
	$erase.unbind 'click'

createTNode = (cNode) ->
	tNode = {
		text: {name: cNode.getTitle(), status: ' ', contact: ' ' }
		image: './assets/behaviors/' + cNode.getTitle().toLowerCase() + '.png'
		collapsed: false
		HTMLclass: 'none'			# running, failure, error, success
		cNodeId: cNode.getId()
	}

updateNode = (status) ->
	cNode = this
	tNode = nodeMap[cNode.getId()].tNode
	tConn = nodeMap[cNode.getId()].connection

	clearClasses tNode.nodeDOM
	clearConnection tConn

	switch status
		when Chief.status.SUCCESS
			tNode.nodeDOM.classList.add 'success'
			tConn.attr 'stroke', '#299b44'
		when Chief.status.RUNNING
			tNode.nodeDOM.classList.add 'running'
			tConn.attr 'stroke', '#9c7500'
		when Chief.status.FAILURE
			tNode.nodeDOM.classList.add 'failure'
			tConn.attr 'stroke', '#d2521a'
		when Chief.status.ERROR
			tNode.nodeDOM.classList.add 'error'
			tConn.attr 'stroke', '#d21a1a'

clearClasses = (el) ->
	el.classList.remove 'success'
	el.classList.remove 'failure'
	el.classList.remove 'running'
	el.classList.remove 'error'

clearConnection = (el) ->
	if el
		el.attr 'stroke', '#414141'

treantLoaded = ->
	tNodes = tActiveTree.tree.nodeDB.db
	for tNode in tNodes
		id = tNode.cNodeId
		if id and id != 'start'
			nodeMap[id].tNode = tNode
			nodeMap[id].connection = tActiveTree.tree.connectionStore[tNode.id]

nodeAdded = (cNode, tNode, tNodeDefinition) ->
	# register events
	$(tNode.nodeDOM).on 'dragstart', (evt) -> dragNode(evt)
	# add to nodeMap
	id = cNode.getId()
	nodeMap[id] = tNodeDefinition
	nodeMap[id].tNode = tNode
	nodeMap[id].connection = tActiveTree.tree.connectionStore[tNode.id]

exports.clearAllNodes = ->
	tNodes = tActiveTree.tree.nodeDB.db
	for tNode in tNodes
		id = tNode.cNodeId
		unless id == 'start'
			clearClasses tNode.nodeDOM
			clearConnection nodeMap[id].connection

exports.addRootNode = (cNode) ->
	tActiveTreeHasRoot = true
	this.addNodeToTree cNode, -1

exports.addNodeToTree = (cNode, parentTId) ->
	tNodeDefinition = createTNode cNode
	tNode = tActiveTree.addNode tNodeDefinition, parentTId
	tActiveTree.redraw -> nodeAdded(cNode, tNode, tNodeDefinition)

exports.changeParent = (tNodeId, parentTId) ->
	tActiveTree.changeParent tNodeId, parentTId

exports.redrawTree = (animate) ->
	tActiveTree.redraw null, animate

exports.getActiveCNode = -> return cActiveNode

exports.getActiveTree = -> return tActiveTree

exports.loadTree = (cTree, gridSize, handleTreeChange) ->
	config = _.cloneDeep treeConfig
	config.quantize = gridSize
	cNodes = cTree.listNodes()

	for cNode in cNodes
		nodeMap[cNode.getId()] = createTNode cNode

	for cNode in cNodes
		cParentNodeId = cNode.getParentId()
		tNode = nodeMap[cNode.getId()]
		if cParentNodeId.indexOf('Tree') == -1
			tParentNode = nodeMap[cParentNodeId]
			tNode.parent = tParentNode

	nodeStructure = _.values nodeMap
	nodeStructure.unshift config

	cActiveTree = cTree
	tActiveTree = new Treant nodeStructure, handleTreeChange, treantLoaded
	tActiveTreeHasRoot = cTree.getRootNode() isnt null

	registerDragAndDrop config, handleTreeChange
	registerRightClick config, handleTreeChange
	registerClick config, handleTreeChange

exports.closeTree = (treeId) ->
	nodeMap = {}
	if tActiveTree
		tActiveTree.destroy()
		tActiveTree = null
		unregisterAllEvents()
	$container = null
