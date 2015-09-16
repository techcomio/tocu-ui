'use strict';
import 'babel/polyfill';
import React from 'react';
import Immutable from 'immutable';
import { Router, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import routers from '../shared/routers';
import Reducers from '../shared/reducers';
import immutifyState from '../shared/lib/immutifyState';

const history = new createBrowserHistory();
const initialState = immutifyState(window.__State__);

// let finalCreateStore;
// if(__DEV__) {
// 	const { devTools } = require('redux-devtools'),
// 		createLogger = require('redux-logger'),
// 		cs = compose(devTools(), createStore);

// 	finalCreateStore = applyMiddleware(thunkMiddleware, createLogger())(cs)
// } else {
// 	finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)
// }
// const { devTools } = require('redux-devtools');

const createLogger = require('redux-logger'),
	finalCreateStore = applyMiddleware(thunkMiddleware, createLogger({
	  transformer: (state) => {
	    return Immutable.fromJS(state).toJS();
	  }
	}))(createStore);

const store = finalCreateStore(Reducers, initialState);
const routes = routers(store,);

function renderDevtools () {
	return (
		<DebugPanel top right bottom >
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
	);
}

React.render(
	<Provider store={store}>
  	{() => <Router history={history} children={routes} />}
  </Provider>
  , document.getElementById('content')
);
