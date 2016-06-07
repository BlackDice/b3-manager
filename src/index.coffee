
require './css/main.css'
require './css/tree.css'
require './css/panel.css'
require './css/controls.css'

_ = require 'lodash'
b3 = require 'b3'
chief = require 'behavior3-chief'
alertify = require 'alertify.js'
alertify.logPosition 'bottom right'

require './tabs'
treeLoader = require './treeLoader'
chiefAPI = chief.create()

gridSize = 50


# Panel input

$treeForm = $('#trees .panelInput')
$treeInput = $('#trees input')
$treeList = $('#treeList')
$nodeList = $('#nodeList')
$subjectList = $('#subjectList')
$activeTreeName = $('#activeTreeName')
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
timer = null

loadTreeList = ->
	cTreeList = chiefAPI.listTrees()
	$treeList.empty()
	for tree in cTreeList
		$li = $('<li>' + tree.getName() + '</li>').appendTo $treeList
		$("<i>border_color</i>").addClass('material-icons').appendTo $li
		$li.attr 'data', tree.getId()
		$li.on 'click', toggleTree(tree, $li)

handleTreeChange = (change) ->

	eraseChildren = (cNode) ->
		children = cNode.getChildren()
		for child in children
			activeTree.removeNode child
			eraseChildren child
		activeTree.removeNode cNode

	switch change.action
		#when 'treeLoaded'
		#when 'treeMoved'
		when 'createRoot'
			cNode = activeTree.changeRootNode change.nodeName
			treeLoader.addNodeToTree cNode, 0

		when 'addNode'
			cNode = activeTree.addNode change.nodeName
			cParent = activeTree.getNode change.parentCId
			if cParent.acceptsChildren()
				cParent.addChild cNode
				treeLoader.addNodeToTree cNode, change.parentTId
			else
				alertify.error 'Node does not accept children'

		when 'removeNode'
			cNode = activeTree.getNode change.cNodeId
			eraseChildren cNode
			treeLoader.redrawTree()

		when 'switchNodes'
			cNodeA = activeTree.getNode change.cNodeIdA
			cNodeB = activeTree.getNode change.cNodeIdB
			cParent = cNodeA.getParent()
			children = cParent.getChildren()
			indexA = children.indexOf cNodeA
			indexB = children.indexOf cNodeB

			for child in children
				cParent.removeChild child

			children.splice indexA, 1, cNodeB
			children.splice indexB, 1, cNodeA

			for child in children
				cParent.addChild child
			treeLoader.redrawTree()

		when 'changeParent'
			cNode = activeTree.getNode change.cNodeId
			cParent = cNode.getParent()
			cNewParent = activeTree.getNode change.parentCId
			if cNewParent.acceptsChildren()
				cParent.removeChild cNode
				cNewParent.addChild cNode
				treeLoader.changeParent change.tNodeId, change.parentTId
				treeLoader.redrawTree()
			else
				alertify.error 'Node does not accept children'

toggleTree = (tree, $li) ->
	return ->
		loadingId = tree.getId()
		$treeList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if activeTreeId == loadingId
			treeLoader.closeTree activeTreeId
			activeTreeId = null
			$activeTreeName.html ''
			return

		# close any currently opened
		if activeTreeId
			treeLoader.closeTree activeTreeId
			activeTreeId = null

		# load if new
		if activeTreeId != loadingId
			treeLoader.loadTree tree, gridSize, handleTreeChange
			activeTreeId = loadingId
			$li.addClass 'active'
			activeTree = chiefAPI.getTree activeTreeId
			$activeTreeName.html activeTree.getName()

		# temporary
		if activeTree
			activeSubject = chiefAPI.addSubject activeTree
			loadSubjects()
		else
			activeSubject = null
			loadSubjects()

addTree = (name) ->
	newTree = chiefAPI.createTree()
	newTree.setName name
	loadTreeList()

#loadTreeList()
# Remporary list mock
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



# Node list

dragNode = (evt) ->
	transfer = JSON.stringify {type: 'add', name: evt.target.getAttribute 'data'}
	evt.dataTransfer.setData 'text/plain', transfer

loadNodes = ->
	cNodeList = chiefAPI.listBehaviorNodes()
	sortedList = _.groupBy cNodeList, 'category'
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


# Subject list

activeSubject = null
activeSubjectId = null

loadSubjects = ->
	cSubjectList = chiefAPI.listSubjects()
	$subjectList.empty()
	for subject in cSubjectList
		$li = $('<li>' + subject.getId() + '</li>').appendTo $subjectList
		$li.attr 'data', subject.getId()
		$li.on 'click', toggleSubject(subject, $li)

toggleSubject = (subject, $li) ->
	return ->
		loadingId = subject.getId()
		$subjectList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if activeSubjectId == loadingId
			# stop displaying subject
			activeSubjectId = null
			$activeTreeName.html activeTree.getName()
			$('#controls').hide()
			return

		# close any currently opened
		if activeSubjectId
			# stop displaying subject
			$('#controls').hide()
			activeSubjectId = null

		# load if new
		if activeSubjectId != loadingId
			# start displaying subject
			activeSubjectId = loadingId
			$li.addClass 'active'
			$('#controls').show()
			$activeTreeName.html activeTree.getName() + ': ' + activeSubjectId

		activeSubject = subject

loadSubjects()


# Controls

playing = false

$('#play').on 'click', ->
	if playing is false
		playing = true
		$(this).removeClass('play').addClass('stop')
		chiefAPI.start 100 # 0.1s
	else
		playing = false
		treeLoader.clearAllNodes()
		$(this).removeClass('stop').addClass('play')
		chiefAPI.stop()

$('#step').on 'click', ->
	chiefAPI.tick()
