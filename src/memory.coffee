
_ = require 'lodash'

options =
	search: false
	history: false

treeMemory = null
nodeMemory = null
subjMemory = null

treeEditor = null
nodeEditor = null
subjEditor = null

treeEl = document.getElementById 'treeEditor'
nodeEl = document.getElementById 'nodeEditor'
subjEl = document.getElementById 'subjEditor'

nodeEl.addEventListener 'keydown', (evt) -> confirmChange evt, nodeEditor, nodeMemory
treeEl.addEventListener 'keydown', (evt) -> confirmChange evt, treeEditor, treeMemory
subjEl.addEventListener 'keydown', (evt) -> confirmChange evt, subjEditor, subjMemory

$('#panelName').click ->
	$(this).find('i').toggleClass 'rotate'
	$('#editors').toggleClass 'hidden'

confirmChange = (evt, editor, memory) ->
	if evt.keyCode is 13 # enter key
		evt.preventDefault()
		json = editor.get()
		for key, val of json
			mem = memory.get(key)
			if mem is val then continue # skip same
			if mem? then memory.set key, val # change
			else memory.set key, val # add


handleNodeMemoryChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null then nodeMemory.set(node.field, null) # Delete

handleTreeMemoryChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null then treeMemory.set(node.field, null) # Delete

handlesubjMemoryChange = (data) ->
	node = data.nodes?[0]
	if node?.parent is null then subjMemory.set(node.field, null) # Delete


chiefNodeMemoryChange = -> nodeEditor.set nodeMemory.get()
chiefTreeMemoryChange = -> treeEditor.set treeMemory.get()
chiefsubjMemoryChange = -> subjEditor.set subjMemory.get()


exports.activate = (tabId) ->
	$(tabId).removeClass 'disabled'

exports.disable = (tabId) ->
	$(tabId).addClass 'disabled'

exports.loadTreeMemory = (subj, tree) ->
	# when tree and subj is active, load subset of subjs memory relevant to the tree
	treeMemory = subj.getTreeMemory tree
	treeEditor = loadMemory treeEl, treeEditor, treeMemory, chiefTreeMemoryChange, handleTreeMemoryChange

exports.loadNodeMemory = (subj, node, tree) ->
	# when a node is clicked, load memory of the node for the currently active subj and tree
	nodeMemory = subj.getNodeMemory node, tree
	nodeEditor = loadMemory nodeEl, nodeEditor, nodeMemory, chiefNodeMemoryChange, handleNodeMemoryChange

exports.loadSubjectMemory = (subj) ->
	# when subj is active, load complete memory for that subj
	subjMemory = subj.getSubjectMemory()
	subjEditor = loadMemory subjEl, subjEditor, subjMemory, chiefsubjMemoryChange, handlesubjMemoryChange


loadMemory = (element, editor, memory, chiefChangeCb, editorChangeCb) ->
	json = memory.get()
	customOptions = _.assign {onChange: editorChangeCb}, options
	unless editor
		editor = new JSONEditor element, customOptions, json
		editor.set json
	else editor.set json
	return editor

exports.clearTreeMemory = clearTreeMemory = ->
	treeEditor.set {}

exports.clearNodeMemory = clearNodeMemory = ->
	nodeEditor.set {}

exports.clearSubjectMemory = clearSubjectMemory = ->
	subjEditor.set {}

exports.clearMemory = ->
	clearTreeMemory()
	clearNodeMemory()
	clearSubjectMemory()

exports.enableEditors = ->
	nodeEditor.setMode 'tree'
	treeEditor.setMode 'tree'
	subjEditor.setMode 'tree'

exports.disableEditors = ->
	nodeEditor.setMode 'view'
	treeEditor.setMode 'view'
	subjEditor.setMode 'view'
