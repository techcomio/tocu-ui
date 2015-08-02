'use strict'

import Alt              from '../Alt';
import AuthActions      from '../actions/AuthActions';
import VerifyActions    from '../actions/VerifyActions';
import Cookies          from 'cookies-js';
import Immutable, {Map} from 'immutable';


class AuthStore {

  constructor() {
    this.bindActions(AuthActions);  // CreateUser, Login, CreateUserStart, CreateFailed, LoginFailed, onLogout
    this.bindAction(VerifyActions.getVerify, this.onGetVerify);
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.auth = new Map({});
    this.failedCreateMessage = null;
    this.createUseState = null;
    this.loginState = null;
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.auth)) {
      this.auth = Immutable.fromJS(this.auth);
    }
  }

  onCreateUser(data) {
    Cookies.set('access_token', data.access_token, {expires: data.expires_in}); //  Expires in day.expires_in sec

    this.createUseState = "success";
    this.auth = this.auth.merge(data);
    localStorage.auth = JSON.stringify(data);
    localStorage.access_token = data.access_token; // ko có access_token
  }

  onLogin(data) {
    Cookies.set('access_token', data.access_token, {expires: data.expires_in}); //  Expires in data.expires_in sec

    this.loginState = "success";
    this.auth = this.auth.merge(data);
    localStorage.auth = JSON.stringify(data);
    localStorage.access_token = data.access_token;
  }

  onLogout() {
    Cookies.expire('access_token'); //  Will expire the cookie with a path of '/' 
    this.createUseState = "";
    this.loginState = "logout";
    this.auth = new Map({});
    delete localStorage.auth;
    delete localStorage.access_token;
  }

  onCreateUserStart() {
    this.failedCreateMessage = null;
    this.createUseState = "loading";
  }

  onGetVerify(data) {
    console.log('AuthStore onGetVerify', data);
    this.auth = this.auth.set('isVerifyMobilePhone', true);
  }

  onLoginStart() {
    this.loginState = "loading";
  }

  onCreateFailed(err) {
    this.createUseState = "failed";
    this.failedCreateMessage = err.message;
  }

  onLoginFailed(err) {
    this.loginState = "failed";
  }

  static getToken() {
    return 
  }

}


module.exports = Alt.createStore(AuthStore, 'AuthStore');
