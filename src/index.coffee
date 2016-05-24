
require './css/main.css'
require './css/tree.css'
require './css/panel.css'

_ = require 'lodash'
b3 = require 'b3'

require './tabs'
treeLoader = require './treeLoader'
chief = require '../public/libs/chief'
chiefAPI = chief.create()
window.chiefAPI = chiefAPI


# Panel input

$treeForm = $('#trees .panelInput')
$treeInput = $('#trees input')
$treeList = $('#treeList')
$nodeList = $('#nodeList')

$treeInput.on 'keyup', (evt) ->
	if evt.keyCode is 13
		addTree $treeInput.val()

$treeForm.find('button').on 'click', ->
	addTree $treeInput.val()

$('#addTree').on 'click', ->
	$(this).toggleClass 'active'
	$treeForm.toggleClass('hidden').find('input').focus()

# Tree list

activeTreeId = null

loadTrees = ->
	list = chiefAPI.listTrees()
	$treeList.empty()
	for tree in list
		$li = $('<li>' + tree.getName() + '</li>').appendTo $treeList
		$("<i>border_color</i>").addClass('material-icons').appendTo $li
		$li.attr 'data', tree.getId()
		$li.on 'click', toggleTree tree, $li

toggleTree = (tree, $li) ->
	return ->
		loadingId = tree.getId()
		$treeList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if activeTreeId == loadingId
			treeLoader.closeTree activeTreeId
			activeTreeId = null
			return

		# close any currently opened
		if activeTreeId
			treeLoader.closeTree activeTreeId
			activeTreeId = null

		# load if new
		if activeTreeId != loadingId
			treeLoader.loadTree tree
			activeTreeId = loadingId
			$li.addClass 'active'

addTree = (name) ->
	newTree = chiefAPI.createTree()
	newTree.setName name
	loadTrees()

# Node list

list = [ # temporary
	{name: 'Sequence',	category: 'Composites'}
	{name: 'Priority',	category: 'Composites'}
	{name: 'Action',	category: 'Actions'}
	{name: 'Condition',	category: 'Conditions'}
]

loadNodes = ->
	#list = chiefAPI.listBehaviorNodes()
	sortedList = _.groupBy list, 'category'
	console.log sortedList

	for key, categoryData of sortedList
		$('<h5>' + key + '</h5>').appendTo $nodeList
		$ul = $('<ul></ul>').appendTo $nodeList

		for key, node of categoryData
			$li = $('<li></li>').appendTo $ul
			$img = $('<span></span>').addClass('nodeIcon').appendTo $li
			$img.css('background-image', "url('./assets/" + node.name.toLowerCase() + ".png'");
			$label = $('<span>' + node.name + '</span>').appendTo $li
			$li.attr 'data', node.name
			#$li.on 'click'

loadNodes()



#loadTrees()
# Mock list
addTree 'Rat'
addTree 'Human'
addTree 'Bull'
addTree 'Beatle'
addTree 'Bat'
addTree 'Snail'
addTree 'Stroll'
addTree 'Rest'
addTree 'Combat'
addTree 'Chase'
addTree 'Flight'
