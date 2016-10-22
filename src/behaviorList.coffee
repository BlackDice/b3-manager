# Behavior list

_ = require 'lodash'
code = require './code'
treeList = require './treeList'
treeLoader = require './treeLoader'
alertify = require('./alertify').get()

activeBehavior = null
activeBehaviorId = null
activeChief = null
activeListItem = null
typeOrder = ['composite', 'decorator', 'leaf']

$behaviorList = $('#behaviorList')
$customList = $('#customList')
$behaviorForm = $('#custom .panelInput')
$behaviorInput = $('#custom input')

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
	reload()

removeBehavior = (cBehaviorId) ->
	return (evt) ->
		evt.stopPropagation()
		alertify.confirm 'Delete behavior?', ->
			closeBehavior()
			activeChief.destroyBehavior cBehaviorId
			reload()

dragBehavior = (evt) ->
	transfer = JSON.stringify { type: 'add', behaviorId: evt.target.getAttribute 'data' }
	evt.originalEvent.dataTransfer.setData 'text/plain', transfer

exports.getActiveBehavior = -> return activeBehavior

exports.getActiveChief = -> return activeChief

exports.reload = reload = ->
	loadBehaviors()

exports.getTypes = ->
	return typeOrder

exports.getActiveListItem = ->
	return activeListItem

exports.getDefaultConfig = (behaviorId) ->
	behavior = activeChief.getBehavior behaviorId
	return behavior.getConfig()

exports.load = loadBehaviors = (chief) ->
	if chief then activeChief = chief
	cBehaviorList = activeChief.listBehaviors()
	behaviorList = []

	behaviorList = cBehaviorList.map (behavior) ->
		behavior.type = behavior.getType().toLowerCase()
		behavior.name = behavior.getName()
		meta = behavior.getMeta()
		if meta
			behavior.category = meta.category
			behavior.image = meta.image
		return behavior

	sortedList = _.groupBy behaviorList, 'type'

	$behaviorList.empty()
	$customList.empty()

	for key in typeOrder
		category = _.orderBy sortedList[key], ['isNative', 'name'], ['desc', 'asc']

		$('<h5>' + key + 's' + '</h5>').appendTo $behaviorList
		$('<h5>' + key + 's' + '</h5>').appendTo $customList

		$ulNative = $('<ul></ul>').appendTo $behaviorList
		$ulCustom = $('<ul></ul>').appendTo $customList

		for key, behavior of category
			if behavior.isNative
				imageName = behavior.name.toLowerCase()
				$li = addToList behavior, imageName, $ulNative
			else
				if behavior.image
					imageName = behavior.image
				else if behavior.category
					imageName = behavior.category
				else
					imageName = 'other'
				$li = addToList behavior, imageName, $ulCustom
				$li.on 'click', toggleBehavior(behavior, $li)
				$erase = $("<i>delete</i>").addClass('material-icons').appendTo($li)
				$erase.on 'click', removeBehavior(behavior.getId())

addToList = (behavior, imageName, list) ->
	$li = $('<li></li>').attr('draggable', 'true').appendTo list
	$img = $('<span></span>').addClass('behaviorIcon').appendTo $li

	url = '/assets/behaviors/' + imageName + '.png'
	$img.css 'background-image', "url('" + url + "')"

	$label = $("<span class='behaviorLabel'>" + behavior.name + '</span>').appendTo $li
	$li.attr 'data', behavior.getId()
	$li.on 'dragstart', (evt) -> dragBehavior(evt)
	description = behavior.getDescription()
	if description
		$description = $("<span class='listDescription'>" + description + '</span>').appendTo $li
	return $li

toggleBehavior = (behavior, $li) ->
	return ->
		loadingBehaviorId = behavior.getId()
		$customList.find('li').removeClass 'active' # clear all
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
			openBehavior behavior, $li

behaviorConfig = require './behaviorConfig'

exports.openBehavior = openBehavior = (behavior, $li) ->
	activeBehavior = behavior
	activeBehaviorId = behavior.getId()

	unless $li then $li = $('li:contains(' + behavior.getName() + ')')
	$li.addClass 'active'
	activeListItem = $li

	readOnly = behavior.isNative
	content = behavior.getDefinition()
	code.openCode content, readOnly
	behaviorConfig.load behavior
	if treeList.getCActiveTreeId()
		treeLoader.getActiveTree().resize()

exports.closeBehavior = closeBehavior = ->
	activeListItem = null
	activeBehaviorId = null
	code.closeCode()
	if treeList.getCActiveTreeId()
		treeLoader.getActiveTree().resize()
