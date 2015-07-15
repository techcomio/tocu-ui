'use strict'

import Alt              from '../Alt';
import AuthActions      from '../actions/AuthActions';
import Cookies          from 'cookies-js';
import Immutable, {Map} from 'immutable';


class AuthStore {

  constructor() {
    this.bindActions(AuthActions);  // CreateUser, Login, CreateUserStart, CreateFailed, LoginFailed, onLogout

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
    this.createUseState = "success";
    this.auth = this.auth.merge(data);
    localStorage.auth = data;
  }

  onLogin(data) {
    // Cookies.set('token', 'SHA256.hex('abcxyz')', {expires: 8640000}); //  Expires in 100 day
    Cookies.set('avatarUrl', data.avatarUrl, {expires: 8640000}); //  Expires in 100 day
    Cookies.set('mobilePhone', data.mobilePhone, {expires: 8640000}); //  Expires in 100 day
    Cookies.set('name', data.name, {expires: 8640000}); //  Expires in 100 day
    Cookies.set('password', data.password, {expires: 8640000}); //  Expires in 100 day
    Cookies.set('token', data.token, {expires: 8640000}); //  Expires in 100 day
    console.log(data);

    this.loginState = "success";
    this.auth = this.auth.merge(data);
    localStorage.auth = JSON.stringify(data);
  }

  onLogout() {
    console.log('onLogout');
    Cookies.expire('avatarUrl'); //  Will expire the cookie with a path of '/' 
    Cookies.expire('mobilePhone'); //  Will expire the cookie with a path of '/' 
    Cookies.expire('name'); //  Will expire the cookie with a path of '/' 
    Cookies.expire('password'); //  Will expire the cookie with a path of '/' 
    Cookies.expire('token'); //  Will expire the cookie with a path of '/' 
    this.loginState = "logout";
    this.auth = new Map({});
    delete localStorage.auth;
  }

  onCreateUserStart() {
    this.failedCreateMessage = null;
    this.createUseState = "loading";
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
