import {
  GET_PHISHIP_REQUEST
  , GET_PHISHIP
  , GET_PHISHIP_FAIL
  , GET_FINALLY_REQUEST
  , GET_FINALLY
  , GET_FINALLY_FAIL
  , GET_ORDER_REQUEST
  , GET_ORDER
  , GET_ORDER_FAIL
  , GET_ORDER_ID_REQUEST
  , GET_ORDER_ID
  , GET_ORDER_ID_FAIL
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  shipLoad: false
  , finallyLoad: false
  , orderRequest: false
  , orderIDRequest: false
	, phiship: Map()
	, finally: Map()
	, order: List()
	, orderID: Map()
	, shipErr: null
	, finallyErr: null
	, orderErr: null
	, orderIDErr: null
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case GET_PHISHIP_REQUEST:
		return state.merge({
      shipLoad: true
    	, phiship: Map()
    	, shipErr: null
		});
  case GET_PHISHIP:
		return state.merge({
      shipLoad: false
    	, phiship: Immutable.fromJS(action.data)
    	, shipErr: null
		});
  case GET_PHISHIP_FAIL:
		return state.merge({
      shipLoad: false
    	, phiship: Map()
    	, shipErr: action.err
		});
  case GET_FINALLY_REQUEST:
		return state.merge({
      finallyLoad: true
    	, finally: Map()
    	, finallyErr: null
		});
  case GET_FINALLY:
		return state.merge({
      finallyLoad: false
    	, finally: Map(action.data)
    	, finallyErr: null
		});
  case GET_FINALLY_FAIL:
		return state.merge({
      finallyLoad: false
    	, finally: Map()
    	, finallyErr: action.err
		});
  case GET_ORDER_REQUEST:
    return state.merge({
      orderRequest: true
    	, order: List()
    	, orderErr: null
    });
  case GET_ORDER:
    return state.merge({
      orderRequest: false
    	, order: Immutable.fromJS(action.data)
    	, orderErr: null
    });
  case GET_ORDER_FAIL:
    return state.merge({
      orderRequest: false
    	, order: List()
    	, orderErr: action.err
    });
  case GET_ORDER_ID_REQUEST:
    return state.merge({
      orderIDRequest: true
    	, orderID: Map()
    	, orderIDErr: null
    });
  case GET_ORDER_ID:
    return state.merge({
      orderIDRequest: false
    	, orderID: Immutable.fromJS(action.data)
    	, orderIDErr: null
    });
  case GET_ORDER_ID_FAIL:
    return state.merge({
      orderIDRequest: false
    	, orderID: Map()
    	, orderIDErr: action.err
    });
  default:
    return state;
  }
}
