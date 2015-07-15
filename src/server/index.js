'use strict';

import 'babel/polyfill';
import React                   from 'react';
import {Router as ReactRouter} from 'react-router';
import Location                from 'react-router/lib/Location';
import History                 from 'react-router/lib/MemoryHistory';
import Iso                     from 'iso';
import Alt                     from '../shared/Alt';
import routes                  from '../shared/routes';
/**
 * @Component
 */
import Router      from '../shared/components/Router';
import HeadParams  from '../shared/lib/HeadParams';
let HtmlComponent = React.createFactory(require('./html'));


export default function (req, res, next) {
  const { path, query } = req;
  const location = new Location(path, query);
  const history  = new History(path);

  let auth = {
    avatarUrl: req.cookies.avatarUrl,
    mobilePhone: req.cookies.mobilePhone,
    name: req.cookies.name,
    password: req.cookies.password,
    token: req.cookies.token,
  }

  /**
   * set auth to Store
   * @auth cookie...
   * @type {Object}
   */
  let data = {
    AuthStore: {
      auth: req.cookies,
    }
  };
  Alt.bootstrap(JSON.stringify(data));

  
  ReactRouter.run(routes, location, async (err, routerState, transition) => {
    try {
      if (err) {
        throw err;
      }

      /**
       * [if Redirect "chuyển hướng"]
       * @param  {string} pathname
       * @return {func} res.redirect [express]
       */
      if(transition.redirectInfo) {
        var { pathname, query, state } = transition.redirectInfo;
        return res.redirect(pathname)
      }

      /**
       * [if name Router NotFound]
       * render page 404 NotFound
       * @param  {string} routerState.branch[1].name [name Router path="*" react-router]
       * @return {func} res.send.
       */
      if (routerState.branch[1].name === 'NotFound') {
        res.status(404);
        return res.send('Not Found!');
      }

      const { params, location } = routerState;
      const prepareRouteMethods = routerState.components.map(component => component.prepareRoute);
      
      for (let prepareRoute of prepareRouteMethods) {
        if (!prepareRoute) {
          continue;
        }

        await prepareRoute({ params, location });
      }

      let title = { 
        HeadParams: new HeadParams({})
      };
      let iso   = new Iso();

      const body = React.renderToStaticMarkup(
       <Router {...{ ...title, routerState, location, history }} />
      );

      iso.add(body, Alt.flush());

      let html  = React.renderToStaticMarkup(HtmlComponent({
	      markup: iso.render(),
        HeadParams: title.HeadParams,
			}));

			let doctype = '<!DOCTYPE html>';

			return res.send(doctype + html);
    } catch(err) {
      next(err);
    }
	});
}
