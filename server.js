'use strict';
require('babel/register')({ 
  stage: 0 // for es 7 features
});

var express      = require('express');
var cookieParser = require('cookie-parser');
var compress     = require('compression');
var bodyParser   = require('body-parser');

var render = require('./src/server');

let app = express();
const env = process.env.NODE_ENV || 'development';

app.set('port', process.env.PORT || 8000);
app.use(cookieParser());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public", {maxage: 8640000}));


app.get('*', render);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if(env === "development") {
    return res.json({
      message: err.message,
      error: {}
    });
  }
  res.send('');
});


app.listen(app.get('port'), function() {
  console.log('tocu.vn server listening on port ' + app.get('port'));
});
