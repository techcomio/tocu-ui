'use strict';
import Axios from 'axios';
import { API_URL } from '../../../config';
import {
  GET_CITY
  , GET_DISTRICT
} from './actionsTypes';


export function getCity() {
  return {
    type: GET_CITY
    , promise: Axios.get(`${API_URL}/province`)
  }
}


export function getDistrict({province}) {
  return {
    type: GET_DISTRICT
    , promise: Axios.get(`${API_URL}/district?province=${province}`)
  }
}
