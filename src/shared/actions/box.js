'use strict';
import Axios from 'axios';
import {
  BOX_LOAD
  , BOX_LOAD_SUCCESS
  , BOX_LOAD_FAIL
  , BOX_ID_LOAD
  , BOX_ID_LOAD_SUCCESS
  , BOX_ID_LOAD_FAIL
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


export function getBoxId({id}) {
  return async (dispatch, getState) => {
    await Axios.get(`${API_URL}/box/${id}`)
      .then((res) => {
        dispatch(loadIdSuccess(res.data));
      })
      .catch((res) => {
        dispatch(loadIdFail(res.data));
      });
  }
}

export function loadId() {
  return {
    type: BOX_ID_LOAD
  }
}

export function loadIdSuccess(data) {
  return {
    type: BOX_ID_LOAD_SUCCESS
    , data
  }
}

export function loadIdFail(err) {
	return {
		type: BOX_ID_LOAD_FAIL
		, err
	}
}
