'use strict';
import Axios from 'axios';
import {
  BOX_LOAD
  , BOX_LOAD_SUCCESS
  , BOX_LOAD_FAIL
  , BOX_ID_LOAD
  , BOX_ID_LOAD_SUCCESS
  , BOX_ID_LOAD_FAIL
  , BOX_ID_PUSH_LOAD
  , BOX_ID_PUSH_SUCCESS
  , BOX_ID_PUSH_FAIL
  , BOX_ID_LOAD_INFO
  , BOX_ID_LOAD_INFO_SUCCESS
  , BOX_ID_LOAD_INFO_FAIL
} from './actionsTypes';
import { API_URL } from '../../../config';


export function getBox() {
  return async (dispatch, getState) => {
    dispatch(load())
    await Axios.get(`${API_URL}/box`)
      .then((res) => {
        dispatch(loadSuccess(res.data));
      })
      .catch((res) => {
        dispatch(loadFail(res.data));
      });
  }
}

export function load() {
  return {
    type: BOX_LOAD
  }
}

export function loadSuccess(data) {
	return {
    type: BOX_LOAD_SUCCESS
    , data
  };
}

export function loadFail(err) {
	return {
		type: BOX_LOAD_FAIL
		, err
	}
}


export function getBoxIdInfo({id}) {
  return async (dispatch, getState) => {
    await Axios.get(`${API_URL}/box/${id}`)
      .then((res) => {
        dispatch(loadIdInfoSuccess(res.data));
      })
      .catch((res) => {
        dispatch(loadIdInfoFail(res.data));
      });
  }
}

export function loadId() {
  return {
    type: BOX_ID_LOAD_INFO
  }
}

export function loadIdInfoSuccess(data) {
  return {
    type: BOX_ID_LOAD_INFO_SUCCESS
    , data
  }
}

export function loadIdInfoFail(err) {
	return {
		type: BOX_ID_LOAD_INFO_FAIL
		, err
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
    type: BOX_ID_LOAD
  }
}

export function getBoxIdSuccess(data, hasMore, skip) {
  return {
    type: BOX_ID_LOAD_SUCCESS
    , data
    , hasMore
    , skip
  }
}

export function getBoxIdFail(err, skip) {
  return {
    type: BOX_ID_LOAD_FAIL
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
    type: BOX_ID_PUSH_LOAD
  }
}

export function getBoxIdPageSuccess(data, hasMore, skip) {
  return {
    type: BOX_ID_PUSH_SUCCESS
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
