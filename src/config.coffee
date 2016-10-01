
options =
	search: false
	history: false

behaviorConfig = null
behaviorConfigEditor = null
behaviorEditorEl = document.getElementById 'behaviorConfigEditor'
behaviorEditorEl.addEventListener 'keydown', (evt) -> confirmChange evt, behaviorConfigEditor, behaviorConfig

handleConfigChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null then behaviorConfig.set(node.field, null) # Delete

exports.loadBehaviorConfig = (behavior) ->
	behaviorConfig = behavior.getConfig()
	type = behavior.getType().toLowerCase()
	$('#categorySelect').val(type)
	#json = behaviorConfig.dump()
	#behaviorConfig.on 'change', -> behaviorConfigEditor.set json
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
		for key, val of json
			cfg = config.get(key)
			if cfg is val then continue # skip same
			if cfg? then config.set key, val # change
			else config.set key, val # add

