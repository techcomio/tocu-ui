/* @jsx React.DOM */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import Validator from 'validatorjs';

/* @jsx */
import InputValidation from '../components/Form/InputValidation';
import Select from '../components/Form/Select';

var Validations = {
  mobilePhone: {
    rules: {mobilePhone: [ "required", "regex:/^([0-9]{10,11})$/" ]},
    messages: {"required.mobilePhone": "nhập số điện thoại của bạn!", "regex.mobilePhone": "số điện thoại không hợp lệ!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
  password: {
    rules: {password: [ "required"]},
    messages: {"required.password": "nhập password của bạn!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
};

export default React.createClass({

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
    router: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    this.AuthActions = this.context.flux.getActions('authActions');
    this.AuthStore = this.context.flux.getStore('authStore');

    return {
      disabled: true,
      ValidationData: Validations,
      logInState: this.AuthStore.getLogInState(),
    };
  },

  componentDidMount() {
    this.AuthStore.addListener('change', this.onSotreAuthChange);

    if(this.AuthStore.getToken()) {
      var { router } = this.context;
      var nextPath = router.getCurrentQuery().nextPath;
      if (nextPath) {
        router.replaceWith(nextPath);
      } else {
        router.replaceWith('home');
      }
    }
  },

  componentWillUnmount() {
    this.AuthStore.removeListener('change', this.onSotreAuthChange);
  },

  componentDidUpdate() {
    if (this.state.logInState === 'success') {
      var { router } = this.context;
      var nextPath = router.getCurrentQuery().nextPath;
      if (nextPath) {
        router.replaceWith(nextPath);
      } else {
        router.replaceWith('home');
      }
    }
  },

  onSotreAuthChange() {
    this.setState({
      logInState: this.AuthStore.getLogInState()
    });
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
            <div className="form-signup">
              <div className="form-body">
                <div className="form-group">
                  <div className="logo">
                    <img src="/img/logo.png" style={{width: 50, height: 50}} />
                  </div>
                </div>

                <p className="text-center title-form">Đăng Nhập Tổ Cú</p>
                {this.state.logInState === "errors" && (
                  <p className="text-danger">số điện thoại hoặc mật khẩu không đúng</p>
                )}

                <form>
                  <InputValidation
                    ref="mobilePhone"
                    size="lg"
                    type="mobilePhone"
                    placeholder="số điện thoại"
                    name="mobilePhone"
                    validator={this.state.ValidationData.mobilePhone}
                    onChange={this._onChangeInputHandler} />

                  <InputValidation
                    ref="password"
                    size="lg"
                    type="password"
                    placeholder="mật khẩu"
                    name="password"
                    validator={this.state.ValidationData.password}
                    onChange={this._onChangeInputHandler} />

                  <div className="form-group" >
                    <input className="form-control btn btn-primary"
                      onClick={this.handleLogin}
                      value="Đăng Nhập"
                      type="submit"
                      disabled={this.state.disabled} />
                  </div>
                </form>
              </div>

              <div className="form-footer">
                <div className="row">
                  <div className="col-xs-7 col-md-8">
                    <a href="/password/reset/" >quên mật khẩu?</a>
                  </div>
                  <div className="col-xs-5 col-md-4">
                    <Link to="signup" className="pull-right" >Đăng Ký</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _setAndValidateInput(name, value) {
    var ValidationData = this.state.ValidationData;
    var data = {};
    var {rules, messages} = ValidationData[name];


    ValidationData[name].hasFocus = true;
    ValidationData[name].hasError = false;
    ValidationData[name].errorMessage = '';
    ValidationData[name].errorTextRequest = '';

    data[name] = value || '';

    var validation = new Validator(data, rules, messages);

    if(validation.fails() ) {
      ValidationData[name].hasError = true;
      ValidationData[name].errorMessage = validation.errors.first(name);
    }

    this.setState({ ValidationData: ValidationData });
  },

  _setDisabledSubmit() {
    let ValidationData = this.state.ValidationData,
      total = Object.keys(ValidationData).length,
      done = 0,
      disabled;
      
    Object.keys(ValidationData).forEach((key) => {
      if(ValidationData[key].hasFocus && ValidationData[key].hasError === false) {
        done += 1;
      }
    });

    disabled = done === total ? false : true;
    this.setState({ disabled: disabled });
  },

  _onChangeInputHandler(name, value) {
    this._setAndValidateInput(name, value);
    this._setDisabledSubmit();
  },

  handleLogin(e) {
    e.preventDefault();
    var mobilePhone = this.refs.mobilePhone.getValue();
    var password = this.refs.password.getValue();
    this.AuthActions.LoginActions({mobilePhone, password});
    this.setState({
      logInState: 'loading'
    });
  },

});
