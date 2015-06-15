'use strict';

import logger     from 'morgan';
import express    from 'express';
import compress   from 'compression';
import bodyParser from 'body-parser';

import render from './src/server';
import html   from './html';

let app = express();

app.set('port', process.env.PORT || 8080);
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public", {maxage: 8640000}));


import data from './public/data.json';
app.get('/data', function(req, res) {
	res.json(data);
});

app.use('/html', html);

app.use(render);


app.listen(app.get('port'), function() {
  console.log('tocu.vn server listening on port ' + app.get('port'));
});
