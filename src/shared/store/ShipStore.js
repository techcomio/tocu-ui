'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import ShipActions      from '../actions/ShipActions';


class ShipStore {

  constructor() {
    this.bindActions(ShipActions);  // getPhiShip
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.phiship = new Map();
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.phiship)) {
      this.phiship = Immutable.fromJS(this.phiship);
    }
  }

  onGetPhiShip(data) {
    this.phiship = this.phiship.merge(data);
  }

}


module.exports = Alt.createStore(ShipStore, 'ShipStore');
