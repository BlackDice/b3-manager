require './codelint'
alertify = require('./alertify').get()
behaviorList = require './behaviorList'

needsSave = false
startContent = null

editor = CodeMirror $('#codeMirror').get(0),
	lineNumbers: true,
	mode: "javascript",
	keyMap: "sublime",
	autoCloseBrackets: true,
	matchBrackets: true,
	showCursorWhenSelecting: true,
	theme: "monokai",
	tabSize: 4,
	indentUnit: 4,
	indentWithTabs: true,
	foldGutter: true,
	gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
	lint: true,
	extraKeys:
		"F11": (cm) ->
			cm.setOption "fullScreen", !cm.getOption("fullScreen")
		,
		"Esc": (cm) ->
			if cm.getOption "fullScreen"
				cm.setOption "fullScreen", false

editor.on 'change', (cm, change) ->
	if change.origin isnt 'setValue'
		content = editor.getValue()
		if content is startContent
			needsSave = false
			$('#saveCode').removeClass 'gold'
		else
			needsSave = true
			$('#saveCode').addClass 'gold'

$('#saveCode').on 'click', ->
	save()

exports.openCode = openCode = (content, readOnly) ->
	startContent = content
	editor.setValue content
	editor.setOption 'readOnly', readOnly
	$('#code').removeClass 'hidden'
	editor.refresh()

exports.closeCode = closeCode = ->
	if needsSave
		alertify.confirm 'Save changes?', ->
			save()
			$('#code').addClass 'hidden'
			$('#saveCode').removeClass 'gold'
		, ->
			$('#code').addClass 'hidden'
			$('#saveCode').removeClass 'gold'
	else
		$('#code').addClass 'hidden'
	needsSave = false

exports.hasFocus = ->
	return editor.hasFocus()

exports.save = save = ->
	behavior = behaviorList.getActiveBehavior()
	content = editor.getValue()
	behavior.setDefinition content
	startContent = content
	$('#saveCode').removeClass 'gold'
	needsSave = false
	alertify.success 'Code saved'
