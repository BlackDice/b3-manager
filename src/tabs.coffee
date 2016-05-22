
treesTab = $('#tab-trees')
nodesTab = $('#tab-nodes')
subjectsTab = $('#tab-subjects')

trees = $('#trees')
nodes = $('#nodes')
subjects = $('#nodes')

toggle = ->
	$(this).toggleClass 'active'
	$(this).siblings().removeClass 'active'
	tab = $(this).attr 'href'
	$('.panelContent').not(tab).css 'display', 'none'
	$(tab).show()

treesTab.on 'click', toggle
nodesTab.on 'click', toggle
subjectsTab.on 'click', toggle

