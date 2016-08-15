
editor = CodeMirror $('#code').get(0),
	lineNumbers: true,
	mode: "javascript",
	keyMap: "sublime",
	autoCloseBrackets: true,
	matchBrackets: true,
	showCursorWhenSelecting: true,
	theme: "monokai",
	tabSize: 4


exports.openCode = (code) ->
	editor.value = code
	$('#code').removeClass 'hidden'

exports.closeCode = ->
	$('#code').addClass 'hidden'
