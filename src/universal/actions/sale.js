'use strict';
import Axios from 'axios';
import {
  GET_SALE
} from './actionsTypes';
import { API_URL } from '../../../config';


export function get() {
  return {
    type: GET_SALE
    , promise: Axios.get(`${API_URL}/product`, {
      params: {
        filters: `salePrice!=null;status==available`,
        limit: 5
      }
    })
  }
}
