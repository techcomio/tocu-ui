'use strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import serialize from "serialize-javascript";
import promiseMiddleware from 'universal/lib/promiseMiddleware';
import routers from 'universal/routers';
import Reducers from 'universal/reducers';
import { loadAuth } from 'universal/actions/auth';
import { loadCard } from 'universal/actions/cart';
import HtmlComponent from './html';
import HtmlComponentDev from './htmlDev';
import { API_URL } from '../../config';


export default async function (req, res, next) {
  const token = req.cookies.access_token;
  const cartId = req.cookies.cart;
  const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
  const store = finalCreateStore(Reducers, {});

  /**
   * handle actions first load
   */
  if(token) {
    await * [
      store.dispatch(loadAuth({token}))
      , store.dispatch(loadCard({token}))
    ]
  } else if(cartId) {
    await * [
      store.dispatch(loadCard({cartId}))
    ]
  }

  match({routes: routers(store), location: req.url}, async (err, redirectLocation, routerState) => {
    try {
      if (err) {
        throw err;
      }

      /**
       * if Redirect "chuyển hướng"
       * @param  {redirectLocation} object redirect
       */
      if(redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        return;
      }

      /**
       * if name Router NotFound
       * render page 404 NotFound
       */
      if (routerState.routes[1].name === 'NotFound') {
        res.status(404);
      }

      const { params, location } = routerState;
      const prepareRouteMethods = routerState.components.map(component => component.prepareRoute);
      for(const prepareRoute of prepareRouteMethods) {
        if (!prepareRoute) {
          continue;
        }

        await prepareRoute({ store, params, location });
      }

      var body = renderToString(
        <Provider store={store}>
          <RoutingContext {...routerState} />
        </Provider>
      );

      const initialState = store.getState();
      const html = __DEV__ ? renderToString(<HtmlComponentDev markup={body} state={serialize(initialState)} />) : renderToString(<HtmlComponent markup={body} state={serialize(initialState)} />);

			res.send(`<!DOCTYPE html>` + html);
    } catch(err) {
      next(err);
    }
  });
}
