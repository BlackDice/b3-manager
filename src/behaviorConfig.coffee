
_ = require 'lodash'
alertify = require('./alertify').get()
behaviorList = require './behaviorList'

options =
	search: false
	history: false

behaviorConfig = null
behaviorConfigEditor = null
behaviorEditorEl = document.getElementById 'behaviorConfigEditor'
behaviorEditorEl.addEventListener 'keydown', (evt) -> confirmChange evt, behaviorConfigEditor, behaviorConfig

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
	behavior.setMaxChildren newValue
	alertify.success 'Max children changed'

$('#behaviorName').on 'blur', ->
	newValue = $(this).text()
	behavior = behaviorList.getActiveBehavior()
	try behavior.setName newValue
	catch e
		alertify.error e
	li = behaviorList.getActiveListItem()
	li.children('.behaviorLabel').text newValue
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
	node = data.nodes?[0]
	if node?.parent is null then behaviorConfig.set(node.field, null) # Delete

getCategory = (behavior) ->
	category = behavior.getMeta()?.category
	if category and category in categoryList
		cat = category
	else
		cat = 'other'
	return cat

getImage = (behavior) ->
	image = behavior.getMeta()?.image
	return image

exports.reload = reload = ->
	load behaviorList.getActiveBehavior()

exports.load = load = (behavior) ->
	behaviorConfig = behavior.getConfig()
	$('#behaviorName').text behavior.getName()
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

	image = getImage behavior
	if image then $('#imageName').text image

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

confirmChange = (evt, editor, config) ->
	if evt.keyCode is 13 # enter key
		evt.preventDefault()
		json = editor.get()
		activeBehavior = behaviorList.getActiveBehavior()
		activeBehavior.setConfig json
