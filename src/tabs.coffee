
treesTab = $('#tab-trees')
behaviorsTab = $('#tab-behaviors')
subjectsTab = $('#tab-subjects')

activeTab = $('#trees')

toggle = ->
	if activeTab.attr('id') == $(this).attr('id') then return
	activeTab = $(this)
	$(this).toggleClass 'active'
	$(this).siblings().removeClass 'active'
	tab = $(this).attr 'data'
	$('.panelContent').not(tab).css 'display', 'none'
	$(tab).show()

treesTab.on 'click', toggle
behaviorsTab.on 'click', toggle
subjectsTab.on 'click', toggle
