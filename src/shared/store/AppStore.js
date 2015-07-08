'use strict'

import Alt              from '../Alt';
import AppActions       from '../actions/AppActions';
import Immutable, {Map} from 'immutable';
import env from '../lib/env';

class AppStore {

  constructor() {
    this.bindActions(AppActions);  // getData, dataFailed

		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.error = null;
    this.posts = Immutable.List();
  }

  bootstrap() {
    if (!Immutable.List.isList(this.posts)) {
      this.posts = Immutable.fromJS(this.posts);
    }
  }

  onGetData(data) {
    this.posts = this.posts.merge(Array.from(data));
  }

  onDataFailed(err) {
    this.error = 'bad request';
  }

  static Demo() {
  	// console.log(this.state)
  	return 'Demo';
  }

}

/*
AppStore.config = {
  onSerialize (data) {
  },
  onDeserialize (data) {
  }
}*/

module.exports = Alt.createStore(AppStore, 'AppStore');