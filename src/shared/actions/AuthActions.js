import { Actions } from 'flummox';
import HttpRequest from './../utils/HttpRequest';
import { Api_Url } from '../utils/config';

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
      .catch((err) =>  (err));
  }

  async LoginActions(account) {    
    return await HttpRequest
      .post(`${Api_Url}/token`)
      .send(account)
      .exec()
      .then((res) => (res.body))
      .catch((err) => (err));
  }

  async cookieActions(token) {
    console.log('cookieActions', token);
    console.log('cookieActions');
    return await token;
  }

  async logoutActions() {
    return;
  }

}

export default AuthActions;