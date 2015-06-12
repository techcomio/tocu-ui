import { Store } from 'flummox';

export default class AppStore extends Store { 
	constructor(flux) {
    super();

    let AuthActions = flux.getActions('authActions');
    this.register(AuthActions.CreateUser, this.handleCreateUser);
    this.register(AuthActions.LoginActions, this.handleLogin);

    this.state = {
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
    if(res.token) {
      this.state.logInState = "success";

      localStorage.auth = JSON.stringify(res);
      localStorage.token = res.token;
      this.emit('change');
    } else {
      this.state.logInState = "errors";
      this.emit('change');
    }
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

  getToken() {
    return localStorage.token;
  }

}

