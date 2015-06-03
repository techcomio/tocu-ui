import { Flummox, Actions, Store } from 'flummox';

export default class AppStore extends Store { 
	constructor(flux) {
    super();

    let appActions = flux.getActions('appActions');
    this.register(appActions.dataActions, this.handleData);

    this.state = {};
  }
  
  handleData(val) {
  	this.state.posts = val.posts;
    this.emit('change');
  }

  getData() {
  	return this.state.posts || null;
  }

}


AppStore.serialize = function (state) {
  return JSON.stringify(state);
}

AppStore.deserialize = function(state) {
  return JSON.parse(state);
}