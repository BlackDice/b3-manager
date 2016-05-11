require './main.css'

gojs = require 'gojs'
b3 = require 'b3'

tree = new b3.BehaviorTree()
tree.load require('./tree.json')

console.log tree
