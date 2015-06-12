import { Flummox, Actions, Store } from 'flummox';
import Immutable from 'immutable';


export default class AppStore extends Store { 
	constructor(flux) {
    super();

    let appActions = flux.getActions('appActions');
    this.register(appActions.dataActions, this.handleData);

    this.state = Immutable.fromJS({
      posts: Immutable.List(),
    });
  }

  handleData(val) {
    this.state = this.state.update('posts', list => list.merge(val.posts));
    this.emit('change');
  }

  getData() {
  	return this.state.get('posts');
  }

  replaceState(_state_) {
    this.state = Immutable.fromJS(_state_);
  }

}


AppStore.serialize = function (state) {
  return JSON.stringify(state);
}

AppStore.deserialize = function(state) {
  return JSON.parse(state);
}
