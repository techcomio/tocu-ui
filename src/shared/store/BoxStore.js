'use strict'

import Alt              from '../Alt';
import BoxActions       from '../actions/BoxActions';
import Immutable, {Map} from 'immutable';


class BoxStore {

  constructor() {
    this.bindActions(BoxActions);  // getBoxs, getBoxID, like, boxsFailed, getBoxIDFailed, likeFailed
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.boxs = Immutable.List();
    this.test = Immutable.List();
    this.info = Immutable.Map();
  }

  bootstrap() {
    if (!Immutable.List.isList(this.boxs)) {
      this.boxs = Immutable.fromJS(this.boxs);
    }
    if (!Immutable.List.isList(this.test)) {
      this.test = Immutable.fromJS(this.test);
    }
    if (!Immutable.List.isList(this.info)) {
      this.info = Immutable.fromJS(this.info);
    }
  }

  onGetBoxs(data) {
    this.boxs = this.boxs.merge(Array.from(data));
  }

  onGetBoxID(data) {
    this.info = this.info.merge(data);
  }

  onLike(id) {
    this.boxs = this.boxs.update(
      this.boxs.findIndex(function(item) { 
        return item.get("id") === id; 
      }), function(item) {
        return item.updateIn(['likesCount'], value => value + 1);
      }
    );

    this.info = this.info.updateIn(['likesCount'], value => value + 1);
  }

  onBoxsFailed(err) {
    console.log('onBoxsFailed', err)
  }

  onGetBoxIDFailed(err) {
    console.log('onGetBoxIDFailed', err);
  }

}


module.exports = Alt.createStore(BoxStore, 'BoxStore');
