'use strict';
import {
  BOX_REQUIRE_LOGIN_SHOW
  , BOX_REQUIRE_LOGIN_HIDE
  , BOX_REQUIRE_VERIFY_SHOW
  , BOX_REQUIRE_VERIFY_HIDE
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  loginShow: false
  , verifyShow: false
});

export default function auth(state = initialState, action) {
  switch (action.type) {
	  case BOX_REQUIRE_LOGIN_SHOW:
	    return state.merge({
	    	loginShow: true
				, verifyShow: false
	    });
	  case BOX_REQUIRE_LOGIN_HIDE:
	    return state.merge({
	    	loginShow: false
				, verifyShow: false
	    });
	  case BOX_REQUIRE_VERIFY_SHOW:
	    return state.merge({
	    	loginShow: false
				, verifyShow: true
	    });
	  case BOX_REQUIRE_VERIFY_HIDE:
	    return state.merge({
	    	loginShow: false
				, verifyShow: false
	    });
	  default:
	    return state;
  }
}
