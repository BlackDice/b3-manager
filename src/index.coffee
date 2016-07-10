
require './css/main.css'
require './css/tree.css'
require './css/panel.css'
require './css/controls.css'
require './css/jsoneditor-dark.css'

_ = require 'lodash'
b3 = require 'b3'
Chief = require 'behavior3-chief'
alertify = require 'alertify.js'
firebase = require 'firebase'

alertify.logPosition 'bottom right'

require './tabs'
treeLoader = require './treeLoader'
memory = require './memory'
chief = Chief.create()

config =
	apiKey: "AIzaSyCroAZGxn8rsHykeQgcLIOruDrBwvzgLBk"
	databaseURL: "https://tauros-dev-7685.firebaseio.com"
firebase.initializeApp config

adapter = Chief.adapter.Firebase
	chief: chief,
	firebaseRef: firebase.database().ref()

gridSize = 50


document.addEventListener 'keydown', (evt) ->
	# tab
	if evt.keyCode is 9 and not document.activeElement.getAttribute('contenteditable')
		evt.preventDefault()
		panelWidth  = if $('#panel').width()  == 350 then '0px' else '350px'
		memoryWidth = if $('#memory').width() == 350 then '0px' else '350px'

		$('#panel').width panelWidth
		$('#memory').width memoryWidth

		if cActiveTree
			treeLoader.redrawTree false

# Panel input

$treeForm = $('#trees .panelInput')
$treeInput = $('#trees input')
$treeList = $('#treeList')
$nodeList = $('#nodeList')
$subjectList = $('#subjectList')
$activeTreeName = $('#activeTreeName')
$activeTreeDesc = $('#activeTreeDesc')
treantContainer = document.getElementById 'treant'

$treeInput.on 'keyup', (evt) ->
	if evt.keyCode is 13 # enter
		addTree $treeInput.val()
		$treeInput.focus()
		toggleInput()

$treeForm.find('button').on 'click', ->
	addTree $treeInput.val()

$('#addTree').on 'click', ->
	toggleInput()

toggleInput = ->
	$(this).toggleClass 'active'
	$treeForm.toggleClass 'hidden'

# Tree list

cActiveTreeId = null
cActiveTree = null
timer = null

loadTreeList = ->
	cTreeList = chief.listTrees()
	$treeList.empty()
	for tree in cTreeList
		$li = $('<li>' + tree.getName() + '</li>').appendTo $treeList
		#$("<i>border_color</i>").addClass('material-icons').appendTo $li
		$li.attr 'data', tree.getId()
		$li.on 'click', toggleTree(tree, $li)

handleTreeChange = (change) ->

	eraseChildren = (cNode) ->
		children = cNode.getChildren()
		for child in children
			cActiveTree.removeNode child
			eraseChildren child
		cActiveTree.removeNode cNode

	switch change.action
		when 'createRoot'
			cRootNode = cActiveTree.createNode change.nodeName
			cActiveTree.setRootNode cRootNode
			treeLoader.addNodeToTree cRootNode, 0

		when 'addNode'
			cNode = cActiveTree.createNode change.nodeName
			cActiveTree.addNode cNode
			cParent = cActiveTree.getNode change.parentCId
			if cParent.acceptsChildren()
				cParent.addChild cNode
				treeLoader.addNodeToTree cNode, change.parentTId
			else
				alertify.error 'Node does not accept children'

		when 'removeNode'
			cNode = cActiveTree.getNode change.cNodeId
			eraseChildren cNode
			treeLoader.redrawTree()

		when 'switchNodes'
			cNodeA = cActiveTree.getNode change.cNodeIdA
			cNodeB = cActiveTree.getNode change.cNodeIdB
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
			cNode = cActiveTree.getNode change.cNodeId
			cParent = cNode.getParent()
			cNewParent = cActiveTree.getNode change.parentCId
			if cNewParent.acceptsChildren()
				cParent.removeChild cNode
				cNewParent.addChild cNode
				treeLoader.changeParent change.tNodeId, change.parentTId
				treeLoader.redrawTree()
			else
				alertify.error 'Node does not accept children'

		when 'showNodeMemory'
			if activeSubject
				cNode = cActiveTree.getNode change.cNodeId
				memory.loadNodeMemory activeSubject, cNode

toggleTree = (tree, $li) ->
	return ->
		loadingId = tree.getId()
		$treeList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if cActiveTreeId == loadingId
			closeTree()
			return

		# close any currently opened
		if cActiveTreeId
			closeTree()

		# load if new
		if cActiveTreeId != loadingId
			openTree loadingId, tree, $li

		# temporary
		if cActiveTree
			activeSubject = chief.addSubject(cActiveTree)
			loadSubjects()
		else
			activeSubject = null
			loadSubjects()

openTree = (id, tree, $li) ->
	treeLoader.loadTree tree, gridSize, handleTreeChange
	cActiveTreeId = id
	$li.addClass 'active'
	cActiveTree = chief.getTree cActiveTreeId
	$activeTreeName.html cActiveTree.getName()
	$activeTreeDesc.html cActiveTree.getDescription()

closeTree = ->
	treeLoader.closeTree cActiveTreeId
	cActiveTreeId = null
	$activeTreeName.html ''
	$activeTreeDesc.html ''
	$('#controls').hide()

addTree = (name) ->
	newTree = chief.createTree()
	newTree.setName name
	newTree.setDescription 'Lorem ipsum dolor sit amet' # temp
	chief.addTree newTree
	loadTreeList()

adapter.sync().then ->
	loadTreeList()
	# Temporary list mock
	#addTree 'Rat'
	#addTree 'Human'
	#addTree 'Bull'
	#addTree 'Beatle'
	#addTree 'Bat'
	#addTree 'Snail'
	#addTree 'Stroll'
	#addTree 'Rest'
	#addTree 'Combat'
	#addTree 'Chase'
	#addTree 'Flight'

# Tree description

$activeTreeDesc.on 'input', ->
	cActiveTree.setDescription $activeTreeDesc.html()

$activeTreeName.on 'input', ->
	cActiveTree.setName $activeTreeName.html()

# Node list

dragNode = (evt) ->
	transfer = JSON.stringify {type: 'add', name: evt.target.getAttribute 'data'}
	evt.dataTransfer.setData 'text/plain', transfer

loadNodes = ->
	cNodeList = chief.listBehaviorNodes()
	sortedList = _.groupBy cNodeList, 'category'
	order = ['composite', 'decorator', 'action']

	for key in order
		category = sortedList[key]
		$('<h5>' + key + 's' + '</h5>').appendTo $nodeList
		$ul = $('<ul></ul>').appendTo $nodeList

		for key, node of category
			$li = $('<li></li>').attr('draggable', 'true').appendTo $ul
			$img = $('<span></span>').addClass('nodeIcon').appendTo $li
			$img.css 'background-image', "url('./assets/nodes/" + node.name.toLowerCase() + ".png'"
			$label = $('<span>' + node.name + '</span>').appendTo $li
			$li.attr 'data', node.name
			$li.on 'dragstart', (evt) -> dragNode(evt)

loadNodes()


# Subject list

activeSubject = null
activeSubjectId = null

loadSubjects = ->
	cSubjectList = chief.listSubjects()
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
			$activeTreeName.html cActiveTree.getName()
			closeSubject()
			return

		# close any currently opened
		if activeSubjectId
			closeSubject()

		# load if new
		if activeSubjectId != loadingId
			# start displaying subject
			openSubject loadingId, subject, $li

openSubject = (id, subject, $li) ->
	activeSubjectId = id
	activeSubject = subject
	$li.addClass 'active'
	$('#controls').show()
	$activeTreeName.html cActiveTree.getName() + ': ' + activeSubjectId

	showMemoryPanel()
	memory.loadTreeMemory cActiveTree, activeSubject
	memory.loadSubjectMemory activeSubject

closeSubject = ->
	$('#controls').hide()
	activeSubjectId = null

	hideMemoryPanel()
	memory.clearMemory()

showMemoryPanel = ->
	$('#memory').removeClass 'hidden'
	treeLoader.getActiveTree().resize()

hideMemoryPanel = ->
	$('#memory').addClass 'hidden'
	treeLoader.getActiveTree().resize()

loadSubjects()


# Controls

playing = false
tickInterval = 100
tickIntervalRef = null

$('#play').on 'click', ->
	if playing is false
		playing = true
		memory.disableEditors()
		$(this).removeClass('play').addClass('stop')
		tickIntervalRef = setInterval((-> chief.tick()), tickInterval)

	else
		playing = false
		memory.enableEditors()
		treeLoader.clearAllNodes()
		$(this).removeClass('stop').addClass('play')
		clearInterval tickIntervalRef
		activeSubject.getMemory().forget()
		console.log 'memory cleared'


$('#step').on 'click', ->
	chief.tick()
