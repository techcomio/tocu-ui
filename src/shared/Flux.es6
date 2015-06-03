import { Flummox } from 'flummox';
import AppActions from './actions/AppActions';
import TestActions from './actions/TestActions';
import AppStore from './store/AppStore';
import TestStore from './store/TestStore';

export default class Flux extends Flummox {
	
  constructor() {
    super();

    this.createActions('appActions', AppActions);
    this.createActions('testActions', TestActions);

    this.createStore('appStore', AppStore, this);
    this.createStore('testStore', TestStore, this);

  }

}
