'use strict';
import Axios from 'axios';
import {
  BOX_REQUIRE_LOGIN_SHOW
  , BOX_REQUIRE_LOGIN_HIDE
  , BOX_REQUIRE_VERIFY_SHOW
  , BOX_REQUIRE_VERIFY_HIDE
} from './actionsTypes';

export function loginShow() {
  return {
    type: BOX_REQUIRE_LOGIN_SHOW
  }
}

export function loginHide() {
  return {
    type: BOX_REQUIRE_LOGIN_HIDE
  }
}

export function verifyShow() {
  return {
    type: BOX_REQUIRE_VERIFY_SHOW
  }
}

export function verifyHide() {
  return {
    type: BOX_REQUIRE_VERIFY_HIDE
  }
}
