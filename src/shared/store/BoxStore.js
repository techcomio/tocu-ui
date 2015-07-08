'use strict'

import Alt              from '../Alt';
import BoxActions      from '../actions/BoxActions';
import Immutable, {Map} from 'immutable';


class BoxStore {

  constructor() {
    this.bindActions(BoxActions);  // getBoxID, getBoxIDFailed

		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.posts = Immutable.List();
    this.test = Immutable.List();
  }

  bootstrap() {
    if (!Immutable.List.isList(this.test)) {
      this.test = Immutable.fromJS(this.test);
    }
    if (!Immutable.List.isList(this.posts)) {
      this.posts = Immutable.fromJS(this.posts);
    }
  }

  onGetBoxID(data) {
    this.test = this.test.merge(Array.from(data));
    this.posts = this.posts.merge(Array.from(data));
  }

  onTest(data) {
    console.log('onTest');
  }

  onGetBoxIDFailed(err) {
    console.log('onGetBoxIDFailed', err);
  }

}


module.exports = Alt.createStore(BoxStore, 'BoxStore');
