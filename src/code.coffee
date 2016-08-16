
editor = CodeMirror $('#code').get(0),
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
	gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
	extraKeys:
		"F11": (cm) ->
			cm.setOption "fullScreen", !cm.getOption("fullScreen")
		,
		"Esc": (cm) ->
			if cm.getOption "fullScreen"
				cm.setOption "fullScreen", false


exports.openCode = (code) ->
	editor.value = code
	$('#code').removeClass 'hidden'
	editor.refresh()

exports.closeCode = ->
	$('#code').addClass 'hidden'

exports.hasFocus = ->
	return editor.hasFocus()
