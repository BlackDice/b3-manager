
alertify = require 'alertify.js'
treeLoader = require './treeLoader'

options =
	search: false
	history: false

offset =
	x: 10
	y: 10

nodeConfig = null
nodeConfigEditor = null
nodeConfigEditorEl = document.getElementById 'nodeConfigEditor'
nodeConfigEditorEl.addEventListener 'keydown', (evt) -> confirmChange evt, nodeConfigEditor, nodeConfig

confirmChange = (evt, editor, config) ->
	if evt.keyCode is 13 # enter key
		evt.preventDefault()
		json = editor.get()
		activeNode = treeLoader.getActiveCNode()
		activeNode.setConfig json

handleConfigChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null then nodeConfig.set(node.field, null) # Delete

exports.load = (cNode) ->
	nodeConfig = cNode.getConfig()
	customOptions = _.assign {onChange: handleConfigChange}, options
	unless nodeConfigEditor
		nodeConfigEditor = new JSONEditor nodeConfigEditorEl, customOptions, nodeConfig
	else nodeConfigEditor.set nodeConfig

exports.positionEditor = (target) ->
	$('#nodeConfigEditor').css
		top: target.x + offset.x
		left: target.y + offset.y
