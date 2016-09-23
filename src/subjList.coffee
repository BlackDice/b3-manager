# Subject list

controls = require './controls'
treeList = require './treeList'
treeLoader = require './treeLoader'
memory = require './memory'

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

toggleSubject = (subject, $li) ->
	return ->
		loadingSubjectId = subject.getId()
		$subjectList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if activeSubjectId == loadingSubjectId
			# stop displaying subject
			$activeTreeName.html treeList.getCActiveTreeName()
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
	activeSubjectId = id
	activeSubject = subject
	$li.addClass 'active'
	controls.show()
	$activeTreeName.html treeList.getCActiveTreeName() + ': ' + activeSubjectId

	showMemoryPanel()
	memory.loadTreeMemory treeList.getCActiveTree(), activeSubject
	memory.loadSubjectMemory activeSubject

closeSubject = ->
	controls.hide()
	activeSubjectId = null

	hideMemoryPanel()
	memory.clearMemory()

showMemoryPanel = ->
	$('#memory').removeClass 'hidden'
	treeLoader.getActiveTree().resize()

hideMemoryPanel = ->
	$('#memory').addClass 'hidden'
	treeLoader.getActiveTree().resize()
