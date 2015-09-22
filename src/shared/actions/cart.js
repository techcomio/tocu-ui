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
  , ADD_CART_ID
} from './actionsTypes';
import { API_URL } from '../../../config';
import { verifyShow } from './boxRequireAuth';
import { notifActions } from 're-notif';


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
        if(cartId) {
          dispatch(addCartId(cartId));
        }
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
        dispatch(getCart());
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
        dispatch(getCart());
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
    , cartId: data.cartId
  };
}

export function createLoadFail(err) {
	return {
		type: CART_CREATE_FAIL
		, err
	}
}


export function getCart() {
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
        , url: `${API_URL}/cart/${cart.get('cartId')}`
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
    let data = {};
    if(access_token) {
      data = {
        method: 'post'
        , url: `${API_URL}/cart/line`
        , data: [product]
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    } else {
      data = {
        method: 'post'
        , url: `${API_URL}/cart/line/${cart.get('cartId')}`
        , data: [product]
      }
   }
   Axios(data)
    .then((res) => {
      dispatch(pushCartSuccess(res.data));
      dispatch(notifActions.notifSend({message: `Đã thêm SP ${product.code} vào Card!`, kind: 'success', dismissAfter: 2000}));
    })
    .catch((res) => {
      dispatch(pushCartFail(res.data));
      dispatch(notifActions.notifSend({message: `SP ${product.code} đã có trong Card!`, kind: 'warning', dismissAfter: 2000}));
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
        , url: `${API_URL}/cart/line/${id}/${cart.get('cartId')}`
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


export function capnhatCart() {
  return (dispatch, getState) => {
    dispatch(capnhatLoad());
    const { cart, auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    let data = {};
    if(access_token) {
      data = {
        method: 'put'
        , url: `${API_URL}/cart`
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    } else {
      data = {
        method: 'put'
        , url: `${API_URL}/cart/line/${cart.get('cartId')}`
      }
   }
   Axios(data)
    .then((res) => {
      dispatch(capnhatCartSuccess(res.data));
    })
    .catch((res) => {
      dispatch(capnhatCartFail(res.data))
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

export function addCartId(id) {
  return {
    type: ADD_CART_ID
    , id
  }
}
