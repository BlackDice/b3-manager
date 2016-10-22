
# https://alertifyjs.org/

alertifyjs = require 'alertify.js'
alertify = new alertifyjs

exports.get = ->
	alertify.logPosition 'bottom right'
	alertify.okBtn 'Yes'
	alertify.cancelBtn 'No'
	return alertify
