# Node list

treeList = require './treeList'

activeNode = null
activeNodeId = null
activeChief = null
$nodeList = $('#nodeList')

dragNode = (evt) ->
	transfer = JSON.stringify { type: 'add', name: evt.target.getAttribute 'data' }
	evt.dataTransfer.setData 'text/plain', transfer

imageExists = (imageUrl) ->
	http = new XMLHttpRequest()
	http.open 'HEAD', imageUrl, false
	http.send()
	return http.status != 404

exports.load = loadNodes = (chief) ->
	activeChief = chief
	cNodeList = activeChief.listBehaviorNodes()
	sortedList = _.groupBy cNodeList, 'category'
	order = ['composite', 'decorator', 'action', 'condition']
	$nodeList.empty()

	for key in order
		category = sortedList[key]
		$('<h5>' + key + 's' + '</h5>').appendTo $nodeList
		$ul = $('<ul></ul>').appendTo $nodeList

		for key, node of category
			$li = $('<li></li>').attr('draggable', 'true').appendTo $ul
			$img = $('<span></span>').addClass('nodeIcon').appendTo $li
			testUrl = '/assets/nodes/' + node.name.toLowerCase() + '.png'
			if imageExists testUrl then url = testUrl
			else url = './assets/nodes/' + node.category + '.png'
			$img.css 'background-image', "url('" + url + "')"
			$label = $("<span class='nodeLabel'>" + node.name + '</span>').appendTo $li
			$li.attr 'data', node.name
			$li.on 'dragstart', (evt) -> dragNode(evt)
			$li.on 'click', toggleNode(node, $li)

toggleNode = (node, $li) ->
	return ->
		loadingNodeId = node.name # SWITCH TO ID NAME
		$nodeList.find('li').removeClass 'active' # clear all

		# clicking the same item
		if activeNodeId == loadingNodeId
			# stop displaying editor
			closeNode()
			return

		# close any currently opened
		if activeNodeId
			closeNode()

		# load if new
		if activeNodeId != loadingNodeId
			# start displaying node
			openNode loadingNodeId, node, $li

openNode = (id, node, $li) ->
	activeNodeId = id
	activeNode = node
	$li.addClass 'active'
	$('#code').removeClass 'hidden'
	if treeList.getCActiveTreeId()
		treeLoader.getActiveTree().resize()

closeNode = ->
	activeNodeId = null
	$('#code').addClass 'hidden'
	if treeList.getCActiveTreeId()
		treeLoader.getActiveTree().resize()
