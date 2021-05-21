const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "[name].js"
	},

	// output: {
	// 	path: path.normalize(path.join(__dirname, "build")),
	// 	filename: '[name].js',
	// },
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				// test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),

		// new BundleAnalyzerPlugin(),
	],


	optimization: {
		splitChunks: { chunks: "all" }
	},
};