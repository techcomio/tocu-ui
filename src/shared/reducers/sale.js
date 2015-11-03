import {
  GET_SALE_REQUEST
  , GET_SALE
  , GET_SALE_FAIL
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  saleLoad: false
	, sales: List()
	, saleErr: null
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case GET_SALE_REQUEST:
		return state.merge({
      saleLoad: true
    	, sales: List()
    	, saleErr: null
		});
  case GET_SALE:
		return state.merge({
      saleLoad: false
    	, sales: Immutable.fromJS(action.data)
    	, saleErr: null
		});
  case GET_SALE_FAIL:
		return state.merge({
      saleLoad: false
    	, sales: List()
    	, saleErr: action.err
		});
  default:
    return state;
  }
}
