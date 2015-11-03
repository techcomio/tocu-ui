import {
  GET_PHISHIP_REQUEST
  , GET_PHISHIP
  , GET_PHISHIP_FAIL
  , GET_FINALLY_REQUEST
  , GET_FINALLY
  , GET_FINALLY_FAIL
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  shipLoad: false
  , finallyLoad: false
	, phiship: Map()
	, finally: Map()
	, shipErr: null
	, finallyErr: null
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
  default:
    return state;
  }
}
