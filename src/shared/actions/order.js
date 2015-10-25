'use strict';
import Axios from 'axios';
import {
  PHISHIP_LOAD
  , PHISHIP_SUCCESS
  , PHISHIP_FAIL
  , ORDER_LOAD
  , ORDER_SUCCESS
  , ORDER_FAIL
  , FINALLY_LOAD
  , FINALLY_SUCCESS
  , FINALLY_FAIL
} from './actionsTypes';
import { API_URL } from '../../../config';


export function getPhiShip({province, district, weight}) {
  return async (dispatch, getState) => {
    dispatch(phiShipLoad())
    await Axios.get(`${API_URL}/ship`, {
        params: {
          province: province
          , district: district
          , weight: weight
        }
      })
      .then((res) => {
        dispatch(phiShipSuccess(res.data));
      })
      .catch((res) => {
        dispatch(phiShipFail(res.data));
      });
  }
}

export function phiShipLoad() {
  return {
    type: PHISHIP_LOAD
  }
}

export function phiShipSuccess(data) {
	return {
    type: PHISHIP_SUCCESS
    , data
  };
}

export function phiShipFail(err) {
	return {
		type: PHISHIP_FAIL
		, err
	}
}


export function CreateOrder(data, cb, cbErr) {
  return async (dispatch, getState) => {
    dispatch(orderLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);

    await Axios({
        method: 'post'
        , url: `${API_URL}/order`
        , data: data
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then((res) => {
        dispatch(orderSuccess(res.data));
        if(cb) cb(res.data);
      })
      .catch((res) => {
        dispatch(orderFail(res.data));
        if(cbErr) cbErr();
      });
  }
}

export function orderLoad() {
  return {
    type: ORDER_LOAD
  }
}

export function orderSuccess(data) {
  return {
    type: ORDER_SUCCESS
    , data
  }
}

export function orderFail(err) {
  return {
    type: ORDER_FAIL
    , err
  }
}


export function GetFinally(data) {
  return async (dispatch, getState) => {
    dispatch(finallyLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    const datas = {...data, access_token }

    await Axios({
        method: 'get'
        , url: `${API_URL}/onepay/finally`
        , params: datas
      })
      .then((res) => {
        dispatch(finallySuccess(res.data));
      })
      .catch((res) => {
        dispatch(finallyFail(res.data));
      });
  }
}

export function finallyLoad() {
  return {
    type: FINALLY_LOAD
  }
}

export function finallySuccess(data) {
  console.log('finallySuccess', data);
  return {
    type: FINALLY_SUCCESS
    , data
  }
}

export function finallyFail(err) {
  return {
    type: FINALLY_FAIL
    , err
  }
}
