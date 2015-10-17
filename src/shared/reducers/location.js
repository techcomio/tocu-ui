'use strict';
import {
	CITY_LOAD
	, CITY_SUCCESS
	, CITY_FAIL
  , DISTRICT_LOAD
  , DISTRICT_SUCCESS
  , DISTRICT_FAIL
} from '../actions/actionsTypes';
import Cookies from 'cookies-js';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  cityLoad: false
  , districtLoad: false
	, city: List()
	, district: List()
	, cityErr: null
	, districtErr: null
});

export default function auth(state = initialState, action) {
  switch (action.type) {
	  case CITY_LOAD:
	    return state.merge({
	    	cityLoad: true
				, cityErr: null
				, city: List()
				, district: List([])
	    });
    case CITY_SUCCESS:
			return state.merge({
				cityLoad: false
				, cityErr: null
				, city: List(action.data)
			});
		case CITY_FAIL:
			return state.merge({
        cityLoad: false
				, cityErr: action.err
				, city: List()
			});
	  case DISTRICT_LOAD:
	    return state.merge({
	    	districtLoad: true
				, districtErr: null
				, district: List()
	    });
    case DISTRICT_SUCCESS:
			return state.merge({
				districtLoad: false
				, districtErr: null
				, district: List(action.data)
			});
		case DISTRICT_FAIL:
			return state.merge({
        districtLoad: false
				, districtErr: action.err
				, district: List()
			});
	  default:
	    return state;
  }
}
