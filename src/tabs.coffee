
toggle = ->
	unless $(this).hasClass 'active'
		$(this).toggleClass 'active'
		$(this).siblings().removeClass 'active'

		tabName = $(this).attr 'data'
		$(this).parent().parent().find('.panelContent').not(tabName).css 'display', 'none'
		$(this).parent().parent().find(tabName).show()

treesTabs = $('.tab-trees')
behaviorsTabs = $('.tab-behaviors')
subjectsTabs = $('.tab-subjects')

treesTabs.on 'click', toggle
behaviorsTabs.on 'click', toggle
subjectsTabs.on 'click', toggle
