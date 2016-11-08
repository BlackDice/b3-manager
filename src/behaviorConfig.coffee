
_ = require 'lodash'
alertify = require('./alertify').get()
treeLoader = require './treeLoader'
behaviorList = require './behaviorList'

options =
	search: false
	history: false

behaviorConfig = null
behaviorConfigEditor = null
behaviorEditorEl = document.getElementById 'behaviorConfigEditor'
behaviorEditorEl.addEventListener 'keydown', (evt) -> confirmChange evt, behaviorConfig

confirmChange = (evt, config) ->
	if evt.keyCode is 13 # enter key
		evt.preventDefault()
		json = behaviorConfigEditor.get()
		activeBehavior = behaviorList.getActiveBehavior()
		activeBehavior.setConfig json

# fill category select
categoryList = ['action', 'condition', 'other']
for key in categoryList
	$('#categorySelect').append $('<option>', value: key, text: key)

typeList = behaviorList.getTypes()
for key in typeList
	$('#typeSelect').append $('<option>', value: key, text: key)

$('#typeSelect').on 'change', ->
	newValue = $(this).val().toUpperCase()
	behavior = behaviorList.getActiveBehavior()
	behavior.setType newValue
	reload()
	alertify.success 'Type changed'

$('#categorySelect').on 'change', ->
	newValue = $(this).val()
	behavior = behaviorList.getActiveBehavior()

	meta = behavior.getMeta()
	if meta then meta.category = newValue
	else meta = { category: newValue }
	behavior.setMeta {}
	behavior.setMeta meta
	alertify.success 'Category changed'

$('#maxChildren').on 'change', ->
	newValue = $(this).val()
	behavior = behaviorList.getActiveBehavior()
	behavior.setMaxChildren Number newValue
	alertify.success 'Max children changed'

$('#behaviorName').on 'blur', ->
	newValue = $(this).text()
	behavior = behaviorList.getActiveBehavior()
	try behavior.setName newValue
	catch e
		alertify.error e
	li = behaviorList.getActiveListItem()
	li.children('.behaviorLabel').text newValue
	if treeLoader.getActiveTree()
		treeLoader.reload()
	alertify.success 'Name changed'

$('#behaviorDescription').on 'blur', ->
	newValue = $('#behaviorDescription').text()
	behavior = behaviorList.getActiveBehavior()
	behavior.setDescription newValue
	alertify.success 'Description changed'

$('#imageName').on 'blur', ->
	newValue = $(this).text()
	behavior = behaviorList.getActiveBehavior()

	meta = behavior.getMeta()
	if meta then meta.image = newValue
	else meta = { image: newValue }
	behavior.setMeta {}
	behavior.setMeta meta

	alertify.success 'Image changed'

handleConfigChange = (data) ->
	json = behaviorConfigEditor.get()
	unless json.hasOwnProperty('')
		activeBehavior = behaviorList.getActiveBehavior()
		activeBehavior.setConfig json

getCategory = (behavior) ->
	category = behavior.getMeta()?.category
	if category and category in categoryList
		cat = category
	else
		cat = 'other'
	return cat

getImage = (behavior) ->
	imageName = behavior.getMeta()?.image
	return imageName

exports.reload = reload = ->
	load behaviorList.getActiveBehavior()

exports.load = load = (behavior) ->
	behaviorConfig = behavior.getConfig()
	$('#behaviorName').text behavior.getName()
	$('#behaviorId').text behavior.getId()
	$('#behaviorDescription').text behavior.getDescription() or '...'

	type = behavior.getType().toLowerCase()
	$('#typeSelect').val type

	$('#behaviorProperties').children().addClass 'hidden'

	switch type
		when 'leaf'
			category = getCategory behavior
			$('#leafConfig').removeClass 'hidden'
			$('#categorySelect').val category
			$('#categorySelect').removeClass 'hidden'
		when 'composite'
			$('#compositeConfig').removeClass 'hidden'
			$('#maxChildren').val behavior.getMaxChildren()

	imageName = getImage behavior
	unless imageName then imageName = ''
	$('#imageName').text imageName

	customOptions = _.assign {onChange: handleConfigChange}, options
	unless behaviorConfigEditor
		behaviorConfigEditor = new JSONEditor behaviorEditorEl, customOptions
		behaviorConfigEditor.set behaviorConfig
	else behaviorConfigEditor.set behaviorConfig

exports.clearMemory = ->
	behaviorConfig = null
	behaviorConfigEditor.set {}

exports.enableEditor = ->
	behaviorConfigEditor.setMode 'tree'

exports.disableEditor = ->
	behaviorConfigEditor.setMode 'view'
