'use strict';

import express    from 'express';
import compress   from 'compression';
import bodyParser from 'body-parser';

import render from './src/server';

let app = express();

app.set('port', process.env.PORT || 8080);
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
  res.json({
    message: err.message,
    error: {}
  });
});


app.listen(app.get('port'), function() {
  console.log('tocu.vn server listening on port ' + app.get('port'));
});
