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
  name: {
    rules: {name: [ "required"]},
    messages: {"required.name": "nhập tên của bạn!"},
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
    if(this.props.createUseState === "success") {

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

	render () {
		return (
			<div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
        <div className="form-signup">
          <div className="form-body">
            <div className="form-group">
              <div className="logo">
                <img src="/img/logo.png" style={{width: 50, height: 50}} />
              </div>
            </div>

            <p className="text-center title-form">Đăng Ký Tổ Cú</p>

            {this.props.createUseState === "failed" && (
              <p className="text-center text-danger">{this.props.failedMessage}</p>
            )}

            <form>
              <InputValidation
                ref="name"
                type="name"
                placeholder="họ tên"
                name="name"
                validator={this.state.ValidationData.name}
                onChange={this._onChangeInputHandler} />

              <InputValidation
                ref="mobilePhone"
                type="mobilePhone"
                placeholder="số điện thoại"
                name="mobilePhone"
                validator={this.state.ValidationData.mobilePhone}
                onChange={this._onChangeInputHandler} />

              <div className="row">
                <div className="col-xs-6">
                  <Select
                    ref="city"
                    type="city"
                    List={this.props.city}
                    onChange={this._onChangeSelectCity}
                    firstValue="Tỉnh Thành" />
                </div>
                <div className="col-xs-6">
                  <Select
                    ref="district"
                    type="district"
                    List={this.props.district}
                    firstValue="Quận Huyện" />
                </div>
              </div>

              <InputValidation
                ref="password"
                type="password"
                placeholder="mật khẩu"
                name="password"
                validator={this.state.ValidationData.password}
                onChange={this._onChangeInputHandler} />

              <div className="form-group" >
                <button className="form-control btn btn-primary"
                  onClick={this.CreateAuth}
                  type="submit"
                  disabled={this.state.disabled}>

                  {this.props.createUseState !== "loading" && (
                    "Tạo Tài Khoản"
                  )}
                  {this.props.createUseState === "loading" && (
                    <i className="fa fa-spinner fa-pulse"></i>
                  )}
                </button>
              </div>

            </form>
          </div>
          <div className="form-footer text-center">
            <Link to="signin">Đăng Nhập</Link>
          </div>
        </div>
      </div>
		)
	},

  _setAndValidateInput(name, value) {
    let ValidationData = this.state.ValidationData;
    let data = {};
    let {rules, messages} = ValidationData[name];


    ValidationData[name].hasFocus = true;
    ValidationData[name].hasError = false;
    ValidationData[name].errorMessage = '';
    ValidationData[name].errorTextRequest = '';

    data[name] = value || '';

    let validation = new Validator(data, rules, messages);

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

  _onChangeSelectCity(citySelect) {
    this.props.CityActions.getDistrict({city: citySelect});
  },

  CreateAuth(e) {
    e.preventDefault();
    let name        = this.refs.name.getValue();
    let mobilePhone = this.refs.mobilePhone.getValue();
    let city        = this.refs.city.getValue();
    let district    = this.refs.district.getValue();
    let password    = this.refs.password.getValue();

    this.props.AuthActions.CreateUser({name, mobilePhone, city, district, password});
  },
});
