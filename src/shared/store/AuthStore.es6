import { Store } from 'flummox';

export default class AppStore extends Store { 
	constructor(flux) {
    super();

    let AuthActions = flux.getActions('authActions');
    this.register(AuthActions.CreateUser, this.handleCreateUser);
    this.register(AuthActions.LoginActions, this.handleLogin);

    this.state = {};
  }
  
  handleCreateUser(res) {
    if(res.status === 201) {
      localStorage.auth = JSON.stringify(res.body);
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
    return this.state.errCreateUse || {};
  }

  getToken() {
    return localStorage.token;
  }

}






// "{"message":"User validation failed","name":"ValidationError","errors":{"mobilePhone":{"properties":{"type":"regexp","message":"Path `{PATH}` is invalid ({VALUE}).","path":"mobilePhone","value":"1234"},"message":"Path `mobilePhone` is invalid (1234).","name":"ValidatorError","kind":"regexp","path":"mobilePhone","value":"1234"}}}"