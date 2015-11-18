'use strict';
import Axios from 'axios';
import {
  PRODUCT_COUNT
  , PRODUCT_LOAD
  , PRODUCT_LOAD_SUCCESS
  , PRODUCT_LOAD_FAIL
  , PRODUCT_PUSH
  , PRODUCT_PUSH_SUCCESS
  , PRODUCT_PUSH_FAIL
  , GET_PRODUCT_ID
} from './actionsTypes';
import { API_URL } from '../../../config';


export function getProductID({id}) {
  return {
    type: GET_PRODUCT_ID
    , promise: Axios.get(`${API_URL}/product/${id}`)
  }
}


export function count() {
  return {
    type: PRODUCT_COUNT
    , promise: Axios.get(`${API_URL}/product/count`)
  }
}


export function getProduct({skip, limit}) {
  return async (dispatch, getState) => {
    dispatch(getProductLoad());
    await Axios.get(`${API_URL}/product/?skip=${skip}&limit=${limit}`)
      .then((res) => {
        setTimeout(function() {
          res.data.length < limit
            ? dispatch(getProductSuccess(res.data, false, skip + limit))
            : dispatch(getProductSuccess(res.data, true, skip + limit));
        }, 500);
      })
      .catch((res) => {
        setTimeout(function() {
          dispatch(getProductFail(res.data, skip + limit));
        }, 500);
      });
  }
}

export function getProductLoad() {
  return {
    type: PRODUCT_LOAD
  }
}

export function getProductSuccess(data, hasMore, skip) {
  return {
    type: PRODUCT_LOAD_SUCCESS
    , data
    , hasMore
    , skip
  }
}

export function getProductFail(err, skip) {
  return {
    type: PRODUCT_LOAD_FAIL
    , err
    , hasMore: false
    , skip
  }
}


export function getProductPage({skip, limit}) {
  return (dispatch, getState) => {
    dispatch(getProductPageLoad());
    Axios.get(`${API_URL}/product?skip=${skip}&limit=${limit}`)
      .then((res) => {
        res.data.length < limit
          ? dispatch(getProductPageSuccess(res.data, false, skip + limit))
          : dispatch(getProductPageSuccess(res.data, true, skip + limit));
      })
      .catch((res) => {
        dispatch(getProductPageFail(res.data, skip + limit));
      });
  }
}

export function getProductPageLoad() {
  return {
    type: PRODUCT_PUSH
  }
}

export function getProductPageSuccess(data, hasMore, skip) {
  return {
    type: PRODUCT_PUSH_SUCCESS
    , data
    , hasMore
    , skip
  }
}

export function getProductPageFail(err, skip) {
  return {
    type: PRODUCT_PUSH_FAIL
    , err
    , skip
  }
}
