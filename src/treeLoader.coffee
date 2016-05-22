
data = require './trees/tree.json'

treeConfig = {
	chart: {
		container: '#chart',
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
}

setTreantAttributes = (node) ->
	node.text = {name: node.type, desc: ' ', contact: ' '}
	node.image = './assets/' + node.type.toLowerCase() + '.png'
	node.collapsed = false
	node.HTMLclass = 'none' 	# running, error, success

parseParent = (node) ->
	nodeKey = Object.keys(node)[0]
	childrenKeys = node[nodeKey]
	nodeData = data[nodeKey]
	setTreantAttributes nodeData
	nodeData.children = parseChildren childrenKeys
	return nodeData

parseChildren = (children) ->
	childNodes = []
	for key in children
		nodeData = data[key]
		setTreantAttributes nodeData
		childNodes.push nodeData
		# need get deeper into children? run parseParent on them
	return childNodes

treeData = parseParent data.relations
treeConfig.nodeStructure = treeData

new Treant treeConfig
