'use strict';
import Axios from 'axios';
import { API_URL } from '../../../config';
import {
  LOAD_AUTH
  , LOGIN_LOAD
  , LOGIN_SUCCESS
  , LOGIN_FAIL
  , LOGOUT_LOAD
  , LOGOUT_SUCCESS
  , LOGOUT_FAIL
  , CREATE_AUTH_LOAD
  , CREATE_AUTH_SUCCESS
  , CREATE_AUTH_FAIL
  , GET_CODE_LOAD
  , GET_CODE_SUCCESS
  , GET_CODE_FAIL
  , VERIFY_LOAD
  , VERIFY_SUCCESS
  , VERIFY_FAIL
} from './actionsTypes';
import { getCart, clearCart } from './cart';


export function loadAuth({token}) {
  return async (dispatch) => {
    await Axios.get(`${API_URL}/user/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then((res) => {
        dispatch({type: LOAD_AUTH, data: res.data});
      }).catch(() => {});
  }
}


export function createAuth({name, password, mobilePhone, city, district}, cb) {
  return async (dispatch, getState) => {
    dispatch(createLoad());
    await Axios.post(`${API_URL}/user`, {
      name
      , password
      , mobilePhone
      , city
      , district
    })
    .then((res) => {
      dispatch(createAuthSuccess(res.data));
      if(cb) {
        cb();
      }
    })
    .catch((res) => {
      dispatch(createAuthFail(res.data));
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


export function logIn({mobilePhone, password, rememberme}, cb) {
  return async (dispatch, getState) => {
    dispatch(logInLoad());
    const { cart } = getState();

    await Axios.post(`${API_URL}/token`, {
        mobilePhone
        , password
        , rememberme
        , cartId: cart.get('cartId')
      })
      .then((res) => {
        dispatch(logInSuccess(res.data));
        cb();
        dispatch(getCart());
      })
      .catch((res) => {
        dispatch(logInFail(res.data));
      });
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
    dispatch(logOutLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);

    Axios.get(`${API_URL}/token/expire`, {
        headers: { 'Authorization': `Bearer ${access_token}` }
      })
      .then((res) => {
        dispatch(logOutSuccess(res.data));
        dispatch(clearCart());
      })
      .catch((res) => {
        dispatch(logOutFail(res.data));
      });
  }
}

export function logOutLoad() {
  return {
    type: LOGOUT_LOAD
  }
}

export function logOutSuccess(data) {
  return {
    type: LOGOUT_SUCCESS
    , data
  }
}

export function logOutFail(err) {
  return {
    type: LOGOUT_FAIL
    , err
  }
}


export function getCode() {
  return async (dispatch, getState) => {
    dispatch(codeLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);

    if(access_token) {
      await Axios.get(`${API_URL}/user/verify`, {
        headers: { 'Authorization': `Bearer ${access_token}` }
      })
      .then((res) => {
        dispatch(codeSuccess(res.data));
      })
      .catch((res) => {
        dispatch(codeFail(res.data));
      });
    }
  }
}

export function codeLoad() {
  return {
    type: GET_CODE_LOAD
  }
}

export function codeSuccess(data) {
  return {
    type: GET_CODE_SUCCESS
    , data
  }
}

export function codeFail(err) {
  return {
    type: GET_CODE_FAIL
    , err
  }
}


export function getVerify({code}, cb) {
  return async (dispatch, getState) => {
    dispatch(verifyLoad());
    const { auth } = getState();
    const access_token = auth.getIn(['user', 'access_token']);
    await Axios.get(`${API_URL}/user/verify/${code}`, {
      headers: { 'Authorization': `Bearer ${access_token}` }
    })
    .then((res) => {
      dispatch(verifySuccess(res.data));
      cb();
    })
    .catch((res) => {
      dispatch(verifyFail(res.data));
    });
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
