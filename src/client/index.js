import React      from 'react/addons';
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

Iso.bootstrap((__state__, __, container) => {
  Alt.bootstrap(__state__);

  React.render(
	  <Router {...{ ...title, history }} />
	  ,document.body
	);
});
