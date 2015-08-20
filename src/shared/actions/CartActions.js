'use strict';

import Alt from '../Alt';
import Axios from 'axios';
import {Api_URL} from '../../../config-sample';
import Cookies from 'cookies-js';


class CartActions {

  /**
   * [createCart description]
   * @param  {array} product
   * @return {object}
   */
  createCart(product) {
  	let self = this;
    Axios({
    	method: 'post'
		  , url: `${Api_URL}/cart`
		  , data: [product]
		  , headers: {}
    })
    .then((res) => {
      self.dispatch(res.data);
      self.actions.addToCart(product);
    })
    .catch((res) => {
    });
  }

  getCart() {
    let cartId = Cookies.get('cart');
    let self = this
    , data = {};

    if(localStorage.access_token) {
      data = {
        method: 'get'
        , url: `${Api_URL}/cart`
        , headers: {
          'Authorization': `Bearer ${localStorage.access_token}`
        }
      }
    } else {
      data = {
        method: 'get'
        , url: `${Api_URL}/cart/${cartId}`
        , headers: {}
      }
    }

    Axios(data)
    .then((res) => {
      self.dispatch(res.data);
    });
  }

  pushToCart(product, cartId) {
  	let self = this;
    Axios({
    	method: 'post'
		  , url: `${Api_URL}/cart/${cartId}`
		  , data: [product]
		  , headers: {}
    })
    .then((res) => {
      self.actions.addToCart(product);
    })
    .catch((res) => {
    });
  }

  destroyCart(cartId, pId) {
    let self = this
    , data = {};
    if(localStorage.access_token) {
      data = {
        method: 'delete'
        , url: `${Api_URL}/cart/${pId}`
        , headers: {
          'Authorization': `Bearer ${localStorage.access_token}`
        }
      };
    } else {
      data = {
        method: 'delete'
        , url: `${Api_URL}/cart/${pId}/${cartId}`
      }
    }

    Axios(data)
    .then((res) => {
      self.dispatch(res.data);
    });
  }

  capnhatCart() {
    let cartId = Cookies.get('cart');
    let self = this
    , data = {};

    if(localStorage.access_token) {
      data = {
        method: 'put'
        , url: `${Api_URL}/cart`
        , headers: {
          'Authorization': `Bearer ${localStorage.access_token}`
        }
      }
    } else {
      if(!cartId) {
        return;
      }
      data = {
        method: 'put'
        , url: `${Api_URL}/cart/${cartId}`
        , headers: {}
      }
    }

    Axios(data)
    .then((res) => {
      self.dispatch(res.data);
    })
    .catch((res) => {
      if(res.status === 304) {
        self.actions.capnhatCart304();
      }
    });
  }

  empty() {
    this.dispatch();
  }

  capnhatCarts(cartId) {
  }

  capnhatCart304() {
    this.dispatch();
  }

  addToCart(product) {
    this.dispatch(product);
  }

}

module.exports = Alt.createActions(CartActions);
