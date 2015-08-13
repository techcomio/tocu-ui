'use strict';

import React                     from 'react/addons';
import Validator                 from 'validatorjs';
import {Link, State, Navigation} from 'react-router';
import AuthStore                 from '../../store/AuthStore';
import AuthActions               from '../../actions/AuthActions';
/**
 * @Component
 */
import Select          from './select';
import InputValidation from './inputValidationLabel';

let Validations = {
  mobilePhone: {
    rules: {mobilePhone: [ "required", "regex:/^([0-9]{10,11})$/" ]},
    messages: {"required.mobilePhone": "Nhập số điện thoại của bạn!", "regex.mobilePhone": "Số điện thoại không hợp lệ!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
  password: {
    rules: {password: [ "required"]},
    messages: {"required.password": "Nhập password của bạn!"},
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
      loginState: AuthStore.getState().loginState,
    };
  },

  componentDidMount() {
    AuthStore.listen(this.onChangeAuthStore);
  },

  componentWillUnmount() {
    AuthStore.unlisten(this.onChangeAuthStore);
  },

  onChangeAuthStore(state) {
    if(state.loginState === "success") {
      let self = this;
      if(this.props.replaceWith) {
        this.props.replaceWith();
        return;
      } else {
        setTimeout(function() {
          self.transitionTo('/');
        }, 100);
        return;
      }
    }
    this.setState({
      loginState: AuthStore.getState().loginState,
    });
  },

  render() {
    let nextPath = '/';
    if(this.props.nextPath) {
      nextPath = this.props.nextPath;
    }

    return (
      <div className="form-signup">
        <div className="form-header">
          {this.props.children}
          <div className="form-title text-center">Đăng Nhập Tổ Cú</div>
        </div>
        <div className="form-body">
          <div className="form-group">
            <div className="logo">
              <Link to="/">
                <img src="/img/logo.png" />
              </Link>
            </div>
          </div>

          {this.state.loginState === "failed" && (
            <p className="text-center text-danger">Số điện thoại hoặc mật khẩu không đúng</p>
          )}

          <form>
            <InputValidation
              ref="mobilePhone"
              type="mobilePhone"
              placeholder="Số điện thoại"
              name="mobilePhone"
              validator={this.state.ValidationData.mobilePhone}
              onChange={this._onChangeInputHandler} />

            <InputValidation
              ref="password"
              type="password"
              placeholder="Mật khẩu"
              name="password"
              validator={this.state.ValidationData.password}
              onChange={this._onChangeInputHandler} />

            <div className="form-group" >
              <button className="form-control btn btn-primary"
                onClick={this.handleLogin}
                type="submit"
                disabled={this.state.disabled}>

                {this.state.loginState !== "loading" && (
                  "Đăng Nhập"
                )}
                {this.state.loginState === "loading" && (
                  <i className="fa fa-spinner fa-pulse"></i>
                )}

              </button>
            </div>
          </form>
        </div>

        <div className="form-footer">
          <div className="row">
            <div className="col-xs-7 col-md-8">
              <a href="/password/reset/" >Quên mật khẩu?</a>
            </div>
            <div className="col-xs-5 col-md-4">
              <Link to={`/signup?nextPath=${nextPath}`} className="pull-right" >Đăng Ký</Link>
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
    AuthActions.Login({mobilePhone, password});
  },

});