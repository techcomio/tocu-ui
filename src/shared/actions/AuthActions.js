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

/*    setTimeout(() => {
      this.dispatch({
        "isVerifyMobilePhone": false,
        "level": 1,
        "id": 4,
        "name": "test",
        "mobilePhone": "0989414660",
        "city": "Tuyên Quang",
        "district": "Sơn Dương",
        "districtIsUrban": false,
        "avatarUrl": "http://api.tocu.vn/image/egg-avatars/egg16.jpg",
        "updatedAt": "2015-08-03T00:51:23.878Z",
        "createdAt": "2015-08-03T00:51:23.878Z",
        "company": null,
        "address": null,
        "NoteId": null,
        "access_token": "djumkrkgu400c51hb88br0eb1ihum7176r1p0j4820ihk0ffmkd3",
        "expires_in": 86400,
        "_ts": "2015-08-03T00:51:23.979Z"
      });
    }, 100);*/

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
  Logout() {
    let self = this;

    Axios.get(`${Api_URL}/token/expire`, {
      headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
    })
    .then((res) => {
      self.dispatch();
    })
    .catch((res) => {
      console.log('err Logout', res);
    });
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
