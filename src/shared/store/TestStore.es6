import { Store } from 'flummox';
import Immutable from 'immutable';

export default class AppStore extends Store { 
  constructor(flux) {
    super();

    let appActions = flux.getActions('testActions');
    this.register(appActions.TestActions, this.handleData);

    this.state = {
      posts: Immutable.List(),
    };
  }
  
  handleData(val) {
    this.state.posts = Immutable.List(val.posts);
    this.emit('change');
  }

  getData() {
    return this.state.posts;
  }

}

/*
AppStore.serialize = function (state) {
  return JSON.stringify(state);
}

AppStore.deserialize = function(state) {
  return JSON.parse(state);
}*/