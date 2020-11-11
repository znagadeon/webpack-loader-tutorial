const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: './src/main.js',
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.min.js',
	},

	devServer: {
		port: 3000,
		contentBase: './dist',
	},

	module: {
		rules: [{
			test: /\.md$/,
			loader: './loaders/md-loader.js',
			options: {
				gfm: false,
			},
		}],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
