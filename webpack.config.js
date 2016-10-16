require('argv-set-env')();
var pathUtils = require('path');
var webpack = require('webpack');

var srcPath = pathUtils.resolve(__dirname, './src');

var isProd = process.env.npm_lifecycle_event === 'build';

var config = {
	entry: './src/index.coffee',
	devtool: 'source-map',
	output: {
		path: 'public',
		filename: 'bundle.js',
		pathinfo: !isProd
	},
	module: {
		preLoaders: [
			{ test: /\.coffee$/, loader: 'coffeelint', include: srcPath },
		],
		loaders: [
			{ test: /\.coffee$/, loader: 'coffee', include: srcPath },
			{ test: /\.json$/, loader: 'json', include: srcPath },
			{ test: /\.css$/, loader: 'style!css', include: srcPath },
			{ test: /\.js$/, loader: 'buble', include: pathUtils.join(__dirname, 'node_modules/tauros-firebase') },
		]
	},
	resolve: {
		extensions: ['', '.coffee', '.js']
	},
}

if (isProd) {
	config.cache = false;
	config.plugins = [
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		})
	];
}

module.exports = config;
