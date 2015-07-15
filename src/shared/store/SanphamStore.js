'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import SanphamActions   from '../actions/SanphamActions';


class SanphamStore {

  constructor() {
    this.bindActions(SanphamActions);  // getSanphamID, getIdFailed

		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.product = new Map();
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.product)) {
      this.product = Immutable.fromJS(this.product);
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

}


module.exports = Alt.createStore(SanphamStore, 'SanphamStore');
