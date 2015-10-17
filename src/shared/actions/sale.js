'use strict';
import Axios from 'axios';
import {
  SALE_GET_LOAD
  , SALE_GET_SUCCESS
  , SALE_GET_FAIL
} from './actionsTypes';
import { API_URL } from '../../../config';


export function get() {
  return async (dispatch, getState) => {
    dispatch(load())
    await Axios.get(`${API_URL}/product`, {
        params: {
          filters: `salePrice!=null`,
          limit: 5
        }
      })
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((res) => {
        dispatch(fail(res.data));
      });
  }
}

export function load() {
  return {
    type: SALE_GET_LOAD
  }
}

export function success(data) {
	return {
    type: SALE_GET_SUCCESS
    , data
  };
}

export function fail(err) {
	return {
		type: SALE_GET_FAIL
		, err
	}
}
