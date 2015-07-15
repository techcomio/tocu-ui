import React      from 'react';
import History    from 'react-router/lib/BrowserHistory';
import Iso        from 'iso';
import Alt        from '../shared/Alt';
import Router     from '../shared/components/Router';
import routes     from '../shared/routes';
import HeadParams from '../shared/lib/HeadParams';
var _ = require('lodash');

let history = new History();
let title = {
  HeadParams: new HeadParams({})
}

Iso.bootstrap((__state__, __, container) => {
	if(localStorage.auth) {
		let data = JSON.stringify(_.merge(JSON.parse(__state__), {
		  AuthStore: {
		    auth: JSON.parse(localStorage.auth),
		  }
		}));
	  Alt.bootstrap(data);
	} else {
	  Alt.bootstrap(__state__);
	}


  React.render(
	  <Router {...{ ...title, history }} />
	  ,document.body
	);
});
