
_ = require 'lodash'
diff = require 'loot-diff'
alertify = require('./alertify').get()
treeLoader = require './treeLoader'
behaviorList = require './behaviorList'

options =
	search: false
	history: false

activeNode = null
nodeConfig = null
mergedConfig = null
defaultConfig = null
nodeConfigEditor = null
nodeConfigEditorEl = document.getElementById 'nodeConfigEditor'
nodeConfigEditorEl.addEventListener 'keydown', (evt) -> confirmChange evt

confirmChange = (evt) ->
	if evt.keyCode is 13 # enter key
		evt.preventDefault()
		json = nodeConfigEditor.get()
		diffObject = diff defaultConfig, json
		activeNode.setBehaviorConfig diffObject
		alertify.success 'Config changed'

handleConfigChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null
		json = nodeConfigEditor.get()
		diffObject = diff defaultConfig, json
		activeNode.setBehaviorConfig diffObject

exports.load = (cNode) ->
	activeNode = cNode
	nodeConfig = cNode.getBehaviorConfig()
	defaultConfig = behaviorList.getDefaultConfig(cNode.getBehaviorId()) or {}
	mergedConfig = _.merge {}, defaultConfig, nodeConfig

	customOptions = _.assign {onChange: handleConfigChange}, options
	unless nodeConfigEditor
		nodeConfigEditor = new JSONEditor nodeConfigEditorEl, customOptions
		nodeConfigEditor.set mergedConfig
	else nodeConfigEditor.set mergedConfig

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
