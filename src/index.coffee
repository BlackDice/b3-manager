
require './css/main.css'
require './css/tree.css'
require './css/panel.css'
require './css/tabs.css'
require './css/controls.css'
require './css/alertify.css'
require './css/jsoneditor-dark.css'
require './css/codemirror/codemirror.css'
require './css/codemirror/foldgutter.css'
require './css/codemirror/fullscreen.css'
require './css/codemirror/dialog.css'
require './css/codemirror/monokai.css'
require './css/codemirror/lint.css'

_ = require 'lodash'
b3 = require 'b3'
Chief = require 'behavior3-chief'
firebase = require 'tauros-firebase/b3manager'

tabs = require './tabs'
alertify = require('./alertify').get()
keyboard = require './keyboard'
treeList = require './treeList'
subjList = require './subjList'
behaviorList = require './behaviorList'
behaviorConfig = require './behaviorConfig'

# Firebase environments

activeChief = null

setupFirebase = (envName) ->
	if chiefList[envName]
		activeChief = chiefList[envName]
		loadData()
		return

	app = firebase.connect envName
	firebaseRef = app.database().ref('chief')
	activeChief = Chief.create()
	chiefList[envName] = activeChief

	adapter = Chief.adapter.Firebase
		chief: activeChief,
		firebaseRef: firebaseRef

	adapter.sync().then ->
		loadData()

loadData = ->
	treeList.load activeChief
	behaviorList.load activeChief
	subjList.load activeChief

if navigator.onLine
	chiefList = {}
	enviroments = firebase.listEnvironments()

	for env in enviroments
		$('#fbSelect').append $('<option>',
			value: env,
			text: env
		)
		if activeChief is null
			setupFirebase env
else
	alertify.error 'Offline mode'
	$('#fbSelect').append $('<option>',
		text: 'Offline'
	)
	activeChief = Chief.create()
	loadData activeChief


$('#select').on 'change', (evt) ->
	if treeList.getCActiveTreeId() then closeTree()
	setupFirebase evt.target.value

