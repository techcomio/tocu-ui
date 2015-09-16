'use strict';
import Axios from 'axios';
import {
  PRODUCT_ID_LOAD
  , PRODUCT_ID_LOAD_SUCCESS
  , PRODUCT_ID_LOAD_FAIL
  , PRODUCT_COUNT
} from './actionsTypes';
import { API_URL } from '../../../config';


export function getProductID({id}) {
  return async (dispatch, getState) => {
    dispatch(productIDLoad())
    await Axios.get(`${API_URL}/product/${id}`)
      .then((res) => {
        setTimeout(function() {
          dispatch(productIdLoadSuccess(res.data));
        });
      })
      .catch((res) => {
        dispatch(productIdLoadFail(res.data));
      });
  }
}

export function productIDLoad() {
  return {
    type: PRODUCT_ID_LOAD
  }
}

export function productIdLoadSuccess(data) {
	return {
    type: PRODUCT_ID_LOAD_SUCCESS
    , data
  };
}

export function productIdLoadFail(err) {
	return {
		type: PRODUCT_ID_LOAD_FAIL
		, err
	}
}

export function count() {
  return async (dispatch, getState) => {
    await Axios.get(`${API_URL}/product/count`)
      .then((res) => {
        setTimeout(function() {
          dispatch(countSuccess(res.data));
        });
      })
      .catch((res) => {});
  }
}

export function countSuccess( data) {
  return {
    type: PRODUCT_COUNT
    , data
  }
}
