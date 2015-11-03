'use strict';
import {
	GET_CITY_REQUEST
	, GET_CITY
	, GET_CITY_FAIL
  , GET_DISTRICT_REQUEST
  , GET_DISTRICT
  , GET_DISTRICT_FAIL
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
	  case GET_CITY_REQUEST:
	    return state.merge({
	    	cityLoad: true
				, cityErr: null
				, city: List()
				, district: List([])
	    });
    case GET_CITY:
			return state.merge({
				cityLoad: false
				, cityErr: null
				, city: List(action.data)
			});
		case GET_CITY_FAIL:
			return state.merge({
        cityLoad: false
				, cityErr: action.err
				, city: List()
			});
	  case GET_DISTRICT_REQUEST:
	    return state.merge({
	    	districtLoad: true
				, districtErr: null
				, district: List()
	    });
    case GET_DISTRICT:
			return state.merge({
				districtLoad: false
				, districtErr: null
				, district: List(action.data)
			});
		case GET_DISTRICT_FAIL:
			return state.merge({
        districtLoad: false
				, districtErr: action.err
				, district: List()
			});
	  default:
	    return state;
  }
}
