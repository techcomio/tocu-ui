'use strict';
import Axios from 'axios';
import {
  PHISHIP_LOAD
  , PHISHIP_SUCCESS
  , PHISHIP_FAIL
} from './actionsTypes';
import { API_URL } from '../../../config';


export function getPhiShip({city, district, weight}) {
  return async (dispatch, getState) => {
    dispatch(phiShipLoad())
    await Axios.get(`${API_URL}/ship`, {
        params: {
          provinceName: city
          , districtName: district
          , weight: weight
        }
      })
      .then((res) => {
        dispatch(phiShipSuccess(res.data));
      })
      .catch((res) => {
        dispatch(faiphiShipFaill(res.data));
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
