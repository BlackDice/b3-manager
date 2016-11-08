
code = require './code'
treeLoader = require './treeLoader'
idsOn = false

# keyboard controls: tab to close panel
tab = 9
document.addEventListener 'keydown', (evt) ->
	if evt.keyCode is tab and not document.activeElement.getAttribute('contenteditable') and not code.hasFocus()
		# toggle panel
		evt.preventDefault()

		panelWidth  = if $('#panel').width()  == 350 then '0px' else '350px'
		$('#panel').width panelWidth
		$('#panelFiller').width panelWidth

		if treeLoader.getActiveTree()
			treeLoader.redrawTree false

	if code.hasFocus()
		# save code
		if evt.keyCode == 83 && evt.ctrlKey 		# CTRL+S
			evt.preventDefault()
			code.save()

	if evt.keyCode == 81 && evt.ctrlKey 		# CTRL+Q
		# toggle ids

		if idsOn
			$('.chiefId').addClass 'hidden'
			idsOn = false
		else
			$('.chiefId').removeClass 'hidden'
			idsOn = true
