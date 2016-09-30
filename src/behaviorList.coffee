# Behavior list

code = require './code'
treeList = require './treeList'

activeBehavior = null
activeBehaviorId = null
activeChief = null

$behaviorList = $('#behaviorList')
$behaviorForm = $('#behaviors .panelInput')
$behaviorInput = $('#behaviors input')

$behaviorForm.on 'keyup', (evt) ->
	if evt.keyCode is 13 # enter
		addBehavior $behaviorInput.val()
		$behaviorInput.focus()
		toggleInput()

$behaviorForm.find('button').on 'click', ->
	addBehavior $behaviorInput.val()
	toggleInput()

$('#addBehavior').on 'click', ->
	toggleInput()

toggleInput = ->
	$(this).toggleClass 'active'
	$behaviorForm.toggleClass 'hidden'

addBehavior = (name) ->
	try activeChief.createBehavior name
	catch e
		alertify.error e
	loadBehaviors activeChief

removeBehavior = (cBehaviorId) ->
	return (evt) ->
		evt.stopPropagation()
		closeBehavior()
		activeChief.destroyBehavior cBehaviorId
		loadBehaviors activeChief

dragBehavior = (evt) ->
	transfer = JSON.stringify { type: 'add', behaviorId: evt.target.getAttribute 'data' }
	evt.dataTransfer.setData 'text/plain', transfer

exports.getActiveBehavior = -> return activeBehavior

exports.load = loadBehaviors = (chief) ->
	activeChief = chief
	cBehaviorList = activeChief.listBehaviors()
	behaviorList = []

	behaviorList = cBehaviorList.map (behavior) ->
		behavior.type = behavior.getType().toLowerCase()
		behavior.name = behavior.getName()
		return behavior

	sortedList = _.groupBy behaviorList, 'type'

	typeOrder = ['composite', 'decorator', 'leaf']
	$behaviorList.empty()

	for key in typeOrder

		$('#behaviorSelect').append $('<option>',
			value: key,
			text: key
		)

		category = _.sortBy sortedList[key], 'isNative'
		$('<h5>' + key + 's' + '</h5>').appendTo $behaviorList
		$ul = $('<ul></ul>').appendTo $behaviorList

		for key, behavior of category
			$li = $('<li></li>').attr('draggable', 'true').appendTo $ul
			$img = $('<span></span>').addClass('behaviorIcon').appendTo $li
			url = '/assets/behaviors/' + behavior.name.toLowerCase() + '.png'
			$img.css 'background-image', "url('" + url + "')"
			$label = $("<span class='behaviorLabel'>" + behavior.name + '</span>').appendTo $li
			$li.attr 'data', behavior.getId()
			$li.on 'dragstart', (evt) -> dragBehavior(evt)
			$li.on 'click', toggleBehavior(behavior, $li)

			unless behavior.isNative
				$erase = $("<i>delete</i>").addClass('material-icons').appendTo($li)
				$erase.on 'click', removeBehavior(behavior.getId())


	$('#behaviorSelect option[value="leaf"]').attr "selected", true

toggleBehavior = (behavior, $li) ->
	return ->
		loadingBehaviorId = behavior.name # SWITCH TO ID NAME
		$behaviorList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if activeBehaviorId == loadingBehaviorId
			# stop displaying editor
			closeBehavior()
			return

		# close any currently opened
		if activeBehaviorId
			closeBehavior()

		# load if new
		if activeBehaviorId != loadingBehaviorId
			# start displaying behavior
			openBehavior loadingBehaviorId, behavior, $li

openBehavior = (id, behavior, $li) ->
	activeBehaviorId = id
	activeBehavior = behavior
	$li.addClass 'active'
	readOnly = behavior.isNative
	content = behavior.getDefinition()
	code.openCode content, readOnly
	if treeList.getCActiveTreeId()
		treeLoader.getActiveTree().resize()

closeBehavior = ->
	activeBehaviorId = null
	code.closeCode()
	if treeList.getCActiveTreeId()
		treeLoader.getActiveTree().resize()
