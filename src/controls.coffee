# Controls

playing = false
tickInterval = 100
tickIntervalRef = null
alertify = require('./alertify').get()

$('#play').on 'click', ->
	if playing is false
		playing = true
		memory.disableEditors()
		$(this).removeClass('play').addClass('stop')
		tickIntervalRef = setInterval((-> activeChief.tick()), tickInterval)

	else
		playing = false
		memory.enableEditors()
		treeLoader.clearAllNodes()
		$(this).removeClass('stop').addClass('play')
		clearInterval tickIntervalRef
		activeSubject.getMemory().forget()
		alertify.success 'Memory cleared'

$('#step').on 'click', ->
	activeChief.tick()

exports.show = ->
	$('#controls').show()

exports.hide = ->
	$('#controls').hide()
