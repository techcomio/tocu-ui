'use strict';

import React                     from 'react';
import Validator                 from 'validatorjs';
import {Link, State, Navigation} from 'react-router';
/**
 * @Component
 */
import Select          from './select';
import InputValidation from './inputValidation';

let Validations = {
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
  
  mixins: [State, Navigation],

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      disabled: true,
      ValidationData: Validations,
    };
  },

  componentDidUpdate() {
    let self = this;
    if(this.props.loginState === "success") {

      setTimeout(function() {
        self.replaceWith('/');
      }, 100)

      // var { router: {state: {location}} } = this.context;

      // let nextPath = location.query.nextPath;

      // if (nextPath) {
      //   this.replaceWith(nextPath);
      // } else {
      //   this.replaceWith('/');
      // }
    }
  },

  render() {
    return (
      <div className="form-signup">
        <div className="form-body">
          <div className="form-group">
            <div className="logo">
              <img src="/img/logo.png" style={{width: 50, height: 50}} />
            </div>
          </div>

          <p className="text-center title-form">Đăng Nhập Tổ Cú</p>
          {this.props.loginState === "failed" && (
            <p className="text-center text-danger">số điện thoại hoặc mật khẩu không đúng</p>
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
              <button className="form-control btn btn-primary"
                onClick={this.handleLogin}
                type="submit"
                disabled={this.state.disabled}>

                {this.props.loginState !== "loading" && (
                  "Đăng Nhập"
                )}
                {this.props.loginState === "loading" && (
                  <i className="fa fa-spinner fa-pulse"></i>
                )}

              </button>
            </div>
          </form>
        </div>

        <div className="form-footer">
          <div className="row">
            <div className="col-xs-7 col-md-8">
              <a href="/password/reset/" >quên mật khẩu?</a>
            </div>
            <div className="col-xs-5 col-md-4">
              <Link to="/signup" className="pull-right" >Đăng Ký</Link>
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
    this.props.AuthActions.Login({mobilePhone, password})
  },

});