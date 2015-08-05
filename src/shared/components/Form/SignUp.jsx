'use strict';

import React, { PropTypes }      from 'react/addons';
import Validator                 from 'validatorjs';
import {Link, State, Navigation} from 'react-router';
import classnames                from 'classnames';
import AuthStore                 from '../../store/AuthStore';
import AuthActions               from '../../actions/AuthActions';
import CityStore                 from '../../store/CityStore';
import CityActions               from '../../actions/CityActions';
import VerifyStore               from '../../store/VerifyStore';
import VerifyActions             from '../../actions/VerifyActions';
/**
 * @Component
 */
import AltContainer    from 'alt/AltContainer';
import Select          from './select';
import Verify          from './Verify';
import InputValidation from './inputValidation';

let Validations = {
  mobilePhone: {
    rules: {mobilePhone: ["required", "regex:/^([0-9]{10,11})$/" ]},
    messages: {"required.mobilePhone": "Nhập số điện thoại của bạn!", "regex.mobilePhone": "Số điện thoại không hợp lệ!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
  name: {
    rules: {name: ["required"]},
    messages: {"required.name": "Nhập tên của bạn!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
  password: {
    rules: {password: ["required"]},
    messages: {"required.password": "Nhập password của bạn!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
};


export default React.createClass({
  
  mixins: [State, Navigation],

  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      disabled: true,
      ValidationData: Validations,
      boxMaxacnhan: false,
      ...AuthStore.getState(),
      ...CityStore.getState(),
      ...VerifyStore.getState(),
    };
  },

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    CityStore.listen(this._onChangeCityStore);
    VerifyStore.listen(this._onChangeVerifyStore);
  },

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    CityStore.unlisten(this._onChangeCityStore);
    VerifyStore.unlisten(this._onChangeVerifyStore);
  },

  _onChangeAuthStore(state) {
    if(state.createUseState === "success") {
      VerifyActions.getCode();
      this.setState({
        boxMaxacnhan: true,
        ...state,
      });
      return;
    }
    this.setState({
      ...state,
    });
  },

  _onChangeCityStore(state) {
    this.setState({
      ...state,
    });
  },

  _onChangeVerifyStore(state) {
    this.setState({
      ...state,
    });
  },

	render () {
		return (
			<div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
        {this.renderFrom()}
        {this.renderMaxacnhan()}
      </div>
		)
	},

  renderFrom() {
    if(!this.state.boxMaxacnhan) {
      let classNameFrom = classnames({
        "form-signup": true,
        "hide": this.state.boxMaxacnhan,
      });

      return (
        <div className={classNameFrom}>
          <div className="form-body">
            <div className="form-group">
              <div className="logo">
                <Link to="/">
                  <img src="/img/logo.png" style={{width: 50, height: 50}} />
                </Link>
              </div>
            </div>

            <p className="text-center title-form">Đăng Ký Tổ Cú</p>

            {this.state.createUseState === "failed" && (
              <p className="text-center text-danger">{this.state.failedCreateMessage}</p>
            )}

            <form>
              <InputValidation
                ref="name"
                type="name"
                placeholder="Họ tên"
                name="name"
                validator={this.state.ValidationData.name}
                onChange={this._onChangeInputHandler} />

              <InputValidation
                ref="mobilePhone"
                type="mobilePhone"
                placeholder="Số điện thoại"
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
                placeholder="Mật khẩu"
                name="password"
                validator={this.state.ValidationData.password}
                onChange={this._onChangeInputHandler} />

              <div className="form-group" >
                <button className="form-control btn btn-primary"
                  onClick={this.CreateAuth}
                  type="submit"
                  disabled={this.state.disabled}>

                  {this.state.createUseState !== "loading" && (
                    "Tạo Tài Khoản"
                  )}
                  {this.state.createUseState === "loading" && (
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
      )
    }
  },

  renderMaxacnhan() {
    if(this.state.boxMaxacnhan) {
      return (
        <Verify
          auth={this.state.auth}
          codeFaild={this.state.codeFaild}
          verifyFaild={this.state.verifyFaild}
          verifyState={this.state.verifyState}
          VerifyActions={VerifyActions} />
      );
    }
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
    CityActions.getDistrict({city: citySelect});
  },

  CreateAuth(e) {
    e.preventDefault();
    let name        = this.refs.name.getValue();
    let mobilePhone = this.refs.mobilePhone.getValue();
    let city        = this.refs.city.getValue();
    let district    = this.refs.district.getValue();
    let password    = this.refs.password.getValue();

    AuthActions.CreateUser({name, mobilePhone, city, district, password});
  },

});
