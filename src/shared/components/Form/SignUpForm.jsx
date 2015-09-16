'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connectReduxForm } from 'redux-form';
import { getDistrict } from '../../actions/location';
import { signupValidate } from '../../validation/signupValidation'


@connectReduxForm({
  form: 'signup'
  , fields: ['name', 'mobilePhone', 'password', 'city', 'district']
  , validate: signupValidate
})

@connect(state => ({
  auth: state.auth
  , location: state.location
}))

export default class SignupForm extends React.Component {

  static propTypes = {
    asyncValidating: PropTypes.bool.isRequired
    , fields: PropTypes.object.isRequired
    , dirty: PropTypes.bool.isRequired
    , handleBlur: PropTypes.func.isRequired
    , handleChange: PropTypes.func.isRequired
    , handleSubmit: PropTypes.func.isRequired
    , resetForm: PropTypes.func.isRequired
    , invalid: PropTypes.bool.isRequired
    , pristine: PropTypes.bool.isRequired
    , valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      fields: {name, mobilePhone, password, city, district}
      , handleSubmit
      , valid
      , auth
    } = this.props;


    let classerName = classNames({
      "form-group": true
      , "has-error": name.error && name.touched
    });

    let classerPhone = classNames({
      "form-group": true
      , "has-error": mobilePhone.error && mobilePhone.touched
    });

    let classerPassword = classNames({
      "form-group": true
      , "has-error": password.error && password.touched
    });

    return (
      <div className="form-signup">
        <div className="form-header">
          <div className="form-title text-center">Đăng Ký Tổ Cú</div>
        </div>
        <div className="form-body">
          <div className="form-group">
            <div className="logo">
              <Link to="/">
                <img src="/img/logo.png" />
              </Link>
            </div>
          </div>

          {auth.get('createErr') && (
            <div className="text-center text-danger">{auth.getIn(['createErr', 'message'])}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={classerName}>
              {name.error && name.touched ? <label className="control-label">{name.error}</label> :  <label />}
              <input type="text"
                    className="form-control form-control-sm"
                    placeholder="Họ tên"
                    {...name} />
            </div>

            <div className={classerPhone}>
              {mobilePhone.error && mobilePhone.touched ? <label className="control-label">{mobilePhone.error}</label> :  <label />}
              <input type="tel"
                    pattern="^([0-9]{10,11})$"
                    className="form-control form-control-sm"
                    placeholder="Số điện thoại"
                    {...mobilePhone} required />
            </div>

            <div className="form-group">
              <label />
              <div className="row">
                <div className="col-xs-6">
                  <select className="form-control form-control-sm" {...city} onChange={this.handleCityChange.bind(this, city)} >
                    <option value="">Tỉnh Thành</option>
                    {this.props.location.get('city').map(function(city, i) {
        			      	return <option key={i} value={city}>{city}</option>
        			      })}
                  </select>
                </div>
                <div className="col-xs-6">
                  <select className="form-control form-control-sm" {...district} >
                    <option value="">Quận Huyện</option>
                    {this.props.location.get('district').map(function(district, i) {
        			      	return <option key={i} value={district.name}>{district.name}</option>
        			      })}
                  </select>
                </div>
              </div>
            </div>

            <div className={classerPassword}>
              {password.error && password.touched ? <label className="control-label">{password.error}</label> :  <label />}
              <input type="password"
                    className="form-control form-control-sm"
                    placeholder="Mật khẩu!"
                    {...password} required />
            </div>

            <button type="submit"
                    className="btn btn-primary btn-sm btn-block btn-signup"
                    disabled={!valid}
                    onClick={handleSubmit} >
              {auth.get('createLoad') && <i className="fa fa-spinner fa-pulse"></i>} Tạo Tài Khoản
            </button>
          </form>
        </div>

        <div className="form-footer text-center">
          <Link to="/signin">Đăng Nhập</Link>
        </div>
      </div>
    );
  }

  handleCityChange(city, e) {
    city.handleChange(e);
    const { dispatch } = this.props;
    const text = e.target.value.trim();
    dispatch(getDistrict({city: text}));
  }
}
