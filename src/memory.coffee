
_ = require 'lodash'

options =
	search: false
	history: false

nodeMemory = null
treeMemory = null
subjMemory = null

nodeEditor = null
treeEditor = null
subjEditor = null

nodeEl = document.getElementById 'nodeEditor'
treeEl = document.getElementById 'treeEditor'
subjEl = document.getElementById 'subjEditor'

nodeEl.addEventListener 'keydown', (evt) -> confirmChange evt, nodeEditor, nodeMemory
treeEl.addEventListener 'keydown', (evt) -> confirmChange evt, treeEditor, treeMemory
subjEl.addEventListener 'keydown', (evt) -> confirmChange evt, subjEditor, subjMemory

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


chiefNodeMemoryChange = -> nodeEditor.set nodeMemory.dump()
chiefTreeMemoryChange = -> treeEditor.set treeMemory.dump()
chiefsubjMemoryChange = -> subjEditor.set subjMemory.dump()


exports.loadNodeMemory = (subj, cNode) ->
	# when a node is clicked, load memory of the node for the currently active subj and tree
	nodeMemory = subj.getMemoryForNode cNode
	nodeEditor = loadMemory nodeEl, nodeEditor, nodeMemory, chiefNodeMemoryChange, handleNodeMemoryChange

exports.loadTreeMemory = (tree, subj) ->
	# when tree and subj is active, load subset of subjs memory relevant to the tree
	treeMemory = subj.getMemoryForTree tree
	treeEditor = loadMemory treeEl, treeEditor, treeMemory, chiefTreeMemoryChange, handleTreeMemoryChange

exports.loadSubjectMemory = (subj) ->
	# when subj is active, load complete memory for that subj
	subjMemory = subj.getMemory()
	subjEditor = loadMemory subjEl, subjEditor, subjMemory, chiefsubjMemoryChange, handlesubjMemoryChange


loadMemory = (element, editor, memory, chiefChangeCb, editorChangeCb) ->
	memory.on 'change', chiefChangeCb
	json = memory.dump()
	customOptions = _.assign {onChange: editorChangeCb}, options
	unless editor
		editor = new JSONEditor element, customOptions, json
	else editor.set json
	return editor

exports.clearMemory = ->
	nodeMemory = null
	treeMemory = null
	subjMemory = null

	nodeEditor.set {}
	treeEditor.set {}
	subjEditor.set {}

exports.enableEditors = ->
	nodeEditor.setMode 'tree' if nodeEditor
	treeEditor.setMode 'tree'
	subjEditor.setMode 'tree'

exports.disableEditors = ->
	nodeEditor.setMode 'view' if nodeEditor
	treeEditor.setMode 'view'
	subjEditor.setMode 'view'


