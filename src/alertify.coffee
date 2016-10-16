
# https://alertifyjs.org/

alertifyjs = require 'alertify.js'
alertify = new alertifyjs

exports.get = ->
	alertify.logPosition 'bottom right'
	return alertify
