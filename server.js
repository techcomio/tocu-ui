require('babel/register')({
	stage: 0,
})
const env = process.env.NODE_ENV || 'development';
global.__DEV__ = env !== "production";


const express = require('express');
const webpack = require('webpack');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev');
const render = require('./src/server');
const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3000;


if(env === "development") {
	app.use(webpackDevMiddleware(compiler, { noInfo: true }));
	app.use(webpackHotMiddleware(compiler));
}
app.use(cookieParser());
app.use(compress());
app.use(express.static(__dirname + "/public", {maxage: 8640000}));

app.get('*', render);

app.use(function(req, res, next) {
  var err = new Error('Not Found!');
  err.status = 404;
  next(err);
})

app.use(function(err, req, res, next) {
  var status = err.status || 500;
  res.status(status);
  if(env === "development") {
    res.json({
      message: err.message,
      status: status
    });
    return;
  }
  err.status ?
	  res.send(err.message) :
	  res.send('Internal server error');
})


app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s in your browser.", port, port);
  }
})
