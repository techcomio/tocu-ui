'use strict';
import 'babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Immutable from 'immutable';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import promiseMiddleware from '../shared/lib/promiseMiddleware';
import routers from '../shared/routers';
import Reducers from '../shared/reducers';
import immutifyState from '../shared/lib/immutifyState';


const history = new createBrowserHistory();
const initialState = immutifyState(window.__INITIAL_STATE__);

let finalCreateStore;
if(__DEV__) {
	const cs = compose(devTools())(createStore);

	finalCreateStore = applyMiddleware(promiseMiddleware, createLogger({
	  transformer: (state) => {
	    return Immutable.fromJS(state).toJS();
	  }
	}))(cs);
} else {
	finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
}


const store = finalCreateStore(Reducers, initialState);
const routes = routers(store);


render(
	<Provider store={store}>
  	<Router history={history} children={routes} />
  </Provider>
  , document.getElementById('content')
);


// render(
// 	<div>
// 		<Provider store={store}>
// 	  	<Router history={history} children={routes} />
// 	  </Provider>
// 		<DebugPanel top right bottom >
//       <DevTools store={store} monitor={LogMonitor} />
//     </DebugPanel>
// 	</div>
//   , document.getElementById('content')
// );
