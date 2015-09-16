'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connectReduxForm } from 'redux-form';
import { loginValidate, asyncValidate } from '../../validation/loginValidation'


@connectReduxForm({
  form: 'login'
  , fields: ['mobilePhone', 'password', 'rememberme']
  , validate: loginValidate
})

@connect(state => ({
  auth: state.auth
}))

export default class LoginForm extends React.Component {

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
      fields: {mobilePhone, password, rememberme}
      , handleSubmit
      , valid
      , auth
    } = this.props;


    let classerPhone = classNames({
      "form-group": true
      , "has-error": mobilePhone.error && mobilePhone.touched
    });

    let classerPassword = classNames({
      "form-group": true
      , "has-error": password.error && password.touched
    });

    return (
      <div className="form-signin">
        <div className="form-header">
          {this.props.children}
          <div className="form-title text-center">Đăng Nhập Tổ Cú</div>
        </div>
        <div className="form-body">
          <div className="logo">
            <Link to="/">
              <img src="/img/logo.png" />
            </Link>
          </div>

          {auth.get('loginErr') && (
            <div className="text-center text-danger">Số điện thoại hoặc mật khẩu không đúng</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={classerPhone}>
              {mobilePhone.error && mobilePhone.touched ? <label className="control-label">{mobilePhone.error}</label> : <label />}
              <input type="tel"
                    pattern="^([0-9]{10,11})$"
                    className="form-control"
                    placeholder="Số điện thoại"
                    {...mobilePhone} required />
            </div>

            <div className={classerPassword}>
              {password.error && password.touched ? <label className="control-label">{password.error}</label> : <label />}
              <input type="password"
                    className="form-control"
                    placeholder="Mật khẩu!"
                    {...password} required />
            </div>

            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" {...rememberme} /> Remember me
                </label>
              </div>
            </div>

            <button type="submit"
                    className="btn btn-primary btn-block"
                    disabled={!valid}
                    onClick={handleSubmit} >
              {auth.get('loginLoad') && <i className="fa fa-spinner fa-pulse"></i>} Đăng Nhập
            </button>
          </form>
        </div>

        <div className="form-footer">
          <div className="pull-left">
            <a href="/password/reset/" >Quên mật khẩu?</a>
          </div>
          <div className="pull-right">
            <Link to={`/signup`} className="pull-right" >Đăng Ký</Link>
          </div>
        </div>
      </div>
    );
  }
}
