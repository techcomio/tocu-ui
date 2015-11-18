var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: {
		bundle: "./src/client/index.js",
		commons: ['react', 'react-router', 'react-redux', 'redux']
	},
	output: {
		path: __dirname + "/public",
		filename: "/js/[name].js"
	},
	resolve: {
		root: __dirname + "/node_modules",
		modulesDirectories: ['node_modules', 'src'],
		extensions: ["", ".js", ".jsx", ".scss", ".css"],
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				test: /\.(js|jsx)$/,
				loader: 'babel-loader?optional=runtime&stage=0'
			},{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style", "css?minimize!sass"),
			},{
				test: /\.(png|jpg|gif)$/,
				loader: "url-loader?limit=10240"
			},
			{
				test: /\.(eot|woff2|woff|ttf|svg)$/,
				loader: "url-loader"
			}
		]
	},
  plugins: [
		new webpack.optimize.CommonsChunkPlugin("commons", "/js/commons.bundle.js"),
		new ExtractTextPlugin("/css/[name].css"),
	  new webpack.DefinePlugin({
	  	'__DEV__': false,
	  	'__CLIENT__': true,
			'__SERVER__': false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
	  new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: { warnings: false },
			output: { comments: false }
		})
  ],
};
