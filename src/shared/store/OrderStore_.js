'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import OrderActions     from '../actions/OrderActions';


class OrderStore {

  constructor() {
    this.bindActions(OrderActions);  // createOrder, createOrderErr, getListOrder, pushOrder, checkOrder, addToCart
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.order = new Map({});
    this.listOrder = new Immutable.List([]);
    this.listOrders = new Map({});
    this.itemPushOrder = new Map({});
    this.createStatus = new Map({});
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.order)) {
      this.order = Immutable.fromJS(this.order);
    }
    if (!Immutable.List.isList(this.listOrder)) {
      this.listOrder = Immutable.fromJS(this.listOrder);
    }
    if (!Immutable.List.isList(this.listOrders)) {
      this.listOrders = Immutable.fromJS(this.listOrders);
    }
    if (!Immutable.Map.isMap(this.createStatus)) {
      this.createStatus = Immutable.fromJS(this.createStatus);
    }
    if (!Immutable.Map.isMap(this.itemPushOrder)) {
      this.itemPushOrder = Immutable.fromJS(this.itemPushOrder);
    }
  }

  onCreateOrder(data) {
    this.createStatus = new Map({messages: `Đặt hàng thành công`, status: 'success'});
    this.order = new Map(data);
  }

  onGetListOrder(data) {
    this.listOrder = this.listOrder.merge(data);
  }

  onAddOrder(data) {
    this.createStatus = new Map({messages: `Thêm vào đơn hàng #${data.id} thành công`, status: 'success'});
    this.order = new Map(data);
  }

  onAddToCart(product) {
    this.listOrders = this.listOrders.set(product.get('id'), product);
  }

  onCheckOrder(data) {
  }

  onPushOrder(data) {
    this.itemPushOrder = new Map(data);
  }

  onCreateOrderErr(err) {
    this.createStatus = new Map({messages: err.message, status: 'warning'});
  }

  onAddOrderErr(err) {
    this.createStatus = new Map({messages: err.message, status: 'warning'});
    this.order = new Map(err.dataObj);
  }

  static getTotalCart() {
    let total = 0,
      { listOrders } = this.getState();

    listOrders.forEach((product, key) => {
      total += product.get('price');
    });
    
    return total;
  }

  static getTotalCartSale() {
    let total = 0,
      { listOrders } = this.getState();

    listOrders.forEach((product, key) => {
      total += product.get('salePrice') ? product.get('salePrice') : product.get('price');
    });

    return total;
  }

  static getTotalSize() {
    let { listOrders } = this.getState();
    return listOrders.size;
  }

}


module.exports = Alt.createStore(OrderStore, 'OrderStore');
