// Generated by CoffeeScript 1.7.1
(function() {
  var chiefNodeMemoryChange, chiefTreeMemoryChange, chiefsubjMemoryChange, confirmChange, handleNodeMemoryChange, handleTreeMemoryChange, handlesubjMemoryChange, loadMemory, nodeEditor, nodeEl, nodeMemory, options, subjEditor, subjEl, subjMemory, treeEditor, treeEl, treeMemory, _;

  _ = require('lodash');

  options = {
    search: false,
    history: false
  };

  nodeMemory = null;

  treeMemory = null;

  subjMemory = null;

  nodeEditor = null;

  treeEditor = null;

  subjEditor = null;

  nodeEl = document.getElementById('nodeEditor');

  treeEl = document.getElementById('treeEditor');

  subjEl = document.getElementById('subjEditor');

  nodeEl.addEventListener('keydown', function(evt) {
    return confirmChange(evt, nodeEditor, nodeMemory);
  });

  treeEl.addEventListener('keydown', function(evt) {
    return confirmChange(evt, treeEditor, treeMemory);
  });

  subjEl.addEventListener('keydown', function(evt) {
    return confirmChange(evt, subjEditor, subjMemory);
  });

  confirmChange = function(evt, editor, memory) {
    var json, key, mem, val, _results;
    if (evt.keyCode === 13) {
      evt.preventDefault();
      json = editor.get();
      _results = [];
      for (key in json) {
        val = json[key];
        mem = memory.get(key);
        if (mem === val) {
          continue;
        }
        if (mem != null) {
          _results.push(memory.set(key, val));
        } else {
          _results.push(memory.set(key, val));
        }
      }
      return _results;
    }
  };

  handleNodeMemoryChange = function(data) {
    var node, _ref;
    node = (_ref = data.nodes) != null ? _ref[0] : void 0;
    if ((node != null ? node.parent : void 0) === null) {
      return nodeMemory.set(node.field, null);
    }
  };

  handleTreeMemoryChange = function(data) {
    var node, _ref;
    node = (_ref = data.nodes) != null ? _ref[0] : void 0;
    if ((node != null ? node.parent : void 0) === null) {
      return treeMemory.set(node.field, null);
    }
  };

  handlesubjMemoryChange = function(data) {
    var node, _ref;
    node = (_ref = data.nodes) != null ? _ref[0] : void 0;
    if ((node != null ? node.parent : void 0) === null) {
      return subjMemory.set(node.field, null);
    }
  };

  chiefNodeMemoryChange = function() {
    return nodeEditor.set(nodeMemory.dump());
  };

  chiefTreeMemoryChange = function() {
    return treeEditor.set(treeMemory.dump());
  };

  chiefsubjMemoryChange = function() {
    return subjEditor.set(subjMemory.dump());
  };

  exports.loadNodeMemory = function(subj, cNode) {
    nodeMemory = subj.getMemoryForNode(cNode);
    nodeEditor = loadMemory(nodeEl, nodeEditor, nodeMemory, chiefNodeMemoryChange, handleNodeMemoryChange);
    return $('#nodeMemory').removeClass('collapsed');
  };

  exports.loadTreeMemory = function(tree, subj) {
    treeMemory = subj.getMemoryForTree(tree);
    return treeEditor = loadMemory(treeEl, treeEditor, treeMemory, chiefTreeMemoryChange, handleTreeMemoryChange);
  };

  exports.loadSubjectMemory = function(subj) {
    subjMemory = subj.getMemory();
    return subjEditor = loadMemory(subjEl, subjEditor, subjMemory, chiefsubjMemoryChange, handlesubjMemoryChange);
  };

  loadMemory = function(element, editor, memory, chiefChangeCb, editorChangeCb) {
    var customOptions, json;
    memory.on('change', chiefChangeCb);
    json = memory.dump();
    customOptions = _.assign({
      onChange: editorChangeCb
    }, options);
    if (!editor) {
      editor = new JSONEditor(element, customOptions, json);
    } else {
      editor.set(json);
    }
    return editor;
  };

  exports.clearMemory = function() {
    nodeMemory = null;
    treeMemory = null;
    subjMemory = null;
    nodeEditor.set({});
    treeEditor.set({});
    return subjEditor.set({});
  };

  exports.enableEditors = function() {
    if (nodeEditor) {
      nodeEditor.setMode('tree');
    }
    treeEditor.setMode('tree');
    return subjEditor.setMode('tree');
  };

  exports.disableEditors = function() {
    if (nodeEditor) {
      nodeEditor.setMode('view');
    }
    treeEditor.setMode('view');
    return subjEditor.setMode('view');
  };

}).call(this);
