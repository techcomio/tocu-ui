'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import SaleActions      from '../actions/SaleActions';


class SaleStore {

  constructor() {
    this.bindActions(SaleActions);  // getProductSale
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.listSale = Immutable.List();
  }

  bootstrap() {
    if (!Immutable.List.isList(this.listSale)) {
      this.listSale = Immutable.fromJS(this.listSale);
    }
  }

  onGetProductSale(data) {
    this.listSale = this.listSale.merge(Array.from(data));
  }

}


module.exports = Alt.createStore(SaleStore, 'SaleStore');
