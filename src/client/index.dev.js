'use strict';
import 'babel/polyfill';
import React from 'react';
import Immutable from 'immutable';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import routers from '../shared/routers';
import Reducers from '../shared/reducers';

const history = new createBrowserHistory();
const cs = compose(devTools())(createStore);
const finalCreateStore = applyMiddleware(thunkMiddleware, createLogger({
  transformer: (state) => {
    return Immutable.fromJS(state).toJS();
  }
}))(cs);
const store = finalCreateStore(Reducers);
const routes = routers(store);


React.render(
	<div>
		<Provider store={store}>
	  	{() => <Router history={history} children={routes} />}
	  </Provider>
		<DebugPanel top right bottom >
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
  , document.getElementById('content')
);
