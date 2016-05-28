
data = require './trees/tree.json'

treeConfig = {
	container: '#treant',
	quantize: 50,
	rootOrientation: 'NORTH',
	nodeAlign: 'BOTTOM',
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

	$contextmenu = $('#contextmenu')
	$container = $(treantConfig.container)
	highlightedEl = null

	clearHighlight = ->
		if highlightedEl
			highlightedEl.classList.remove 'highlight'

	$container.on 'contextmenu', (evt) ->
		if evt.target.classList.contains 'node'
			evt.preventDefault()
			$contextmenu.show().css({
				top: evt.clientY - 20,
				left: evt.clientX - 20
			})
		evt.target.classList.add 'highlight'
		clearHighlight()
		highlightedEl = evt.target

	document.addEventListener 'click', ->
		$contextmenu.hide()
		clearHighlight()
		#callback {action: 'removeNode', nodeId: }

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
			if parentCId == 'home'
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

exports.redrawTree = ->
	activeTreeGraph.redraw()

exports.addNodeToTree = (cNode, parentTId) ->
	tNode = createTNode cNode
	activeTreeGraph.addNode tNode, parentTId

exports.loadTree = (cTree, callback) ->
	console.log 'loading tree', cTree.getName()

	cTree.changeRootNode 'Sequence'
	rootNode = cTree.getRootNode()
	rootNode.addChild cTree.addNode('Failer')
	rootNode.addChild cTree.addNode('Succeeder')

	cNodes = cTree.listNodes()

	home = {
		text: { name: 'Home' }
		image: './assets/nodes/home.png'
		HTMLid: 'home'
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
			tNode.parent = home

	nodeStructure = _.values nodeMap
	nodeStructure.unshift home
	nodeStructure.unshift treeConfig

	activeTreeGraph = new Treant nodeStructure
	registerDragAndDrop treeConfig, callback
	registerRightClick treeConfig, callback


exports.closeTree = (treeId) ->
	activeTreeGraph.destroy()
	activeTreeGraph = null
	console.log 'closing tree', treeId
