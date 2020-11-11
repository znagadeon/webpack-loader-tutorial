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
			enforce: 'pre',
			test: /\.md$/,
			loader: './loaders/mdlint-loader.js',
		}, {
			test: /\.md$/,
			use: [
				'./loaders/html-loader.js',
				{
					loader: './loaders/md-loader.js',
					options: {
						gfm: false,
					},
				},
			],
		}, {
			test: /\.(jpe?g|png|gif)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
			},
		}],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
