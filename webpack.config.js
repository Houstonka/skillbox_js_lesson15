const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{ test : /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test : /\.js$/, loader: 'babel-loader', exclude: '/node_modules/'}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	mode: 'development',
	devServer: {
    overlay: true,
    open: true
  }
}
