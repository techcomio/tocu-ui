'use strict';
require('babel/register')({
	stage: 0,
});
const env = process.env.NODE_ENV || 'development';
global.__DEV__ = env !== "production";
global.__CLIENT__ = false;
global.__SERVER__ = true;


const express = require('express');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const render = require('./src/server');
const app = express();

app.set('port', process.env.PORT || 8000);
app.use(cookieParser());
app.use(compress());
app.use(express.static(__dirname + "/public", {maxage: 8640000}));

app.get('*', render);

app.use(function(req, res, next) {
  let err = new Error('Not Found!');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  let status = err.status || 500;
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
});

app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
