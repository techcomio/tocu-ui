"use strict";

import 'babel/polyfill';
import React         from 'react';
import Router        from 'react-router';
import FluxComponent from 'flummox/component';
import Cookies       from 'cookies-js';

import routes     from '../shared/routers';
import HeadParams from '../shared/lib/HeadParams';
import Flux       from '../shared/Flux';
import { performRouteHandlerStaticMethod } from '../shared/utils/performRouteHandlerStaticMethod';

let headParams = new HeadParams();
let flux       = new Flux();

// console.log(Cookies.get('token'));
// let token = Cookies.get('token');
// flux.getActions('authActions').cookieActions(token);

let dehydratedState = window.__STATE__;

const router = Router.create({
  routes,
  location: Router.HistoryLocation,
  transitionContext: { flux }
});

router.run((Handler, state) => {
  
  async function run() {
    
      await performRouteHandlerStaticMethod(state.routes, 'routerWillRunOnClient', state, flux);

      // merge data Store, data trên server gửi xuống. của các Store sử dụng func deserialize. 
      // https://github.com/acdlite/flummox/blob/master/docs/docs/api/store.md#deserializestate
      flux.deserialize(JSON.stringify(dehydratedState));

      React.render(
        <FluxComponent flux={flux} >
          <Handler query={state.query} params={state.params} headParams={headParams} />
        </FluxComponent>, document.body);
  }

  run().catch(error => {
    throw error;
  });

});
