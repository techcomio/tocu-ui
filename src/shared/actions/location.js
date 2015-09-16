'use strict';
import Axios from 'axios';
import { API_URL } from '../../../config';
import {
  CITY_LOAD
  , CITY_SUCCESS
  , CITY_FAIL
  , DISTRICT_LOAD
  , DISTRICT_SUCCESS
  , DISTRICT_FAIL
} from './actionsTypes';

export function getCity() {
  return async (dispatch, getState) => {
    dispatch(cityLoad());
    await Axios.get(`${API_URL}/city`)
      .then((res) => {
        dispatch(citySuccess(res.data));
      })
      .catch((res) => {
        dispatch(cityFail(res.data));
      });
  }
}

export function cityLoad() {
  return {
    type: CITY_LOAD
  }
}

export function citySuccess(data) {
  return {
    type: CITY_SUCCESS
    , data
  }
}

export function cityFail(err) {
  return {
    type: CITY_FAIL
    , err
  }
}


export function getDistrict({city}) {
  return async (dispatch, getState) => {
    dispatch(districtLoad());
    await Axios.post(`${API_URL}/district`, {
      city
    })
    .then((res) => {
      dispatch(districtSuccess(res.data));
    })
    .catch((res) => {
      dispatch(districtFail(res.data));
    });
  }
}

export function districtLoad() {
  return {
    type: DISTRICT_LOAD
  }
}

export function districtSuccess(data) {
  return {
    type: DISTRICT_SUCCESS
    , data
  }
}

export function districtFail(err) {
  return {
    type: DISTRICT_FAIL
    , err
  }
}
