import { Store } from 'flummox';
import Cookies from 'cookies-js';


export default class AppStore extends Store { 
	constructor(flux) {
    super();

    let AuthActions = flux.getActions('authActions');
    this.register(AuthActions.CreateUser    , this.handleCreateUser);
    this.register(AuthActions.LoginActions  , this.handleLogin);
    this.register(AuthActions.cookieActions , this.handleCookie);
    this.register(AuthActions.logoutActions , this.handleLogout);

    this.state = {
      cookieToken: null,
      createUseState: null,
      errCreateUse: {},
    };
  }
  
  handleCreateUser(res) {
    if(res.status === 201 && res.body.token) {
      localStorage.auth = JSON.stringify(res.body);
      localStorage.token = res.body.token;
      this.state.createUseState = "success";
    } else if (res.response.status === 400) {
      this.state.errCreateUse = res.response.body.errors;
    }
    this.emit('change');
  }

  handleLogin(res) {
    Cookies.set('token', 'abcxzy', {expires: 8640000}); //  Expires in 100 day
    this.state.cookieToken = 'abcxzy';
    this.state.logInState = "success";
    this.emit('change');

    // if(res.token) {
    //   this.state.logInState = "success";

    //   localStorage.auth = JSON.stringify(res);
    //   localStorage.token = res.token;
    //   this.emit('change');

    //   Cookies.set('token', res.token);
    // } else {
    //   this.state.logInState = "errors";
    //   this.emit('change');
    // }
  }

  handleCookie(token) {
    console.log('handleCookie', token);
    this.state.cookieToken = token;
  }

  handleLogout() {
    console.log('handleLogout');
    Cookies.expire('token');
    delete localStorage.auth;
    delete localStorage.token;
  }

  getLogInState() {
  	return this.state.logInState;
  }

  getErrCreateUse() {
    return this.state.errCreateUse;
  }

  getCreateUseState() {
    return this.state.createUseState;
  }

  getCookieToken() {
    return this.state.cookieToken;
  }

  getToken() {
    return localStorage.token;
  }

}

