// Generated by CoffeeScript 1.7.1
(function() {
  var $container, $contextmenu, $erase, $left, $right, Chief, clearClasses, clearConnection, createTNode, data, dragNode, imageExists, nodeAdded, nodeMap, registerClick, registerDragAndDrop, registerRightClick, tActiveNode, tActiveTree, tActiveTreeHasRoot, treantLoaded, treeConfig, unregisterAllEvents, updateNode;

  data = require('./trees/tree.json');

  Chief = require('behavior3-chief');

  treeConfig = {
    container: '#treant',
    rootOrientation: 'NORTH',
    nodeAlign: 'TOP',
    levelSeparation: 50,
    siblingSeparation: 50,
    node: {
      collapsable: true
    },
    animation: {
      nodeSpeed: 100,
      connectorsSpeed: 0
    },
    connectors: {
      type: 'stepRounded',
      style: {
        'stroke-width': 7,
        'stroke': '#414141'
      }
    }
  };

  tActiveTree = null;

  tActiveTreeHasRoot = null;

  tActiveNode = null;

  $container = null;

  nodeMap = {};

  $contextmenu = $('#contextmenu');

  $left = $('#commandMoveLeft');

  $right = $('#commandMoveRight');

  $erase = $('#commandErase');

  registerClick = function(treantConfig, callback) {
    $container = $(treantConfig.container);
    return $container.on('click', function(evt) {
      var cNodeId;
      if (evt.target.classList.contains('node')) {
        evt.preventDefault();
        if (tActiveNode !== evt.target) {
          if (tActiveNode) {
            tActiveNode.classList.remove('highlight');
          }
          evt.target.classList.add('highlight');
          tActiveNode = evt.target;
          cNodeId = evt.target.getAttribute('cnodeid');
          return callback({
            action: 'showNodeMemory',
            cNodeId: cNodeId
          });
        } else {
          return evt.target.classList.add('highlight');
        }
      }
    });
  };

  registerRightClick = function(treantConfig, callback) {
    var clearDisables, clearHighlight, highlightedEl;
    $container = $(treantConfig.container);
    highlightedEl = null;
    clearDisables = function() {
      $left.removeClass('disabled');
      $right.removeClass('disabled');
      return $erase.removeClass('disabled');
    };
    clearHighlight = function() {
      if (highlightedEl) {
        return highlightedEl.classList.remove('highlight');
      }
    };
    $container.on('contextmenu', function(evt) {
      var cNodeId, leftNeighborTId, rightNeighborTId, tNodeId;
      if (evt.target.classList.contains('node')) {
        clearDisables();
        evt.preventDefault();
        clearHighlight();
        evt.target.classList.add('highlight');
        highlightedEl = evt.target;
        cNodeId = evt.target.getAttribute('cnodeid');
        tNodeId = parseInt(evt.target.getAttribute('tnodeid'));
        $contextmenu.attr('cnodeid', cNodeId);
        $contextmenu.attr('tnodeid', tNodeId);
        $contextmenu.show().css({
          top: evt.clientY - 20,
          left: evt.clientX - 20
        });
        leftNeighborTId = parseInt(tActiveTree.getNodeAttribute(tNodeId, 'leftNeighborId'));
        rightNeighborTId = parseInt(tActiveTree.getNodeAttribute(tNodeId, 'rightNeighborId'));
        if (!leftNeighborTId) {
          $left.addClass('disabled');
        }
        if (!rightNeighborTId) {
          return $right.addClass('disabled');
        }
      }
    });
    $erase.on('click', function(evt) {
      var cNodeId, parentId, tNodeId;
      if ($erase.hasClass('disabled')) {
        return;
      }
      cNodeId = $(this).parent().attr('cnodeid');
      tNodeId = parseInt($(this).parent().attr('tnodeid'));
      parentId = tActiveTree.getNodeAttribute(tNodeId, 'parentId');
      tActiveTree.removeNode(tNodeId);
      if (parentId === -1) {
        tActiveTreeHasRoot = false;
      }
      return callback({
        action: 'removeNode',
        cNodeId: cNodeId
      });
    });
    $left.on('click', function(evt) {
      var cNodeIdA, cNodeIdB, leftNeighborTId, tNodeId;
      if ($left.hasClass('disabled')) {
        return;
      }
      cNodeIdA = $(this).parent().attr('cnodeid');
      tNodeId = parseInt($(this).parent().attr('tnodeid'));
      leftNeighborTId = parseInt(tActiveTree.getNodeAttribute(tNodeId, 'leftNeighborId'));
      cNodeIdB = tActiveTree.getNodeAttribute(leftNeighborTId, 'cNodeId');
      tActiveTree.switchIndexes(tNodeId, leftNeighborTId);
      return callback({
        action: 'switchNodes',
        cNodeIdA: cNodeIdA,
        cNodeIdB: cNodeIdB
      });
    });
    $right.on('click', function(evt) {
      var cNodeIdA, cNodeIdB, rightNeighborTId, tNodeId;
      if ($right.hasClass('disabled')) {
        return;
      }
      cNodeIdA = $(this).parent().attr('cnodeid');
      tNodeId = parseInt($(this).parent().attr('tnodeid'));
      rightNeighborTId = parseInt(tActiveTree.getNodeAttribute(tNodeId, 'rightNeighborId'));
      cNodeIdB = tActiveTree.getNodeAttribute(rightNeighborTId, 'cNodeId');
      tActiveTree.switchIndexes(tNodeId, rightNeighborTId);
      return callback({
        action: 'switchNodes',
        cNodeIdA: cNodeIdA,
        cNodeIdB: cNodeIdB
      });
    });
    document.addEventListener('click', function(evt) {
      $contextmenu.hide();
      clearHighlight();
      return clearDisables();
    });
    return window.addEventListener('resize', function(evt) {
      return tActiveTree.resize();
    });
  };

  dragNode = function(evt) {
    var transfer;
    transfer = JSON.stringify({
      type: 'change',
      tid: evt.target.getAttribute('tnodeid'),
      cid: evt.target.getAttribute('cnodeid')
    });
    return evt.dataTransfer.setData('text/plain', transfer);
  };

  registerDragAndDrop = function(treantConfig, callback) {
    $container = $(treantConfig.container);
    $container.on('dragover', function(evt) {
      if (tActiveTreeHasRoot === false) {
        return evt.preventDefault();
      } else if (evt.target.classList.contains('node')) {
        evt.preventDefault();
        return evt.target.classList.add('highlight');
      }
    });
    $container.on('dragleave', function(evt) {
      if (evt.target.classList.contains('node')) {
        return evt.target.classList.remove('highlight');
      }
    });
    $container.on('drop', function(evt) {
      var obj, parentCId, parentTId;
      if (tActiveTreeHasRoot === false) {
        evt.preventDefault();
        obj = JSON.parse(evt.dataTransfer.getData('text'));
        return callback({
          action: 'createRoot',
          nodeName: obj.name
        });
      } else if (evt.target.classList.contains('node')) {
        evt.preventDefault();
        evt.target.classList.remove('highlight');
        obj = JSON.parse(evt.dataTransfer.getData('text'));
        parentCId = evt.target.getAttribute('cnodeid');
        parentTId = parseInt(evt.target.getAttribute('tnodeid'));
        switch (obj.type) {
          case 'add':
            return callback({
              action: 'addNode',
              nodeName: obj.name,
              parentCId: parentCId,
              parentTId: parentTId
            });
          case 'change':
            return callback({
              action: 'changeParent',
              tNodeId: obj.tid,
              cNodeId: obj.cid,
              parentTId: parentTId,
              parentCId: parentCId
            });
        }
      }
    });
    return $('.node').on('dragstart', function(evt) {
      return dragNode(evt);
    });
  };

  unregisterAllEvents = function() {
    $container.unbind('dragover');
    $container.unbind('dragleave');
    $container.unbind('drop');
    $container.unbind('click');
    $container.unbind('contextmenu');
    $left.unbind('click');
    $right.unbind('click');
    return $erase.unbind('click');
  };

  imageExists = function(imageUrl) {
    var http;
    http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status !== 404;
  };

  createTNode = function(cNode) {
    var tNode;
    return tNode = {
      text: {
        name: cNode.getName(),
        status: ' ',
        contact: ' ',
        desc: cNode.getDescription()
      },
      image: './assets/nodes/' + cNode.getName().toLowerCase() + '.png',
      collapsed: false,
      HTMLclass: 'none',
      cNodeId: cNode.getId()
    };
  };

  updateNode = function(status) {
    var cNode, tConn, tNode;
    cNode = this;
    tNode = nodeMap[cNode.getId()].tNode;
    tConn = nodeMap[cNode.getId()].connection;
    clearClasses(tNode.nodeDOM);
    clearConnection(tConn);
    switch (status) {
      case Chief.status.SUCCESS:
        tNode.nodeDOM.classList.add('success');
        return tConn.attr('stroke', '#299b44');
      case Chief.status.RUNNING:
        tNode.nodeDOM.classList.add('running');
        return tConn.attr('stroke', '#9c7500');
      case Chief.status.FAILURE:
        tNode.nodeDOM.classList.add('failure');
        return tConn.attr('stroke', '#d2521a');
      case Chief.status.ERROR:
        tNode.nodeDOM.classList.add('error');
        return tConn.attr('stroke', '#d21a1a');
    }
  };

  clearClasses = function(el) {
    el.classList.remove('success');
    el.classList.remove('failure');
    el.classList.remove('running');
    return el.classList.remove('error');
  };

  clearConnection = function(el) {
    if (el) {
      return el.attr('stroke', '#414141');
    }
  };

  treantLoaded = function() {
    var id, tNode, tNodes, _i, _len, _results;
    tNodes = tActiveTree.tree.nodeDB.db;
    _results = [];
    for (_i = 0, _len = tNodes.length; _i < _len; _i++) {
      tNode = tNodes[_i];
      id = tNode.cNodeId;
      if (id && id !== 'start') {
        nodeMap[id].tNode = tNode;
        _results.push(nodeMap[id].connection = tActiveTree.tree.connectionStore[tNode.id]);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  nodeAdded = function(cNode, tNode, tNodeDefinition) {
    var id;
    $(tNode.nodeDOM).on('dragstart', function(evt) {
      return dragNode(evt);
    });
    cNode.on('status', updateNode.bind(cNode));
    id = cNode.getId();
    nodeMap[id] = tNodeDefinition;
    nodeMap[id].tNode = tNode;
    return nodeMap[id].connection = tActiveTree.tree.connectionStore[tNode.id];
  };

  exports.clearAllNodes = function() {
    var id, tNode, tNodes, _i, _len, _results;
    tNodes = tActiveTree.tree.nodeDB.db;
    _results = [];
    for (_i = 0, _len = tNodes.length; _i < _len; _i++) {
      tNode = tNodes[_i];
      id = tNode.cNodeId;
      if (id !== 'start') {
        clearClasses(tNode.nodeDOM);
        _results.push(clearConnection(nodeMap[id].connection));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  exports.addRootNode = function(cNode) {
    tActiveTreeHasRoot = true;
    return this.addNodeToTree(cNode, -1);
  };

  exports.addNodeToTree = function(cNode, parentTId) {
    var tNode, tNodeDefinition;
    tNodeDefinition = createTNode(cNode);
    tNode = tActiveTree.addNode(tNodeDefinition, parentTId);
    return tActiveTree.redraw(function() {
      return nodeAdded(cNode, tNode, tNodeDefinition);
    });
  };

  exports.changeParent = function(tNodeId, parentTId) {
    return tActiveTree.changeParent(tNodeId, parentTId);
  };

  exports.redrawTree = function(animate) {
    return tActiveTree.redraw(null, animate);
  };

  exports.getActiveTree = function() {
    return tActiveTree;
  };

  exports.loadTree = function(cTree, gridSize, cbIndex) {
    var cNode, cNodes, cParentNode, config, nodeStructure, tNode, tParentNode, _i, _j, _len, _len1;
    config = _.cloneDeep(treeConfig);
    config.quantize = gridSize;
    cNodes = cTree.listNodes();
    for (_i = 0, _len = cNodes.length; _i < _len; _i++) {
      cNode = cNodes[_i];
      nodeMap[cNode.getId()] = createTNode(cNode);
    }
    for (_j = 0, _len1 = cNodes.length; _j < _len1; _j++) {
      cNode = cNodes[_j];
      cParentNode = cNode.getParent();
      tNode = nodeMap[cNode.getId()];
      if (cParentNode) {
        tParentNode = nodeMap[cParentNode.getId()];
        tNode.parent = tParentNode;
      }
      cNode.on('status', updateNode.bind(cNode));
    }
    nodeStructure = _.values(nodeMap);
    nodeStructure.unshift(config);
    tActiveTree = new Treant(nodeStructure, cbIndex, treantLoaded);
    tActiveTreeHasRoot = cTree.getRootNode() !== null;
    registerDragAndDrop(config, cbIndex);
    registerRightClick(config, cbIndex);
    return registerClick(config, cbIndex);
  };

  exports.closeTree = function(treeId) {
    nodeMap = {};
    if (tActiveTree) {
      tActiveTree.destroy();
      tActiveTree = null;
      unregisterAllEvents();
      console.log('closing tree', treeId);
    }
    return $container = null;
  };

}).call(this);