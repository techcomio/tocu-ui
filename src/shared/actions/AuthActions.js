'use strict';

import Alt       from '../Alt';
import Axios     from 'axios';
import {Api_URL} from '../../../config-sample';


class AuthActions {

  /**
   * Create accout User
   * @param {string} options.name        - họ tên
   * @param {string} options.password    - mật khẩu
   * @param {number} options.mobilePhone - số điện thoại
   * @param {string} options.city        - tỉnh thành
   * @param {string} options.district    - quận/huyện
   */
  CreateUser({name, password, mobilePhone, city, district}) {
  	let self = this;
    self.actions.CreateUserStart();

    Axios.post(`${Api_URL}/user`, {
        name: name,
        password: password,
        mobilePhone: mobilePhone,
        city: city,
        district: district,
      })
    	.then(function (res) {
		    self.dispatch(res.data);
		  })
		  .catch(function (res) {
		    self.actions.CreateFailed(res.data)
		  });
  }

  /**
   * Login
   * @param {number} mobilePhone - số điện thoại
   * @param {string} password - mật khẩu
   */
  Login({mobilePhone, password}) {
    let self = this;
    self.actions.LoginStart();

    Axios.post(`${Api_URL}/token`, {
        mobilePhone: mobilePhone,
        password: password,
      })
      .then(function (res) {
        self.dispatch(res.data);
      })
      .catch(function (res) {
        self.actions.LoginFailed(res.data);
      });
  }

  /**
   * Logout
   */
  Logout(access_token) {
    let self = this;

    if(access_token) {
      Axios.get(`${Api_URL}/token/expire`, {
        headers: { 'Authorization': `Bearer ${access_token}` }
      })
      .then((res) => {
        self.dispatch();
      })
      .catch((res) => {
        console.log('err Logout', res);
      });
    }
  }

  /**
   * Actions Start Create User
   */
  CreateUserStart() {
    this.dispatch();
  }

  /**
   * Actions Start Login
   */
  LoginStart() {
    this.dispatch();
  }

  /**
   * Create User Failed
   * @param {Error} err - lỗi create accout
   */
  CreateFailed(err) {
    this.dispatch(err);
  }

  /**
   * Login Failed
   * @param {Error} err - lỗi đăng nhập
   */
  LoginFailed(err) {
    this.dispatch(err);
  }

}

module.exports = Alt.createActions(AuthActions);
