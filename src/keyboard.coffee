
code = require './code'

# keyboard controls: tab to close panel
tab = 9
document.addEventListener 'keydown', (evt) ->
	if evt.keyCode is tab and not document.activeElement.getAttribute('contenteditable') and not code.hasFocus()
		evt.preventDefault()
		panelWidth  = if $('#panel').width()  == 350 then '0px' else '350px'
		memoryWidth = if $('#memory').width() == 350 then '0px' else '350px'
		codeWidth = if $('#code').width() == 500 then '0px' else '500px'

		$('#panel').width panelWidth
		$('#memory').width memoryWidth
		$('#code').width codeWidth

		if cActiveTree
			treeLoader.redrawTree false

	if code.hasFocus()
		if evt.keyCode == 83 && evt.ctrlKey
			evt.preventDefault()
			code.save()
