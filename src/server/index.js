'use strict';
import Axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLocation from 'history/lib/createLocation';
import { Router } from 'react-router';
import { RoutingContext, match } from 'react-router';
import thunkMiddleware from "redux-thunk";
import routers from '../shared/routers';
import Reducers from '../shared/reducers';
import { loadAuth } from '../shared/actions/auth';
import { loadCard } from '../shared/actions/cart';
import HtmlComponent from './Html';
import { API_URL } from '../../config';


export default async function (req, res, next) {
  const { path, query } = req;
  let location = createLocation(req.url);
  const token = req.cookies.access_token;
  const cartId = req.cookies.cart;
  const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
  const store = finalCreateStore(Reducers, {});
  const routes = routers(store);

  /**
   * handle actions first load
   */
  if(token) {
    await * [
      store.dispatch(loadAuth({token}))
      , store.dispatch(loadCard({token}))
    ]
  } else if(cartId) {
    await * [store.dispatch(loadCard({cartId}))]
  }

  match({routes, location}, async (err, redirectLocation, routerState) => {
    try {
      if (err) {
        throw err;
      }

      /**
       * if Redirect "chuyển hướng"
       * @param  {string} pathname
       * @return {func} res.redirect - express
       */
      if(redirectLocation) {
      // if(redirectLocation.redirectInfo) {
        // var { pathname, query, state } = redirectLocation.redirectInfo;
        // res.redirect(pathname);
        res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        return;
      }

      /**
       * if name Router NotFound
       * render page 404 NotFound
       * @param  {string} routerState.branch[1].name - name Router path="*" react-router
       * @return {func} res.send
       */
      if (routerState.routes[1].name === 'NotFound') {
        res.status(404);
        // res.send('Not Found!');
        // return;
      }

      const { params, location } = routerState;
      const prepareRouteMethods = routerState.components.map(component => component.prepareRoute);
      for(const prepareRoute of prepareRouteMethods) {
        if (!prepareRoute) {
          continue;
        }

        await prepareRoute({ store, params, location });
      }

     	var body = React.renderToString(
        <Provider store={store}>
          {() => <RoutingContext {...routerState} />}
        </Provider>
      );

      const initialState = store.getState();
      const html = React.renderToString(<HtmlComponent markup={body} state={JSON.stringify(initialState)} />);

			res.send(`<!DOCTYPE html>` + html);
    } catch(err) {
      next(err);
    }
  });
}
