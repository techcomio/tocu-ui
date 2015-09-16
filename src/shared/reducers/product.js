import {
  PRODUCT_ID_LOAD
  , PRODUCT_ID_LOAD_SUCCESS
  , PRODUCT_ID_LOAD_FAIL
  , PRODUCT_COUNT
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  productIdLoad: false
	, productId: Map()
	, productIdErr: null
	, productCount: 0
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case PRODUCT_ID_LOAD:
		return state.merge({
      productIdLoad: true
    	, productId: Map()
    	, productIdErr: null
		});
  case PRODUCT_ID_LOAD_SUCCESS:
		return state.merge({
      productIdLoad: false
    	, productId: Immutable.fromJS(action.data)
    	, productIdErr: null
		});
  case PRODUCT_ID_LOAD_FAIL:
		return state.merge({
      productIdLoad: false
    	, productId: Map()
    	, productIdErr: action.err
		});
  case PRODUCT_COUNT:
		return state.merge({
      productCount: action.data
		});
  default:
    return state;
  }
}
