# Controls

playing = false
tickInterval = 100
tickIntervalRef = null

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
		console.log 'memory cleared'

$('#step').on 'click', ->
	activeChief.tick()

exports.show = ->
	$('#controls').show()

exports.hide = ->
	$('#controls').hide()
