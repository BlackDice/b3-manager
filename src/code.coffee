require './codelint'
alertify = require('./alertify').get()
behaviorList = require './behaviorList'

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

$('#saveCode').on 'click', ->
	save()

exports.openCode = (content, readOnly) ->
	editor.setValue content
	editor.setOption 'readOnly', readOnly
	$('#code').removeClass 'hidden'
	$('#behaviorConfig').removeClass 'hidden'
	editor.refresh()

exports.closeCode = ->
	$('#code').addClass 'hidden'

exports.hasFocus = ->
	return editor.hasFocus()

exports.save = save = ->
	behavior = behaviorList.getActiveBehavior()
	behavior.setDefinition editor.getValue()
	alertify.success 'Code saved'
