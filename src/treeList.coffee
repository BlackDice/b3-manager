# Tree list

treeLoader = require './treeLoader'
subjList = require './subjList'
controls = require './controls'
alertify = require 'alertify.js'

gridSize = 50
cActiveTreeId = null
cActiveTree = null
activeChief = null

$treeForm = $('#trees .panelInput')
$treeInput = $('#trees input')
$treeList = $('#treeList')
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
	toggleInput()

$('#addTree').on 'click', ->
	toggleInput()

exports.getCActiveTreeId = ->
	return cActiveTreeId

exports.getCActiveTree = ->
	return cActiveTree

exports.getCActiveTreeName = ->
	return cActiveTree.getName()

toggleInput = ->
	$(this).toggleClass 'active'
	$treeForm.toggleClass 'hidden'

exports.load = loadTrees = (chief) ->
	activeChief = chief
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
		children = cActiveTree.getNodeChildren cNode
		for child in children
			eraseChildren child
		cActiveTree.destroyNode cNode

	setNodeTitle = (cNode) ->
		behavior = activeChief.getBehavior cNode.getBehaviorId()
		cNode.setTitle behavior.getName()

	switch change.action
		when 'createRoot'
			cRootNode = cActiveTree.createNode change.behaviorId
			setNodeTitle cRootNode
			cActiveTree.setRootNode cRootNode
			treeLoader.addRootNode cRootNode

		when 'addNode'
			cParentId = change.parentCId
			if cActiveTree.canNodeAcceptChild cParentId
				cNode = cActiveTree.createNode change.behaviorId
				setNodeTitle cNode
				cActiveTree.addNodeChild cParentId, cNode
				treeLoader.addNodeToTree cNode, change.parentTId
			else
				alertify.error 'Node does not accept children'

		when 'removeNode'
			cNode = cActiveTree.getNode change.cNodeId
			cParentNodeId = cNode.getParentId()
			#if cParentNodeId.indexOf('Tree') != -1
			#	console.log 'Erasing root'
			eraseChildren cNode
			treeLoader.redrawTree()

		when 'switchNodes'
			cNodeA = cActiveTree.getNode change.cNodeIdA
			cNodeB = cActiveTree.getNode change.cNodeIdB
			cParentId = cNodeA.getParentId()
			cParent = cActiveTree.getNode cParentId
			children = cActiveTree.getNodeChildren cParent

			indexA = children.indexOf cNodeA
			indexB = children.indexOf cNodeB

			for child in children
				cActiveTree.removeChildNode child

			children.splice indexA, 1, cNodeB
			children.splice indexB, 1, cNodeA

			for child in children
				cActiveTree.addNodeChild cParentId, child
			treeLoader.redrawTree()

		when 'changeParent'
			cNode = cActiveTree.getNode change.cNodeId
			cParentId = cNode.getParentId()
			cParent = cActiveTree.getNode cParentId
			cNewParent = cActiveTree.getNode change.parentCId
			if cActiveTree.canNodeAcceptChild cNewParent
				cActiveTree.removeChildNode cNode
				cActiveTree.addNodeChild cNewParent, cNode
				treeLoader.changeParent change.tNodeId, change.parentTId
				treeLoader.redrawTree()
			else
				alertify.error 'Node does not accept children'

		when 'showNodeMemory'
			activeSubject = subjList.getActiveSubject()
			if activeSubject
				cNode = cActiveTree.getNode change.cNodeId
				memory.loadNodeMemory activeSubject, cNode

toggleTree = (cTree, $li) ->
	return ->
		loadingTreeId = cTree.getId()
		$treeList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if cActiveTreeId == loadingTreeId
			closeTree()
			return

		# close any currently opened
		if cActiveTreeId
			closeTree()

		# load if new
		if cActiveTreeId != loadingTreeId
			openTree loadingTreeId, cTree, $li

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
	controls.hide()

addTree = (name) ->
	description = 'Lorem ipsum dolor sit amet' # temp
	try activeChief.createTree name, description
	catch e
		alertify.error e
	loadTrees activeChief

removeTree = (cTreeId) ->
	return (evt) ->
		evt.stopPropagation()
		closeTree()
		activeChief.destroyTree cTreeId
		loadTrees activeChief

# Tree description

$activeTreeDesc.on 'input', ->
	cActiveTree.setDescription $activeTreeDesc.html()

$activeTreeName.on 'input', ->
	cActiveTree.setName $activeTreeName.html()
