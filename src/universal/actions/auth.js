'use strict';
import Axios from 'axios';
import { API_URL } from '../../../config';
import {
  LOAD_AUTH
  , LOGIN_LOAD
  , LOGIN_SUCCESS
  , LOGIN_FAIL
  , LOGOUT
  , CREATE_AUTH_LOAD
  , CREATE_AUTH_SUCCESS
  , CREATE_AUTH_FAIL
  , GET_CODE
  , VERIFY_LOAD
  , VERIFY_SUCCESS
  , VERIFY_FAIL
} from './actionsTypes';
import { getCart, clearCart } from './cart';


export function loadAuth({token}) {
  return {
    type: LOAD_AUTH
    , promise: Axios.get(`${API_URL}/user/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
  }
}


export function createLoad() {
  return {
    type: CREATE_AUTH_LOAD
  }
}

export function createAuthSuccess(data) {
  return {
    type: CREATE_AUTH_SUCCESS
    , data
  }
}

export function createAuthFail(err) {
  return {
    type: CREATE_AUTH_FAIL
    , err
  }
}


export function logInLoad() {
  return {
    type: LOGIN_LOAD
  }
}

export function logInSuccess(data) {
  return {
    type: LOGIN_SUCCESS
    , data
  }
}

export function logInFail(err) {
  return {
    type: LOGIN_FAIL
    , err
  }
}


export function logOut() {
  return (dispatch, getState) => {
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    dispatch({
      type: LOGOUT
      , promise: Axios.get(`${API_URL}/token/expire`, {
          headers: { 'Authorization': `Bearer ${access_token}` }
        })
    });
    dispatch(clearCart());
  }
}


export function getCode() {
  return (dispatch, getState) => {
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    dispatch({
      type: GET_CODE
      , promise: Axios.get(`${API_URL}/user/verify`, {
          headers: { 'Authorization': `Bearer ${access_token}` }
        })
    })
  }
}


export function verifyLoad() {
  return {
    type: VERIFY_LOAD
  }
}

export function verifySuccess(data) {
  return {
    type: VERIFY_SUCCESS
    , data
  }
}

export function verifyFail(err) {
  return {
    type: VERIFY_FAIL
    , err
  }
}
