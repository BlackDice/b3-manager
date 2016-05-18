
gojs = require 'gojs'
b3 = require 'b3'
data = require('./tree.json')

#tree = new b3.BehaviorTree()
#tree.load data
#console.log data


treeConfig = {
	chart: {
		container: '#chart',
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
			type: 'straight',
			style: {
				'stroke-width': 7,
				'stroke': '#414141'
			}
		}
	}
}

setTreantAttributes = (node) ->
	node.text = {name: node.type}
	node.image = './assets/' + node.type.toLowerCase() + '.png'

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
