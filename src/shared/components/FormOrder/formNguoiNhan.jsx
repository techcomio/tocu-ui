'use strict';

import React       from 'react';
import Validator   from 'validatorjs';
import classNames  from 'classnames';
import ShipActions from '../../actions/ShipActions';
/**
 * @Component
 */
import InputValidation  from '../Form/inputValidation';
import SelectValidation from '../Form/selectValidation';


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
  diachi: {
    rules: {diachi: [ "required"]},
    messages: {"required.diachi": "nhập địa chỉ của bạn!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
  coquan: {
    rules: {coquan: [ "required"]},
    messages: {"required.coquan": "nhập cơ quan của bạn!"},
    hasError: false,
    errorMessage: '',
    errorTextRequest: ''
  },
  city: {
    rules: {city: [ "required"]},
    messages: {"required.city": "nhập tỉnh thành của bạn!"},
    hasError: false,
    errorMessage: '',
  },
  district: {
    rules: {district: [ "required"]},
    messages: {"required.district": "nhập quận huyện của bạn!"},
    hasError: false,
    errorMessage: '',
  }
};

export default class FormOrder extends React.Component {

  constructor(props) {
    super(props);
    this._bind('_onChangeInputHandler', '_setDisabledSubmit', '_setAndValidateInput', '_onChangeSelectCity', '_actionsShip', 'getValue');

    this.state = {
      ValidationData: Validations,
      disabled: true,
      cost: 0,
      shippingMethod: '',
    }
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <InputValidation
            ref="diachi"
            type="text"
            placeholder="Địa chỉ"
            name="diachi"
            validator={this.state.ValidationData.diachi}
            onChange={this._onChangeInputHandler} />
        </div>
        <div className="col-sm-6 col-md-6">
          <InputValidation
            ref="name"
            type="text"
            placeholder="Họ tên"
            name="name"
            validator={this.state.ValidationData.name}
            onChange={this._onChangeInputHandler} />
        </div>
        <div className="col-sm-6 col-md-6">
          <InputValidation
            ref="coquan"
            type="text"
            placeholder="Công ty/Cơ quan"
            name="coquan"
            validator={this.state.ValidationData.coquan}
            onChange={this._onChangeInputHandler} />
        </div>
        <div className="col-sm-6 col-md-6">
          <InputValidation
            ref="mobilePhone"
            type="text"
            placeholder="Điện thoại"
            name="mobilePhone"
            validator={this.state.ValidationData.mobilePhone}
            onChange={this._onChangeInputHandler} />
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="form-group">
            <SelectValidation
              ref="city"
              type="city"
              name="city"
              List={this.props.city}
              validator={this.state.ValidationData.city}
              onChangeTest={this.props.onChangeTest}
              onChangeCity={this._onChangeSelectCity}
              onChange={this._onChangeInputHandler}
              firstValue="Tỉnh Thành" />
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="form-group">
            <SelectValidation
              ref="district"
              type="district"
              name="district"
              List={this.props.district}
              validator={this.state.ValidationData.district}
              onChangeTest={this.props.onChangeTest}
              onChange={this._onChangeInputHandler}
              firstValue="Quận Huyện" />
          </div>
        </div>
      </div>
    );
  }

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
  }

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

    if(this.state.disabled !== disabled) {
      this.props.onChangeDisable(disabled);
    }

    if(!disabled) {
      this._actionsShip();
    }
  }

  _onChangeInputHandler(name, value) {
    this._setAndValidateInput(name, value);
    this._setDisabledSubmit();
  }

  _onChangeSelectCity(citySelect) {
    this.props.onChangeSelectCity(citySelect);
  }

  _actionsShip() {
    let city = this.refs.city.getValues();
    let district = this.refs.district.getValues();
    let weight = this.props.weight;
    ShipActions.getPhiShip({city: city, district: district, weight: weight});
  }

  getValue() {
    return {hihi: 'hehe!'};
  }

};
