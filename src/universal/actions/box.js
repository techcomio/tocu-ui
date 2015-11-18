'use strict';
import Axios from 'axios';
import {
  BOX_COUNT
  , GET_BOX
  , GET_BOX_ID_REQUEST
  , GET_BOX_ID
  , GET_BOX_ID_FAIL
  , BOX_ID_PUSH_REQUEST
  , BOX_ID_PUSH
  , BOX_ID_PUSH_FAIL
  , GET_BOXID_INFO
} from './actionsTypes';
import { API_URL } from '../../../config';


export function getBox() {
  return {
    type: GET_BOX
    , promise: Axios.get(`${API_URL}/box`)
  }
}


export function getBoxIdInfo({id}) {
  return {
    type: GET_BOXID_INFO
    , promise: Axios.get(`${API_URL}/box/${id}`)
  }
}


export function getBoxId({id, skip, limit}) {
  return async (dispatch, getState) => {
    dispatch(getBoxIdLoad());
    await Axios.get(`${API_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
      .then((res) => {
        res.data.length < limit
          ? dispatch(getBoxIdSuccess(res.data, false, skip + limit))
          : dispatch(getBoxIdSuccess(res.data, true, skip + limit));
      })
      .catch((res) => {
        dispatch(getBoxIdFail(res.data, skip + limit));
      });
  }
}

export function getBoxIdLoad() {
  return {
    type: GET_BOX_ID_REQUEST
  }
}

export function getBoxIdSuccess(data, hasMore, skip) {
  return {
    type: GET_BOX_ID
    , data
    , hasMore
    , skip
  }
}

export function getBoxIdFail(err, skip) {
  return {
    type: GET_BOX_ID_FAIL
    , err
    , hasMore: false
    , skip
  }
}


export function getBoxIdPage({id, skip, limit}) {
  return (dispatch, getState) => {
    dispatch(getBoxIdPageLoad());
    Axios.get(`${API_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
      .then((res) => {
        res.data.length < limit
          ? dispatch(getBoxIdPageSuccess(res.data, false, skip + limit))
          : dispatch(getBoxIdPageSuccess(res.data, true, skip + limit));
      })
      .catch((res) => {
        dispatch(getBoxIdPageFail(res.data, skip + limit));
      });
  }
}

export function getBoxIdPageLoad() {
  return {
    type: BOX_ID_PUSH_REQUEST
  }
}

export function getBoxIdPageSuccess(data, hasMore, skip) {
  return {
    type: BOX_ID_PUSH
    , data
    , hasMore
    , skip
  }
}

export function getBoxIdPageFail(err, skip) {
  return {
    type: BOX_ID_PUSH_FAIL
    , err
    , skip
  }
}


export function count() {
  return {
    type: BOX_COUNT
    , promise: Axios.get(`${API_URL}/box/count`)
  }
}
