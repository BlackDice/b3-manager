
treesTab = $('#tab-trees')
nodesTab = $('#tab-nodes')
subjectsTab = $('#tab-subjects')

trees = $('#trees')
nodes = $('#nodes')
subjects = $('#nodes')

activeTab = nodes

toggle = ->
	if activeTab.attr('id') == $(this).attr('id') then return
	activeTab = $(this)
	$(this).toggleClass 'active'
	$(this).siblings().removeClass 'active'
	tab = $(this).attr 'data'
	$('.panelContent').not(tab).css 'display', 'none'
	$(tab).show()

treesTab.on 'click', toggle
nodesTab.on 'click', toggle
subjectsTab.on 'click', toggle

