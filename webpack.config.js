var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV || 'development';

module.exports = {
	entry: {
		app: "./src/client/index.js",
		commons: ['react', 'react-redux', 'react-router', 'redux']
	},
	// devtool: "cheap-module-eval-source-map",
	output: {
		path: __dirname + "/public",
		filename: "/js/bundle.js"
	},
	resolve: {
		root: __dirname + "/node_modules",
		modulesDirectories: ['node_modules'],
		extensions: ["", ".js", ".jsx", ".scss", ".css"],
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				test: /\.(js|jsx)$/,
				loader: 'babel-loader?optional=runtime&stage=0'
			},
      {
      	test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=10240"
      },
      {
      	test: /\.(eot|woff2|woff|ttf|svg)$/, loader: "url-loader"
      }
		]
	},
  plugins: [
	  new webpack.optimize.CommonsChunkPlugin("commons", "/js/commons.bundle.js"),
	  new webpack.DefinePlugin({
	  	'__DEV__': env !== 'production',
	  	'__CLIENT__': true,
			'__SERVER__': false,
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    }),
	  // new webpack.optimize.UglifyJsPlugin({minimize: true, compress: { warnings: false }, output: {comments: false}}),
  ],
};
