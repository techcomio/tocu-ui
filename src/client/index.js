'use strict';
import 'babel/polyfill';
import React from 'react';
import Immutable from 'immutable';
import { Router, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import routers from '../shared/routers';
import Reducers from '../shared/reducers';
import immutifyState from '../shared/lib/immutifyState';


const history = new createBrowserHistory();
const initialState = immutifyState(window.__State__);

let finalCreateStore;
if(__DEV__) {
	const cs = compose(devTools())(createStore);

	finalCreateStore = applyMiddleware(thunkMiddleware, createLogger({
	  transformer: (state) => {
	    return Immutable.fromJS(state).toJS();
	  }
	}))(cs);
} else {
	finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)
}


const store = finalCreateStore(Reducers, initialState);
const routes = routers(store);

function renderDevtools () {
	return (
		<DebugPanel top right bottom >
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
	);
}

React.render(
	<div>
		<Provider store={store}>
	  	{() => <Router history={history} children={routes} />}
	  </Provider>
  </div>
  , document.getElementById('content')
);
		// {__DEV__ && renderDevtools()}
