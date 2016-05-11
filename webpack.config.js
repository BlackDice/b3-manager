var pathUtils = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcPath = pathUtils.resolve(__dirname, './src');

module.exports = {
	entry: './src/index.coffee',
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{ test: /\.coffee$/, loader: 'coffeelint', include: srcPath },
		],
		loaders: [
			{ test: /\.coffee$/, loader: 'coffee', include: srcPath },
			{ test: /\.json$/, loader: 'json', include: srcPath },
			{ test: /\.css$/, loader: 'style!css', include: srcPath },
		]
	},
	resolve: {
		extensions: ['', '.coffee']
	},
	externals: {
		'b3': 'this b3'
	}
}
