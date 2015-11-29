'use strict';
import Axios from 'axios';
import {
  GET_PHISHIP
  , ORDER_LOAD
  , ORDER_SUCCESS
  , ORDER_FAIL
  , GET_FINALLY
  , GET_ORDER
  , GET_ORDER_ID
} from './actionsTypes';
import { API_URL } from '../../../config';


export function getPhiShip({province, district, weight}) {
  return {
    type: GET_PHISHIP
    , promise: Axios.get(`${API_URL}/ship`, {
        params: {
          province: province
          , district: district
          , weight: weight
        }
      })
  }
}


export function CreateOrderExport(data) {
  return (dispatch, getState) => {
    dispatch(orderLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);

    return Axios({
        method: 'post'
        , url: `${API_URL}/order`
        , data: data
        , headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then((res) => {
        dispatch(orderSuccess(res.data));
        return res;
      })
      .catch((res) => {
        dispatch(orderFail(res.data));
        throw res;
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
  return (dispatch, getState) => {
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    const datas = {...data, access_token };

    dispatch({
      type: GET_FINALLY
      , promise: Axios({
          method: 'get'
          , url: `${API_URL}/onepay/finally`
          , params: datas
        })
    });
  }
}


export function getOrder() {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
		await dispatch({
			type: GET_ORDER,
      promise: Axios.get(`${API_URL}/order`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
		});
  }
}


export function getOrderID({id}) {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
		await dispatch({
			type: GET_ORDER_ID,
      promise: Axios.get(`${API_URL}/order/${id}`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
		});
  }
}
