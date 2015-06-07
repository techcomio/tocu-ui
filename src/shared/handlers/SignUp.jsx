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

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
    router: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    this.CityActions = this.context.flux.getActions('cityActions');
    this.AuthActions = this.context.flux.getActions('authActions');
    this.CityStore = this.context.flux.getStore('cityStore');
    this.AuthStore = this.context.flux.getStore('authStore');

    return {
      disabled: true,
      ValidationData: Validations,
      city: this.CityStore.getCity(),
      district: this.CityStore.getDistrict(),
      createUseState: this.AuthStore.getCreateUseState(),
    };
  },

  componentDidMount() {
    this.CityStore.addListener('change', this.onStoreCityChange);
    this.AuthStore.addListener('change', this.onSotreAuthChange);
    this.CityActions.getCityActions();
  },

  componentWillUnmount() {
    this.CityStore.removeListener('change', this.onStoreCityChange);
    this.AuthStore.removeListener('change', this.onSotreAuthChange);
  },

  componentDidUpdate() {
    if (this.state.createUseState === 'success') {
      var { router } = this.context;
      var nextPath = router.getCurrentQuery().nextPath;
      if (nextPath) {
        router.replaceWith(nextPath);
      } else {
        router.replaceWith('home');
      }
    }
  },

  onStoreCityChange() {
    this.setState({
      city: this.CityStore.getCity(),
      district: this.CityStore.getDistrict(),
    });
  },

  onSotreAuthChange() {
    var ValidationData = this.state.ValidationData;
    var errCreateUse = this.AuthStore.getErrCreateUse();

    Object.keys(errCreateUse).forEach((key) => {
      if(ValidationData.hasOwnProperty(key)) {
        ValidationData[key].hasError = true;
        ValidationData[key].errorTextRequest = errCreateUse[key].message;
      }
    });

    this.setState({
      ValidationData: ValidationData,
      createUseState: this.AuthStore.getCreateUseState(),
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

                <p className="text-center title-form">Đăng Ký Tổ Cú</p>

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
                        List={this.state.city}
                        onChange={this._onChangeSelectCity}
                        firstValue="Tỉnh Thành" />
                    </div>
                    <div className="col-xs-6">
                      <Select 
                        ref="district"
                        type="district"
                        List={this.state.district}
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
                    <input className="form-control btn btn-primary"
                      onClick={this.CreateAuth}
                      value="Tạo Tài Khoản"
                      type="submit"
                      disabled={this.state.disabled} />
                  </div>

                </form>
              </div>
              <div className="form-footer text-center">
                <Link to="signin">Đăng Nhập</Link>
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

  _onChangeSelectCity(citySelect) {
    this.setState({
      district: []
    });
    this.CityActions.getDistrictActions({city: citySelect});
  },

  CreateAuth(e) {
    e.preventDefault();
    var name = this.refs.name.getValue();
    var mobilePhone = this.refs.mobilePhone.getValue();
    var city = this.refs.city.getValue();
    var district = this.refs.district.getValue();
    var password = this.refs.password.getValue();

    this.AuthActions.CreateUser({name, mobilePhone, city, district, password});
  },

});
