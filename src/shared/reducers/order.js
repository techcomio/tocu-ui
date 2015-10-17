import {
  PHISHIP_LOAD
  , PHISHIP_SUCCESS
  , PHISHIP_FAIL
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  shipLoad: false
	, phiship: Map()
	, shipErr: null
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
  default:
    return state;
  }
}
