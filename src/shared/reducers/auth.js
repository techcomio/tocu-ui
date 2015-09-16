'use strict';
import {
	LOAD_AUTH
	, LOGIN_LOAD
	, LOGIN_SUCCESS
	, LOGIN_FAIL
  , CREATE_AUTH_LOAD
  , CREATE_AUTH_SUCCESS
  , CREATE_AUTH_FAIL
  , LOGOUT_LOAD
  , LOGOUT_SUCCESS
  , LOGOUT_FAIL
	, GET_CODE_LOAD
	, GET_CODE_SUCCESS
	, GET_CODE_FAIL
	, VERIFY_LOAD
	, VERIFY_SUCCESS
	, VERIFY_FAIL
} from '../actions/actionsTypes';
import Cookies from 'cookies-js';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  createLoad: false
  , loginLoad: false
  , logoutLoad: false
	, getcodeLoad: false
	, verifyLoad: false
	, user: Map({})
	, createErr: null
	, loginErr: null
	, logoutErr: null
	, getcodeErr: null
	, verifyErr: null
});

export default function auth(state = initialState, action) {
  switch (action.type) {
		case LOAD_AUTH:
			return state.merge({
				user: action.data
	    });
		case CREATE_AUTH_LOAD:
			return state.merge({
				createLoad: true
				, createErr: null
				, user: Map({})
			});
		case CREATE_AUTH_SUCCESS:
			Cookies.set('access_token'
							, action.data.access_token
							, {expires: action.data.expires_in
						});
			Cookies.expire('cart'); //  Will expire the cookie with a path of '/'
			return state.merge({
				createLoad: false
				, createErr: null
				, user: Map(action.data)
			});
		case CREATE_AUTH_FAIL:
			return state.merge({
				createLoad: false
				, createErr: action.err
				, user: Map({})
			});
	  case LOGIN_LOAD:
	    return state.merge({
	    	loginLoad: true
				, loginErr: null
				, user: Map({})
	    });
	  case LOGIN_SUCCESS:
			Cookies.set('access_token'
							, action.data.access_token
							, {expires: action.data.expires_in
						});
			Cookies.expire('cart'); //  Will expire the cookie with a path of '/'
	    return state.merge({
	    	loginLoad: false
				, loginErr: null
				, user: action.data
	    });
	  case LOGIN_FAIL:
	    return state.merge({
	    	loginLoad: false
	    	, loginErr: action.err
				, user: Map({})
			});
	  case LOGOUT_LOAD:
	    return state.merge({
	    	logoutLoad: true
				, logoutErr: null
	    });
	  case LOGOUT_SUCCESS:
			Cookies.expire('access_token'); //  Will expire the cookie with a path of '/'
	    return state.merge({
	    	logoutLoad: false
				, logoutErr: null
				, user: Map({})
	    });
	  case LOGOUT_FAIL:
	    return state.merge({
	    	logoutLoad: false
	    	, logoutErr: action.err
				, user: Map({})
	    });
		case GET_CODE_LOAD:
			return state.merge({
				getcodeLoad: true
				, getcodeErr: null
				, verifyErr: null
			});
		case GET_CODE_SUCCESS:
			return state.merge({
				getcodeLoad: false
				, getcodeErr: null
			});
		case GET_CODE_FAIL:
			return state.merge({
				getcodeLoad: false
				, getcodeErr: action.err
			});
		case VERIFY_LOAD:
			return state.merge({
				verifyLoad: true
				, verifyErr: null
				, getcodeErr: null
			});
		case VERIFY_SUCCESS:
			return state.merge({
				verifyLoad: false
				, verifyErr: null
				, user: state.get('user').update('isVerifyMobilePhone', val => true)
			});
		case VERIFY_FAIL:
			return state.merge({
				verifyLoad: false
				, verifyErr: action.err
			});
	  default:
	    return state;
  }
}
