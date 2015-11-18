import {
  PRODUCT_COUNT
  , PRODUCT_LOAD
  , PRODUCT_LOAD_SUCCESS
  , PRODUCT_LOAD_FAIL
  , PRODUCT_PUSH
  , PRODUCT_PUSH_SUCCESS
  , PRODUCT_PUSH_FAIL
  , GET_PRODUCT_ID_REQUEST
  , GET_PRODUCT_ID
  , GET_PRODUCT_ID_FAIL
} from '../actions/actionsTypes';
import { ProductId } from '../records/Records';
import Immutable, { Map, List } from 'immutable';


const initialState = new Immutable.fromJS({
  productLoad: false
  , productIdLoad: false
	, product: List()
	, productId: Map({images: List()})
  , pagination: Map({hasMore: false, skip: 0})
	, productErr: null
	, productIdErr: null
	, productCount: 0
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case PRODUCT_LOAD:
    return state.merge({
      productLoad: true
      , product: List()
      , pagination: Map({hasMore: false, skip: 0})
      , productErr: null
    });
  case PRODUCT_LOAD_SUCCESS:
    return state.merge({
      productLoad: false
      , product: Immutable.fromJS(action.data)
      , pagination: Map({hasMore: action.hasMore, skip: action.skip})
      , productErr: null
    });
  case PRODUCT_LOAD_FAIL:
    return state.merge({
      productLoad: false
      , product: List()
      , pagination: Map({hasMore: false, skip: action.skip})
      , productErr: action.err
    });
  case PRODUCT_PUSH:
    return state.merge({
      productLoad: true
      , pagination: Map({hasMore: false, skip: 0})
      , productErr: null
    });
  case PRODUCT_PUSH_SUCCESS:
    return state.merge({
      productLoad: false
      , product: state.get('product').toJS().concat(action.data)
      , pagination: Map({hasMore: action.hasMore, skip: action.skip})
      , productErr: null
    });
  case PRODUCT_PUSH_FAIL:
    return state.merge({
      productLoad: false
      , product: List()
      , pagination: Map({hasMore: false, skip: action.skip})
      , productErr: action.err
    });
  case GET_PRODUCT_ID_REQUEST:
		return state.merge({
      productIdLoad: true
    	, productId: Map()
    	, productIdErr: null
		});
  case GET_PRODUCT_ID:
		return state.merge({
      productIdLoad: false
    	, productId: Immutable.fromJS(action.data)
    	, productIdErr: null
		});
  case GET_PRODUCT_ID_FAIL:
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
