import React      from 'react';
import History    from 'react-router/lib/BrowserHistory';
import Iso        from 'iso';
import Alt        from '../shared/Alt';
import Router     from '../shared/components/Router';
import routes     from '../shared/routes';
import HeadParams from '../shared/lib/HeadParams';

let history = new History();
let title = {
  HeadParams: new HeadParams({})
}


/*let data = {
  AppStore: {
    auth: JSON.parse(localStorage.auth),
  }
};
Alt.bootstrap(JSON.stringify(data));*/

Iso.bootstrap((__state__, _, container) => {
  Alt.bootstrap(__state__);

  React.render(
	  <Router {...{ ...title, history }} />
	  ,document.body
	);
});
