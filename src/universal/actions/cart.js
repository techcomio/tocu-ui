'use strict';
import Axios from 'axios';
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
  , SHIP_PING_INFO
  , SHIP_PING_INFO_SUCCESS
  , SHIP_PING_INFO_FAIL
  , PAYMENT_METHOD
  , PAYMENT_METHOD_SUCCESS
  , PAYMENT_METHOD_FAIL
} from './actionsTypes';
import { API_URL } from '../../../config';
import { verifyShow } from './boxRequireAuth';
import { notifActions } from 'redux-notif';


export function loadCard({cartId, token}) {
  return async (dispatch, getState) => {
    let data = {};
    if(token) {
      data = {
        method: 'get'
        , url: `${API_URL}/cart`
        , headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    } else {
      data = {
        method: 'get'
        , url: `${API_URL}/cart/${cartId}`
      }
    }
    await Axios(data)
      .then((res) => {
        dispatch(getCartSuccess(res.data));
      })
      .catch((res) => {
        dispatch(getCartFail(res.data))
      });
  }
}


export function createCart(product) {
  return (dispatch, getState) => {
    dispatch(createLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    if (access_token) {
      Axios({
      	method: 'post'
  		  , url: `${API_URL}/cart/line`
  		  , data: [product]
  		  , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then((res) => {
        dispatch(createCartSuccess(res.data));
        dispatch(getCart({}));
      })
      .catch((res) => {
        dispatch(createLoadFail(res.data));
      });
    } else {
      Axios({
        method: 'post'
        , url: `${API_URL}/cart/line`
        , data: [product]
      })
      .then((res) => {
        dispatch(createCartSuccess(res.data));
        dispatch(getCart({id: res.data.id}));
      })
      .catch((res) => {
        dispatch(createLoadFail(res.data));
      });
    }
  }
}

export function createLoad() {
  return {
    type: CART_CREATE_LOAD
  }
}

export function createCartSuccess(data) {
	return {
    type: CART_CREATE_SUCCESS
    , data: data
  };
}

export function createLoadFail(err) {
	return {
		type: CART_CREATE_FAIL
		, err
	}
}


export function getCart({id}) {
  return (dispatch, getState) => {
    dispatch(getLoad());
    const { cart, auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    let data = {};

    if(access_token) {
      data = {
        method: 'get'
        , url: `${API_URL}/cart`
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    } else {
      data = {
        method: 'get'
        , url: `${API_URL}/cart/${id || cart.getIn(['Cart', 'id'])}`
      }
   }
   Axios(data)
    .then((res) => {
      dispatch(getCartSuccess(res.data));
    })
    .catch((res) => {
      dispatch(getCartFail(res.data))
    });
  }
}

export function getLoad() {
  return {
    type: CART_GET_LOAD
  }
}

export function getCartSuccess(data) {
  return {
    type: CART_GET_SUCCESS
    , data
  }
}

export function getCartFail(err) {
  return {
    type: CART_GET_FAIL
    , err
  }
}


export function pushCart(product) {
  return (dispatch, getState) => {
    dispatch(pushLoad());
    const { cart, auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    let data = access_token ? {
      method: 'post'
      , url: `${API_URL}/cart/line`
      , data: [product]
      , headers: {
        'Authorization': `Bearer ${access_token}`
      }
    } : {
      method: 'post'
      , url: `${API_URL}/cart/line/${cart.getIn(['Cart', 'id'])}`
      , data: [product]
    };
    Axios(data)
      .then((res) => {
        dispatch(pushCartSuccess(res.data));
        dispatch(notifActions.notifSend({message: `Đã thêm SP ${product.code} vào Cart!`, kind: 'success', dismissAfter: 3000}));
      })
      .catch((res) => {
        dispatch(pushCartFail(res.data));
        dispatch(notifActions.notifSend({message: `SP ${product.code} đã có trong Cart!`, kind: 'warning', dismissAfter: 3000}));
      });
  }
}

export function pushLoad() {
  return {
    type: CART_PUSH_LOAD
  }
}

export function pushCartSuccess(data) {
  return {
    type: CART_PUSH_SUCCESS
    , data
  }
}

export function pushCartFail(err) {
  return {
    type: CART_PUSH_FAIL
    , err
  }
}


export function destroyCart({id}) {
  return (dispatch, getState) => {
    dispatch(destroyLoad());
    const { cart, auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    let data = {};
    if(access_token) {
      data = {
        method: 'delete'
        , url: `${API_URL}/cart/line/${id}`
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    } else {
      data = {
        method: 'delete'
        , url: `${API_URL}/cart/line/${id}/${cart.getIn(['Cart', 'id'])}`
      }
   }
   Axios(data)
    .then((res) => {
      dispatch(destroySuccess(res.data));
    })
    .catch((res) => {
      dispatch(destroySuccess(res.data))
    });
  }
}

export function destroyLoad() {
  return {
    type: CART_DESTROY_LOAD
  }
}

export function destroySuccess(data) {
  return {
    type: CART_DESTROY_SUCCESS
    , data
  }
}

export function destroyFail(err) {
  return {
    type: CART_DESTROY_FAIL
    , err
  }
}


export function capnhatCart(cb, cbSuccess) {
  return (dispatch, getState) => {
    dispatch(capnhatLoad());
    const { cart, auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    let data = {};
    if(access_token) {
      data = {
        method: 'put'
        , url: `${API_URL}/cart/line`
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    } else {
      data = {
        method: 'put'
        , url: `${API_URL}/cart/line/${cart.getIn(['Cart', 'id'])}`
      }
   }
   Axios(data)
    .then((res) => {
      dispatch(capnhatCartSuccess(res.data));
      if(cbSuccess) {
        cbSuccess();
      }
    })
    .catch((res) => {
      dispatch(capnhatCartFail(res.data));
      if(cb) {
        cb();
      }
    });
  }
}

export function capnhatCartExport() {
  return (dispatch, getState) => {
    dispatch(capnhatLoad());
    const { cart, auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    let data = {};
    if(access_token) {
      data = {
        method: 'put'
        , url: `${API_URL}/cart/line`
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    } else {
      data = {
        method: 'put'
        , url: `${API_URL}/cart/line/${cart.getIn(['Cart', 'id'])}`
      }
    }
    return Axios(data)
      .then((res) => {
        dispatch(capnhatCartSuccess(res.data));
        return res;
      })
      .catch((res) => {
        dispatch(capnhatCartFail(res.data));
        throw res;
      });
  }
}

export function capnhatLoad() {
  return {
    type: CART_CAPNHAT_LOAD
  }
}

export function capnhatCartSuccess(data) {
  return {
    type: CART_CAPNHAT_SUCCESS
    , data
  }
}

export function capnhatCartFail(err) {
  return {
    type: CART_CAPNHAT_FAIL
    , err
  }
}


export function clearCart() {
  return {
    type: CLEAR_CART
  }
}


export function shippingInfoExport(data) {
  return (dispatch, getState) => {
    dispatch(shippingInfoLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    return Axios({
      method: 'put'
      , url: `${API_URL}/cart/checkout`
      , data: {shippingInfo: data}
      , headers: {
        'Authorization': `Bearer ${access_token}`
      }
    })
    .then((res) => {
      dispatch(shippingInfoSucess(res.data));
      return res;
    })
    .catch((res) => {
      dispatch(shippingInfoFail(res.data));
      throw res;
    });
  }
}

export function shippingInfoLoad() {
  return {
    type: SHIP_PING_INFO
  }
}

export function shippingInfoSucess(data) {
  return {
    type: SHIP_PING_INFO_SUCCESS
    , data
  }
}

export function shippingInfoFail(err) {
  return {
    type: SHIP_PING_INFO_FAIL
    , err
  }
}


/**
 * [paymentMethod description]
 * @param  {string} method [description]
 */
export function paymentMethod(method) {
  return (dispatch, getState) => {
    dispatch(paymentMethodLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    Axios({
      method: 'put'
      , url: `${API_URL}/cart/checkout`
      , data: {paymentMethod: method}
      , headers: {
        'Authorization': `Bearer ${access_token}`
      }
    })
    .then((res) => {
      dispatch(paymentMethodSucess(res.data));
    })
    .catch((res) => {
      dispatch(paymentMethodFail(res.data));
    });
  }
}

export function paymentMethodLoad() {
  return {
    type: PAYMENT_METHOD
  }
}

export function paymentMethodSucess(data) {
  return {
    type: PAYMENT_METHOD_SUCCESS
    , data
  }
}

export function paymentMethodFail(err) {
  return {
    type: PAYMENT_METHOD_FAIL
    , err
  }
}
