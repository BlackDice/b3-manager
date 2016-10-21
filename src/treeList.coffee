# Tree list

nodeConfig = require './nodeConfig'
treeLoader = require './treeLoader'
subjList = require './subjList'
controls = require './controls'
memory = require './memory'
alertify = require('./alertify').get()

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

toggleInput = ->
	$(this).toggleClass 'active'
	$treeForm.toggleClass 'hidden'

dragTree = (evt) ->
	transfer = JSON.stringify { type: 'addSubtree', treeId: evt.target.getAttribute 'data' }
	evt.originalEvent.dataTransfer.setData 'text/plain', transfer

exports.reload = reload = ->
	loadTrees()

exports.load = loadTrees = (chief) ->
	if chief then activeChief = chief
	cTreeList = activeChief.listTrees()

	treeList = []
	treeList = cTreeList.map (tree) ->
		tree.name = tree.getName()
		return tree
	sortedTreeList = _.sortBy treeList, 'name'

	$treeList.empty()
	for cTree in sortedTreeList
		$li = $('<li>' + cTree.getName() + '</li>').attr('draggable', 'true').appendTo $treeList
		$erase = $("<i>delete</i>").addClass('material-icons').appendTo($li)
		$erase.on 'click', removeTree(cTree.getId())
		$li.attr 'data', cTree.getId()
		$li.on 'dragstart', (evt) -> dragTree(evt)
		$li.on 'click', toggleTree(cTree, $li)
		description = cTree.getDescription()
		if description
			$description = $("<span class='listDescription'>" + description + '</span>').appendTo $li

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
			eraseChildren cNode
			treeLoader.redrawTree()

		when 'switchNodes'
			cNodeA = cActiveTree.getNode change.cNodeIdA
			cNodeB = cActiveTree.getNode change.cNodeIdB
			cParentId = cNodeA.getParentId()
			cParent = cActiveTree.getNode cParentId
			children = cActiveTree.getNodeChildren cParent

			indexA = children.findIndex (child) -> child.getId() is cNodeA.getId()
			indexB = children.findIndex (child) -> child.getId() is cNodeB.getId()

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
				memory.loadNodeMemory activeSubject, cActiveTree, cNode


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
			openTree cTree, $li

exports.openTree = (treeId) ->
	if cActiveTree then closeTree()
	cTree = activeChief.getTree treeId
	openTree cTree, $('li:contains(' + cTree.getName() + ')')
	return cTree

openTree = (cTree, $li) ->
	treeLoader.loadTree cTree, gridSize, handleTreeChange
	$li.addClass 'active'
	cActiveTree = cTree
	cActiveTreeId = cTree.getId()
	$activeTreeName.text cActiveTree.getName()
	$activeTreeDesc.text cActiveTree.getDescription()
	$activeTreeName.removeClass 'hidden'
	$activeTreeDesc.removeClass 'hidden'

closeTree = ->
	treeLoader.closeTree cActiveTreeId
	$treeList.find('li').removeClass 'active' # clear all
	cActiveTreeId = null
	$activeTreeName.text ''
	$activeTreeDesc.text ''
	$activeTreeName.addClass 'hidden'
	$activeTreeDesc.addClass 'hidden'
	nodeConfig.hideEditor()
	controls.hide()

addTree = (name) ->
	try activeChief.createTree name
	catch e
		alertify.error e
	reload()

removeTree = (cTreeId) ->
	return (evt) ->
		evt.stopPropagation()
		alertify.confirm 'Delete tree?', ->
			closeTree()
			activeChief.destroyTree cTreeId
			reload()

# Tree description

$activeTreeName.on 'blur', ->
	cActiveTree.setName $activeTreeName.text()
	alertify.success 'Tree name changed'
	reload()

$activeTreeDesc.on 'blur', ->
	cActiveTree.setDescription $activeTreeDesc.text()
	alertify.success 'Tree description updated'
	reload()
