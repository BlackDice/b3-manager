
require './css/main.css'
require './css/tree.css'
require './css/panel.css'

_ = require 'lodash'
b3 = require 'b3'

require './tabs'
treeLoader = require './treeLoader'
chief = require '../public/libs/chief'
chiefAPI = chief.create()


# Panel input

$treeForm = $('#trees .panelInput')
$treeInput = $('#trees input')
$treeList = $('#treeList')
$nodeList = $('#nodeList')
activeTreeName  = document.getElementById 'activeTreeName'
treantContainer = document.getElementById 'treant'

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
activeTree = null

loadTreeList = ->
	list = chiefAPI.listTrees()
	$treeList.empty()
	for tree in list
		$li = $('<li>' + tree.getName() + '</li>').appendTo $treeList
		$("<i>border_color</i>").addClass('material-icons').appendTo $li
		$li.attr 'data', tree.getId()
		$li.on 'click', toggleTree(tree, $li)

updateActiveTreeName = ->
	activeTree = chiefAPI.getTree activeTreeId
	activeTreeName.innerHTML = activeTree.getName()
	centerHeadline()

centerHeadline = ->
	tileSize = 50
	center = (treantContainer.clientWidth / 2) - (tileSize / 2)
	quantized = Math.floor(center / tileSize) * tileSize
	textCenter = quantized - (activeTreeName.clientWidth / 2) + (tileSize / 2)
	activeTreeName.style.left = textCenter + 'px'

window.addEventListener 'resize', ->
	centerHeadline()

handleTreeChange = (change) ->

	eraseChildren = (cNode) ->
		children = cNode.getChildren()
		for child in children
			eraseChildren child
		activeTree.removeNode cNode

	switch change.action
		when 'createRoot'
			cNode = activeTree.changeRootNode change.nodeName
			treeLoader.addNodeToTree cNode, 0
		when 'addNode'
			cNode = activeTree.addNode change.nodeName
			cParent = activeTree.getNode change.parentCId
			cParent.addChild cNode
			treeLoader.addNodeToTree cNode, change.parentTId
		when 'removeNode'
			cNode = activeTree.getNode change.cNodeId
			eraseChildren cNode

	treeLoader.redrawTree()

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
			treeLoader.loadTree tree, handleTreeChange
			activeTreeId = loadingId
			$li.addClass 'active'

		updateActiveTreeName()

addTree = (name) ->
	newTree = chiefAPI.createTree()
	newTree.setName name
	loadTreeList()

# Node list

dragNode = (evt) ->
	evt.dataTransfer.setData 'text/plain', evt.target.getAttribute 'data'

loadNodes = ->
	list = chiefAPI.listBehaviorNodes()
	sortedList = _.groupBy list, 'category'
	order = ['composite', 'decorator', 'action']

	for key in order
		category = sortedList[key]
		$('<h5>' + key + 's' + '</h5>').appendTo $nodeList
		$ul = $('<ul></ul>').appendTo $nodeList

		for key, node of category
			$li = $('<li></li>').attr('draggable', 'true').appendTo $ul
			$img = $('<span></span>').addClass('nodeIcon').appendTo $li
			$img.css('background-image', "url('./assets/nodes/" + node.name.toLowerCase() + ".png'");
			$label = $('<span>' + node.name + '</span>').appendTo $li
			$li.attr 'data', node.name
			$li.on 'dragstart', (evt) -> dragNode(evt)

loadNodes()


#loadTreeList()
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

$('#panel').get(0).scrollTop = 0
$('#panel').scrollTop 0
$('body, html, #panel').scrollTop 0
