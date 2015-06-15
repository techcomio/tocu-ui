import { Flummox } from 'flummox';
import AppActions  from './actions/AppActions';
import TestActions from './actions/TestActions';
import CityActions from './actions/CityActions';
import AuthActions from './actions/AuthActions';

import AppStore  from './store/AppStore';
import TestStore from './store/TestStore';
import CityStore from './store/CityStore';
import AuthStore from './store/AuthStore';

export default class Flux extends Flummox {
	
  constructor() {
    super();

    this.createActions('appActions',  AppActions,   this);
    this.createActions('testActions', TestActions);
    this.createActions('cityActions', CityActions);
    this.createActions('authActions', AuthActions,  this);

    this.createStore('appStore',  AppStore,  this);
    this.createStore('testStore', TestStore, this);
    this.createStore('cityStore', CityStore, this);
    this.createStore('authStore', AuthStore, this);

  }

}
