'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import SanphamActions   from '../actions/SanphamActions';


class SanphamStore {

  constructor() {
    this.bindActions(SanphamActions);  // getSanphamID, getIdFailed, actionSanphamID, like, count

		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.product = new Map();
    this.count = 0;
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.product)) {
      this.product = Immutable.fromJS(this.product);
    }
    if (!this.count) {
      this.count = 0;
    }
  }

  onGetSanphamID(data) {
    this.product = this.product.merge(data);
  }

  onActionSanphamID(sp) {
    this.product = this.product.merge(sp);
  }

  onGetIdFailed(err) {
    console.log('getIdFailed');
  }

  onLike(data) {
    this.product = this.product.updateIn(['likesCount'], value => value + 1);
  }

  onCount(data) {
    this.count = data;
  }

}


module.exports = Alt.createStore(SanphamStore, 'SanphamStore');
