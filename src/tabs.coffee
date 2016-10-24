
toggleMe = ->
	toggle $(this)

toggle = ($el) ->
	unless $el.hasClass('active') or $el.hasClass('disabled')
		$el.toggleClass 'active'
		$el.siblings().removeClass 'active'

		tabName = $el.attr 'data'
		$el.parent().parent().find('.panelContent').not(tabName).css 'display', 'none'
		$el.parent().parent().find(tabName).show()

$('#tab-trees').on 'click', toggleMe
$('#tab-behaviors').on 'click', toggleMe
$('#tab-custom').on 'click', toggleMe
$('#tab-subjects').on 'click', toggleMe

$('#tab-treeEditor').on 'click', toggleMe
$('#tab-nodeEditor').on 'click', toggleMe
$('#tab-subjEditor').on 'click', toggleMe

exports.activateTrees = activateTrees = ->
	toggle $('#tab-trees')

exports.activateBehaviors = activateBehaviors = ->
	toggle $('#tab-behaviors')

exports.activateCustom = activateCustom = ->
	toggle $('#tab-custom')

exports.activateSubjects = activateSubjects = ->
	toggle $('#tab-subjects')
