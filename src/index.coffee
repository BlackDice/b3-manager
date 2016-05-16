
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

for key, children of data.relations
	nodeData = data[key]
	node = treeConfig.nodeStructure = {}
	node.text = {name: nodeData.name}
	node.children = []
	if children
		for childKey in children
			child = data[childKey]
			child.text = {name: child.name}
			node.children.push child

console.log treeConfig

new Treant treeConfig
