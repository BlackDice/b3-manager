# Subject list

memory = require './memory'
controls = require './controls'
treeList = require './treeList'
treeLoader = require './treeLoader'
alertify = require('./alertify').get()

activeSubject = null
activeSubjectId = null
activeChief = null
$subjectList = $('#subjectList')
$activeTreeName = $('#activeTreeName')


exports.load = loadSubjects = (chief) ->
	activeChief = chief
	cSubjectList = activeChief.listSubjects()
	$subjectList.empty()
	for subject in cSubjectList
		$li = $('<li>' + subject.getId() + '</li>').appendTo $subjectList
		$li.attr 'data', subject.getId()
		$li.on 'click', toggleSubject(subject, $li)

window.createSubject = ->
	cActiveTree = treeList.getCActiveTree()
	if cActiveTree
		activeChief.createSubject cActiveTree
		alertify.success 'Subject created'
	else
		alertify.error 'No tree is active'

exports.getActiveSubject = -> return activeSubject

toggleSubject = (subject, $li) ->
	return ->
		loadingSubjectId = subject.getId()
		$subjectList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if activeSubjectId == loadingSubjectId
			# stop displaying subject
			activeTree = treeList.getCActiveTree()
			$activeTreeName.text activeTree.getName()
			closeSubject()
			return

		# close any currently opened
		if activeSubjectId
			closeSubject()

		# load if new
		if activeSubjectId != loadingSubjectId
			# start displaying subject
			openSubject loadingSubjectId, subject, $li

openSubject = (id, subject, $li) ->
	treeId = subject.getTreeId()
	if treeId
		tree = treeList.openTree treeId
		activeSubjectId = id
		activeSubject = subject
		$li.addClass 'active'
		$activeTreeName.text tree.getName() + ': ' + activeSubjectId
		$('#memory').removeClass 'hidden'
		memory.loadTreeMemory activeSubject, tree
		memory.loadSubjectMemory activeSubject
	else
		alertify.error 'Subject doesn´t have a tree'

closeSubject = ->
	activeSubject = null
	activeSubjectId = null
	$('#memory').addClass 'hidden'
	memory.clearMemory()
