'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import OrderActions     from '../actions/OrderActions';


class OrderStore {

  constructor() {
    this.bindActions(OrderActions);  // createOrder, createOrderErr, getListOrder, pushOrder, checkOrder
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.order = new Map({});
    this.listOrder = new Immutable.List([]);
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
    if (!Immutable.Map.isMap(this.createStatus)) {
      this.createStatus = Immutable.fromJS(this.createStatus);
    }
    if (!Immutable.Map.isMap(this.itemPushOrder)) {
      this.itemPushOrder = Immutable.fromJS(this.itemPushOrder);
    }
  }

  onCreateOrder(data) {
    console.log('onCreateOrder', data);
    this.createStatus = new Map({messages: `Đặt hàng thành công`, status: 'success'});
    this.order = new Map(data);
  }

  onGetListOrder(data) {
    this.listOrder = this.listOrder.merge(data);
  }

  onAddOrder(data) {
    console.log('onAddOrder', data);
    this.createStatus = new Map({messages: `Thêm vào đơn hàng #${data.id} thành công`, status: 'success'});
    this.order = new Map(data);
  }

  onCheckOrder(data) {
    console.log('onCheckOrder', data);
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

}


module.exports = Alt.createStore(OrderStore, 'OrderStore');
