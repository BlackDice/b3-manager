
require './css/main.css'
require './css/tree.css'
require './css/panel.css'

b3 = require 'b3'

require './treeLoader'
require './tabs'


# Panel input

treeForm = $('#trees .panelInput')
treeInput = $('#trees input')

treeInput.on 'keyup', (evt) ->
	if evt.keyCode is 13
		addTree treeInput.val()

treeForm.find('button').on 'click', ->
	addTree treeInput.val()

$('#addTree').on 'click', ->
	$(this).toggleClass 'active'
	treeForm.toggleClass('hidden').find('input').focus()

addTree = (name) ->
	console.log 'form submitted', name




chief = require '../public/libs/chief'
chiefAPI = chief.create()
#newTree = chiefAPI.createTree 'Sequence'  # should be optional later






