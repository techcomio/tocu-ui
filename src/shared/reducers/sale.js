import {
  SALE_GET_LOAD
  , SALE_GET_SUCCESS
  , SALE_GET_FAIL
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  saleLoad: false
	, sales: List()
	, saleErr: null
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case SALE_GET_LOAD:
		return state.merge({
      saleLoad: true
    	, sales: List()
    	, saleErr: null
		});
  case SALE_GET_SUCCESS:
		return state.merge({
      saleLoad: false
    	, sales: Immutable.fromJS(action.data)
    	, saleErr: null
		});
  case SALE_GET_FAIL:
		return state.merge({
      saleLoad: false
    	, sales: List()
    	, saleErr: action.err
		});
  default:
    return state;
  }
}
