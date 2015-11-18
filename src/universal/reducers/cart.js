'use strict';
import {
  CART_CREATE_LOAD
  , CART_CREATE_SUCCESS
  , CART_CREATE_FAIL
  , CART_GET_LOAD
  , CART_GET_SUCCESS
  , CART_GET_FAIL
  , CART_PUSH_LOAD
  , CART_PUSH_SUCCESS
  , CART_PUSH_FAIL
  , CART_DESTROY_LOAD
  , CART_DESTROY_SUCCESS
  , CART_DESTROY_FAIL
  , CART_CAPNHAT_LOAD
  , CART_CAPNHAT_SUCCESS
  , CART_CAPNHAT_FAIL
  , CLEAR_CART
  , ADD_CART_ID
  , SHIP_PING_INFO
  , SHIP_PING_INFO_SUCCESS
  , SHIP_PING_INFO_FAIL
  , PAYMENT_METHOD
  , PAYMENT_METHOD_SUCCESS
  , PAYMENT_METHOD_FAIL
} from '../actions/actionsTypes';
import Cookies from 'cookies-js';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  cartId: null
  , createLoad: false
  , getLoad: false
  , pushLoad: false
  , destroyLoad: false
  , capnhatLoad: false
  , shippingLoad: false
  , paymentLoad: false
	, Cart: Map()
	, createErr: null
	, getErr: null
	, pushErr: null
	, destroyErr: null
	, capnhatErr: null
	, shippingErr: null
	, paymentErr: null
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case CART_CREATE_LOAD:
		return state.merge({
      cartId: null
      , createLoad: true
    	, Cart: Map()
    	, createErr: null
		});
  case CART_CREATE_SUCCESS:
    Cookies.set('cart', action.cartId, {expires: 2592000});
		return state.merge({
      cartId: action.cartId
      , createLoad: false
      , createErr: null
		});
  case CART_CREATE_FAIL:
		return state.merge({
      cartId: null
      , createLoad: false
      , createErr: action.err
		});
  case CART_GET_LOAD:
    return state.merge({
      getLoad: true
      , Cart: Map()
      , getErr: null
    });
  case CART_GET_SUCCESS:
    return state.merge({
      getLoad: false
      , Cart: Immutable.fromJS(action.data)
      , getErr: null
    });
  case CART_GET_FAIL:
    return state.merge({
      getLoad: false
      , Cart: Map()
      , getErr: action.err
    });
  case CART_PUSH_LOAD:
    return state.merge({
      pushLoad: true
      , pushErr: null
    });
  case CART_PUSH_SUCCESS:
    return state.merge({
      pushLoad: false
      , Cart: Immutable.fromJS(action.data)
      , pushErr: null
    });
  case CART_PUSH_FAIL:
    return state.merge({
      pushLoad: false
      , pushErr: action.err
    });
  case CART_DESTROY_LOAD:
    return state.merge({
      destroyLoad: true
      , destroyErr: null
    });
  case CART_DESTROY_SUCCESS:
    return state.merge({
      destroyLoad: true
      , Cart: Immutable.fromJS(action.data)
      , destroyErr: null
    });
  case CART_DESTROY_SUCCESS:
    return state.merge({
      destroyLoad: false
      , destroyErr: action.err
    });
  case CART_CAPNHAT_LOAD:
    return state.merge({
      capnhatLoad: true
      , capnhatErr: null
    });
  case CART_CAPNHAT_SUCCESS:
    return state.merge({
      capnhatLoad: false
      , Cart: Immutable.fromJS(action.data)
      , capnhatErr: null
    });
  case CART_CAPNHAT_FAIL:
    return state.merge({
      capnhatLoad: false
      , capnhatErr: action.err
    });
  case CLEAR_CART:
    return state.merge({
      cartId: null
      , Cart: Map()
    });
  case ADD_CART_ID:
    return  state.merge({
      cartId: action.id
    });
  case SHIP_PING_INFO:
    return state.merge({
      shippingLoad: true
      , shippingErr: null
    });
  case SHIP_PING_INFO_SUCCESS:
    return state.merge({
      shippingLoad: false
      , Cart: Immutable.fromJS(action.data)
      , shippingErr: null
    });
  case SHIP_PING_INFO_FAIL:
    return state.merge({
      shippingLoad: false
      , shippingErr: action.err
    });
  case PAYMENT_METHOD:
    return state.merge({
      paymentLoad: true
      , paymentErr: null
    });
  case PAYMENT_METHOD_SUCCESS:
    return state.merge({
      paymentLoad: false
      , Cart: Immutable.fromJS(action.data)
      , paymentErr: null
    });
  case PAYMENT_METHOD_FAIL:
    return state.merge({
      paymentLoad: false
      , paymentErr: action.err
    });
  default:
    return state;
  }
}
