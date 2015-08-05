'use strict';

import Alt       from '../Alt';
import Axios     from 'axios';
import {Api_URL} from '../../../config-sample';


class OrderActions {

  createOrder(dataObj) {
    let self = this;

    Axios.post(`${Api_URL}/order`, dataObj, {
      headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
    })
    .then((res) => {
      console.log('then', res.data);
      self.dispatch(res.data);
    })
    .catch((res) => {
      console.log('catch', res);
      self.actions.createOrderErr(res.data);
    });
  }

  getListOrder() {
    let self = this;
    
    Axios.get(`${Api_URL}/order?filters=status==open&sort=-createdAt`, {
      headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
    })
    .then((res) => {
      self.dispatch(res.data);
    });
  }

  checkOrder({id}) {
    let self = this;
    Axios.get(`${Api_URL}/order?filters=status==open;id==${id}&sort=-createdAt&limit=1`, {
      headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
    })
    .then((res) => {
      self.dispatch(res.data);
    });
  }

  addOrder(dataObj) {
    // this.dispatch({
    //   "id": 12,
    //   "OrderId": 4,
    //   "product": {
    //     "id": 1,
    //     "code": "SM1",
    //     "name": "Sơ mi xô Nhật Hàn",
    //     "imageUrl": "http://api.tocu.vn/image/0cf60858dd9553a692d3-1-1.jpg",
    //     "onlineStore": true
    //   },
    //   "unitPrice": 200000,
    //   "quantity": 1,
    //   "amount": 200000,
    //   "weight": 500,
    //   "UserId": 2,
    //   "status": "suspended",
    //   "updatedAt": "2015-08-02T11:18:00.134Z",
    //   "createdAt": "2015-08-02T11:18:00.134Z"
    // });
    let self = this;
    Axios.post(`${Api_URL}/orderline`, dataObj, {
      headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
    })
    .then((res) => {
      self.dispatch(res.data);
    })
    .catch((res) => {
      res.data.dataObj = dataObj;
      self.actions.addOrderErr(res.data);
    });
  }

  addToCart(product) {
    this.dispatch(product);
  }

  pushOrder(data) {
    this.dispatch(data);
  }

  createOrderErr(err) {
    this.dispatch(err);
  }

  addOrderErr(err) {
    this.dispatch(err);
  }

}

module.exports = Alt.createActions(OrderActions);
