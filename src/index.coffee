
require './css/main.css'
require './css/tree.css'
require './css/panel.css'
require './css/controls.css'
require './css/jsoneditor-dark.css'

_ = require 'lodash'
b3 = require 'b3'
Chief = require 'behavior3-chief'
firebase = require 'tauros-firebase/b3manager'
alertify = require 'alertify.js'
alertify.logPosition 'bottom right'

require './tabs'
treeLoader = require './treeLoader'
memory = require './memory'

nodes = [
	name: 'RandomStep',
	base: 'Action',
	tick: ->,
,
	name: 'IsStill',
	base: 'Condition',
	tick: ->,
]

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

# Panel

chiefList = {}
activeChief = null
cActiveTreeId = null
cActiveTree = null
timer = null

$select = $('#select')
$treeForm = $('#trees .panelInput')
$treeInput = $('#trees input')
$treeList = $('#treeList')
$nodeList = $('#nodeList')
$subjectList = $('#subjectList')
$activeTreeName = $('#activeTreeName')
$activeTreeDesc = $('#activeTreeDesc')
treantContainer = document.getElementById 'treant'

setupFirebase = (envName) ->
	if chiefList[envName]
		activeChief = chiefList[envName]
		loadData()
		return

	app = firebase.connect envName
	firebaseRef = app.database().ref()
	activeChief = Chief.create({ nodes })
	chiefList[envName] = activeChief

	adapter = Chief.adapter.Firebase
		chief: activeChief,
		firebaseRef: firebaseRef

	adapter.sync().then ->
		loadData()

loadData = ->
	loadTreeList()
	loadNodes()
	loadSubjects()

enviroments = firebase.listEnvironments()
for env in enviroments
	$select.append $('<option>',
		value: env,
		text: env
	)
	if activeChief is null
		setupFirebase env

$select.on 'change', (evt) ->
	if cActiveTreeId then closeTree()
	setupFirebase evt.target.value

$treeInput.on 'keyup', (evt) ->
	if evt.keyCode is 13 # enter
		addTree $treeInput.val()
		$treeInput.focus()
		toggleInput()

$treeForm.find('button').on 'click', ->
	addTree $treeInput.val()
	toggleInput()

$('#addTree').on 'click', ->
	toggleInput()

toggleInput = ->
	$(this).toggleClass 'active'
	$treeForm.toggleClass 'hidden'

# Tree list

loadTreeList = ->
	cTreeList = activeChief.listTrees()
	$treeList.empty()
	for cTree in cTreeList
		$li = $('<li>' + cTree.getName() + '</li>').appendTo $treeList
		$erase = $("<i>delete</i>").addClass('material-icons').appendTo($li)
		$erase.on 'click', removeTree(cTree.getId())
		$li.attr 'data', cTree.getId()
		$li.on 'click', toggleTree(cTree, $li)

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
			if cRootNode.acceptsChildren()
				cActiveTree.setRootNode cRootNode
				treeLoader.addRootNode cRootNode
			else
				alertify.error 'Add node that accepts children'

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

toggleTree = (cTree, $li) ->
	return ->
		loadingId = cTree.getId()
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
			openTree loadingId, cTree, $li

		# temporary
		if cActiveTree
			activeSubject = activeChief.addSubject(cActiveTree)
			loadSubjects()
		else
			activeSubject = null
			loadSubjects()

openTree = (id, cTree, $li) ->
	treeLoader.loadTree cTree, gridSize, handleTreeChange
	cActiveTreeId = id
	$li.addClass 'active'
	cActiveTree = activeChief.getTree id
	$activeTreeName.html cActiveTree.getName()
	$activeTreeDesc.html cActiveTree.getDescription()

closeTree = ->
	treeLoader.closeTree cActiveTreeId
	cActiveTreeId = null
	$activeTreeName.html ''
	$activeTreeDesc.html ''
	$('#controls').hide()

addTree = (name) ->
	newTree = activeChief.createTree()
	newTree.setName name
	newTree.setDescription 'Lorem ipsum dolor sit amet' # temp
	activeChief.addTree newTree
	loadTreeList()

removeTree = (cTreeId) ->
	return (evt) ->
		evt.stopPropagation()
		closeTree()
		activeChief.removeTree cTreeId
		loadTreeList()

# Tree description

$activeTreeDesc.on 'input', ->
	cActiveTree.setDescription $activeTreeDesc.html()

$activeTreeName.on 'input', ->
	cActiveTree.setName $activeTreeName.html()

# Node list

dragNode = (evt) ->
	transfer = JSON.stringify { type: 'add', name: evt.target.getAttribute 'data' }
	evt.dataTransfer.setData 'text/plain', transfer

imageExists = (imageUrl) ->
	http = new XMLHttpRequest()
	http.open 'HEAD', imageUrl, false
	http.send()
	return http.status != 404

loadNodes = ->
	cNodeList = activeChief.listBehaviorNodes()
	sortedList = _.groupBy cNodeList, 'category'
	order = ['composite', 'decorator', 'action', 'condition']
	$nodeList.empty()

	for key in order
		category = sortedList[key]
		$('<h5>' + key + 's' + '</h5>').appendTo $nodeList
		$ul = $('<ul></ul>').appendTo $nodeList

		for key, node of category
			$li = $('<li></li>').attr('draggable', 'true').appendTo $ul
			$img = $('<span></span>').addClass('nodeIcon').appendTo $li
			testUrl = '/assets/nodes/' + node.name.toLowerCase() + '.png'
			if imageExists testUrl then url = testUrl
			else url = './assets/nodes/' + node.category + '.png'
			$img.css 'background-image', "url('" + url + "')"
			$label = $("<span class='nodeLabel'>" + node.name + '</span>').appendTo $li
			$li.attr 'data', node.name
			$li.on 'dragstart', (evt) -> dragNode(evt)

# Subject list

activeSubject = null
activeSubjectId = null

loadSubjects = ->
	cSubjectList = activeChief.listSubjects()
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



# Controls

playing = false
tickInterval = 100
tickIntervalRef = null

$('#play').on 'click', ->
	if playing is false
		playing = true
		memory.disableEditors()
		$(this).removeClass('play').addClass('stop')
		tickIntervalRef = setInterval((-> activeChief.tick()), tickInterval)

	else
		playing = false
		memory.enableEditors()
		treeLoader.clearAllNodes()
		$(this).removeClass('stop').addClass('play')
		clearInterval tickIntervalRef
		activeSubject.getMemory().forget()
		console.log 'memory cleared'


$('#step').on 'click', ->
	activeChief.tick()
