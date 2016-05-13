require './main.css'

gojs = require 'gojs'
b3 = require 'b3'

tree = new b3.BehaviorTree()

data = require('./tree.json')
tree.load data, data.custom_nodes

console.log tree
