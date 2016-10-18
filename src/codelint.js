var merge = require('lodash/merge');
var config = merge.apply(undefined, [{}].concat(eslintrules));

function validator(text, options) {
	var code = 'export default ' + text + '\n';
	var result = [];
	var errors = eslint.verify(code, config);
	for (var i = 0; i < errors.length; i++) {
		var error = errors[i];
		result.push({message: error.message,
								 severity: getSeverity(error),
								 from: getPos(error, true),
								 to: getPos(error, false)});
	}
	return result;
}

CodeMirror.registerHelper("lint", "javascript", validator);

function getPos(error, from) {
	var line = error.line-1, ch = from ? error.column : error.column+1;
	if (error.node && error.node.loc) {
		line = from ? error.node.loc.start.line -1 : error.node.loc.end.line -1;
		ch = from ? error.node.loc.start.column : error.node.loc.end.column;
	}
	return CodeMirror.Pos(line, ch);
}

function getSeverity(error) {
	switch(error.severity) {
		case 1:
			return "warning";
		case 2:
			return "error";
		default:
			return "error";
	}
}
