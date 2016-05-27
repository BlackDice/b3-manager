
data = require './trees/tree.json'

treeConfig = {
	container: '#treant',
	quantize: 50,
	rootOrientation: 'NORTH',
	nodeAlign: 'BOTTOM',
	levelSeparation: 60,
	siblingSeparation: 60,
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


registerDragAndDrop = (treantConfig, callback) ->

	$container = $(treantConfig.container)
	$container.on 'dragover', (evt) ->
		if evt.target.classList.contains 'node'
			evt.preventDefault()
			evt.target.classList.add 'dragover'

	$container.on 'dragleave', (evt) ->
		if evt.target.classList.contains 'node'
			evt.target.classList.remove 'dragover'

	$container.on 'drop', (evt) ->
		if evt.target.classList.contains 'node'
			evt.preventDefault()
			evt.target.classList.remove 'dragover'

			childName = evt.dataTransfer.getData 'text'
			parentId = evt.target.id

			# createRoot, addNode, changeParent
			if parentId == 'home'
				callback {action: 'createRoot', nodeName: childName}
			else
				callback {action: 'addNode', nodeName: childName, parentId: parentId}

mapNode = (node) ->
	tNode = {
		text: {name: node.getName(), desc: ' ', contact: ' '}
		image: './assets/nodes/' + node.getName().toLowerCase() + '.png'
		collapsed: false
		HTMLclass: 'none'			# running, failure, error, success
		HTMLid: node.getId()
	}
	# node.getDescription()
	return tNode

exports.loadTree = (tree, callback) ->
	console.log 'loading tree', tree.getName()

	tree.changeRootNode 'Sequence'
	rootNode = tree.getRootNode()
	rootNode.addChild tree.addNode('Failer')
	rootNode.addChild tree.addNode('Succeeder')

	cNodes = tree.listNodes()

	home = {
		text: { name: 'Home' }
		image: './assets/nodes/home.png'
		HTMLid: 'home'
	}

	nodeMap = {}
	for cNode in cNodes
		nodeMap[cNode.getId()] = mapNode cNode

	for cNode in cNodes
		cParentNode = cNode.getParent()
		tNode = nodeMap[cNode.getId()]
		if cParentNode
			tParentNode = nodeMap[cParentNode.getId()]
			tNode.parent = tParentNode
		else
			tNode.parent = home

	console.log nodeMap

	nodeStructure = _.values nodeMap
	nodeStructure.unshift home
	nodeStructure.unshift treeConfig

	console.log nodeStructure

	activeTreeGraph = new Treant nodeStructure
	registerDragAndDrop treeConfig, callback


exports.closeTree = (treeId) ->
	activeTreeGraph.destroy()
	activeTreeGraph = null
	console.log 'closing tree', treeId
