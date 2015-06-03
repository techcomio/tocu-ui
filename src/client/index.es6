"use strict";

import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';

import routes from '../shared/routers';
import HeadParams from '../shared/lib/HeadParams';
import Flux from '../shared/Flux';
import {performRouteHandlerStaticMethod} from '../shared/utils/performRouteHandlerStaticMethod';

let headParams = new HeadParams();
let flux = new Flux();

let dehydratedState = window.__STATE__;

const router = Router.create({
  routes,
  location: Router.HistoryLocation,
  transitionContext: { flux }
});

router.run((Handler, state) => {
  
  async function run() {
    
      await performRouteHandlerStaticMethod(state.routes, 'routerWillRunOnClient', state, flux);

      flux.deserialize(JSON.stringify(dehydratedState));

    	let bodyElement = React.createFactory(FluxComponent)({
        flux: flux,
        children: React.createFactory(Handler)({
          query: state.query,
          params: state.params,
          headParams: headParams,
        })
      });

      React.render(bodyElement, document.body);
  }

  run().catch(error => {
    throw error;
  });

});
