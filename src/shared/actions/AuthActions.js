import { Actions } from 'flummox';
import HttpRequest from './../utils/HttpRequest';
import { Api_Url } from '../utils/config';

function fakePromise(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, 0);
  });
}

function fakeLoadUser({token, user}) {
  if (token) {
    return fakePromise({
      username: user,
      token: token
    });
  } else {
    return fakePromise({
      status: 401
    });
  }
}

class AuthActions extends Actions {

  constructor(flux) {
    super();

    this.flux = flux;
  }

  async CreateUser(auth) {
    let self = this;
    return await HttpRequest
      .post(`${Api_Url}/user`)
      .send(auth)
      .exec()
      .then((data) =>  (data))
      .catch((data) =>  (data));
  }

  async LoginActions(account) {    
    return await HttpRequest
      .post(`${Api_Url}/token`)
      .send(account)
      .exec()
      .then((res) => (res.body))
      .catch((data) => (data));
  }

  async LoginStart() {
    return;
  }

  async loadUser() {
    return await fakeLoadUser({
      token: localStorage.token,
      user: localStorage.user
    });
  }
}

export default AuthActions;