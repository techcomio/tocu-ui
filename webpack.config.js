var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/client/index.es6",
		main: "./src/assets/scss/app/main.scss",
		commons: ['react/addons', 'react-router', 'flummox']
	},
	// devtool: "sourcemap",
	output: {
		path: __dirname + "/public",
		filename: "/js/bundle.js"
	},
	resolve: {
		root: __dirname + "/node_modules",
		modulesDirectories: ['node_modules'],
		extensions: ["", ".js", ".jsx", "es", ".es6", ".es7", ".scss", ".css"],
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				test: /\.(js|jsx|es|es6|es7)$/,
				loader: 'babel-loader?optional=runtime&stage=1'
			},
			{
				test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css?minimize"),
        // or
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize"),
			},
			{
				test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css?minimize!sass"),
        // or
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!sass-loader"),
      },
      {
      	test: /\.(png|jpg)$/, loader: "url-loader"
      },
      {
      	test: /\.(eot|woff2|woff|ttf|svg)$/, loader: "url-loader"
      }
		]
	},
  plugins: [
	  new webpack.optimize.CommonsChunkPlugin("commons", "/js/commons.bundle.js"),
	  // new webpack.optimize.UglifyJsPlugin({minimize: true, compress: { warnings: false }}),
	  new ExtractTextPlugin("/css/[name].css")
  ],
};
