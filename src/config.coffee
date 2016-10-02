
alertify = require 'alertify.js'
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
	alertify.success 'Type changed'

$('#categorySelect').on 'change', ->
	newValue = $(this).val()
	behavior = behaviorList.getActiveBehavior()
	behavior.setMeta { category: newValue }
	alertify.success 'Category changed'

$('#behaviorName').on 'input', ->
	newValue = $(this).html()
	behavior = behaviorList.getActiveBehavior()
	try behavior.setName newValue
	catch e
		alertify.error e
	li = behaviorList.getActiveListItem()
	li.children('.behaviorLabel').html newValue

$('#behaviorDescription').on 'input', ->
	newValue = $('#behaviorDescription').html()
	behavior = behaviorList.getActiveBehavior()
	behavior.setDescription newValue

handleConfigChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null then behaviorConfig.set(node.field, null) # Delete

setCategorySelect = (behavior) ->
	category = behavior.getMeta()?.category
	if category and category in categoryList
		$('#categorySelect').val category
	else
		$('#categorySelect').val 'other'

exports.loadBehaviorConfig = (behavior) ->
	behaviorConfig = behavior.getConfig()
	type = behavior.getType().toLowerCase()
	$('#behaviorName').html behavior.getName()
	$('#behaviorDescription').html behavior.getDescription()
	setCategorySelect behavior
	$('#typeSelect').val type
	customOptions = _.assign {onChange: handleConfigChange}, options
	unless behaviorConfigEditor
		behaviorConfigEditor = new JSONEditor behaviorEditorEl, customOptions, behaviorConfig
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
		###
		for key, val of json
			cfg = config.get(key)
			if cfg is val then continue # skip same
			if cfg? then config.set key, val # change
			else config.set key, val # add
		###
