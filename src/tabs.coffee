
toggle = ->
	unless $(this).hasClass('active') or $(this).hasClass('disabled')
		$(this).toggleClass 'active'
		$(this).siblings().removeClass 'active'

		tabName = $(this).attr 'data'
		$(this).parent().parent().find('.panelContent').not(tabName).css 'display', 'none'
		$(this).parent().parent().find(tabName).show()

$('#tab-trees').on 'click', toggle
$('#tab-behaviors').on 'click', toggle
$('#tab-custom').on 'click', toggle
$('#tab-subjects').on 'click', toggle

$('#tab-treeEditor').on 'click', toggle
$('#tab-nodeEditor').on 'click', toggle
$('#tab-subjEditor').on 'click', toggle
