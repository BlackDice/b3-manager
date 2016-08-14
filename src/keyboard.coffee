
# keyboard controls: tab to close panel

document.addEventListener 'keydown', (evt) ->
	# tab
	if evt.keyCode is 9 and not document.activeElement.getAttribute('contenteditable')
		evt.preventDefault()
		panelWidth  = if $('#panel').width()  == 350 then '0px' else '350px'
		memoryWidth = if $('#memory').width() == 350 then '0px' else '350px'

		$('#panel').width panelWidth
		$('#memory').width memoryWidth

		if cActiveTree
			treeLoader.redrawTree false
