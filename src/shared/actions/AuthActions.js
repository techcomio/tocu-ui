import { Actions } from 'flummox';
import HttpRequest from './../utils/HttpRequest';
// import { PromiseUtils } from  './../utils/performRouteHandlerStaticMethod';

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

  async CreateUser(auth) {
    return await HttpRequest
      .post('/createAuth')
      .send(auth)
      .exec()
      .then((data) => (data.body));
  }

  async LoginActions(account) {    
    return await HttpRequest
      .post('/login')
      .send(account)
      .exec()
      .then((val) => (val.body));
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