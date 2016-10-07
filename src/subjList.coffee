# Subject list

memory = require './memory'
controls = require './controls'
treeList = require './treeList'
treeLoader = require './treeLoader'
alertify = require 'alertify.js'

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
			$activeTreeName.html activeTree.getName()
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
	activeTree = treeList.getCActiveTree()
	if activeTree
		activeSubjectId = id
		activeSubject = subject
		$li.addClass 'active'
		$activeTreeName.html activeTree.getName() + ': ' + activeSubjectId

		#controls.show()
		$('#memory').removeClass 'hidden'

		memory.loadTreeMemory activeSubject, activeTree
		memory.loadSubjectMemory activeSubject
	else
		treeId = subject.getTreeId()
		treeList.openTree treeId

closeSubject = ->
	#controls.hide()
	activeSubjectId = null
	$('#memory').addClass 'hidden'
	memory.clearMemory()
