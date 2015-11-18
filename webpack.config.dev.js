var webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ],
  // devtool: 'cheap-module-eval-source-map',
  // devtool: "sourcemap",
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': env !== 'production',
      '__CLIENT__': true,
      '__SERVER__': false,
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ["", ".js", ".jsx"],
  },
  resolveLoader: {
    'fallback': __dirname + "/node_modules"
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader:  'babel',
      query: {
        stage: 0,
        plugins: ['react-transform'],
        extra: {
          'react-transform': {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }]
          }
        }
      }
    }]
  }
};
