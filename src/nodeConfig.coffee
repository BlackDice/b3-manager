
alertify = require 'alertify.js'
treeLoader = require './treeLoader'

options =
	search: false
	history: false

nodeConfig = null
nodeConfigEditor = null
nodeConfigEditorEl = document.getElementById 'nodeConfigEditor'
nodeConfigEditorEl.addEventListener 'keydown', (evt) -> confirmChange evt, nodeConfigEditor, nodeConfig

confirmChange = (evt, editor, config) ->
	if evt.keyCode is 13 # enter key
		evt.preventDefault()
		json = editor.get()
		activeNode = treeLoader.getActiveCNode()
		activeNode.setBehaviorConfig json

handleConfigChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null then nodeConfig.set(node.field, null) # Delete

exports.load = (cNode) ->
	nodeConfig = cNode.getBehaviorConfig()
	customOptions = _.assign {onChange: handleConfigChange}, options
	unless nodeConfigEditor
		nodeConfigEditor = new JSONEditor nodeConfigEditorEl, customOptions, nodeConfig
		nodeConfigEditor.set nodeConfig
	else nodeConfigEditor.set nodeConfig

exports.positionEditor = (element) ->
	node = element.getBoundingClientRect()
	editorWidth = parseInt $("#nodeConfigEditor").css('width')

	if node.left + editorWidth + node.width > window.innerWidth
		left = node.left - editorWidth
	else
		left = node.left + node.width

	$('#nodeConfigEditor').css
		left: left
		top: node.top

exports.showEditor = ->
	nodeConfigEditorEl.classList.remove 'hidden'

exports.hideEditor = ->
	nodeConfigEditorEl.classList.add 'hidden'
