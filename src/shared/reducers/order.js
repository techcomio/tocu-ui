import {
  PHISHIP_LOAD
  , PHISHIP_SUCCESS
  , PHISHIP_FAIL
  , FINALLY_LOAD
  , FINALLY_SUCCESS
  , FINALLY_FAIL
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
  case PHISHIP_LOAD:
		return state.merge({
      shipLoad: true
    	, phiship: Map()
    	, shipErr: null
		});
  case PHISHIP_SUCCESS:
		return state.merge({
      shipLoad: false
    	, phiship: Immutable.fromJS(action.data)
    	, shipErr: null
		});
  case PHISHIP_FAIL:
		return state.merge({
      shipLoad: false
    	, phiship: Map()
    	, shipErr: action.err
		});
  case FINALLY_LOAD:
		return state.merge({
      finallyLoad: true
    	, finally: Map()
    	, finallyErr: null
		});
  case FINALLY_SUCCESS:
		return state.merge({
      finallyLoad: false
    	, finally: Map(action.data)
    	, finallyErr: null
		});
  case FINALLY_FAIL:
		return state.merge({
      finallyLoad: false
    	, finally: Map()
    	, finallyErr: action.err
		});
  default:
    return state;
  }
}
