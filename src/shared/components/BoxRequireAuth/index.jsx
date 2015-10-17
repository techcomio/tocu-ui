'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn, getVerify } from '../../actions/auth';
import { loginHide, verifyHide } from '../../actions/boxRequireAuth';
import LoginForm from '../Form/LoginForm';
import VerifyForm from '../Form/VerifyForm';


@connect(state => ({
  boxRequireAuth: state.boxRequireAuth
}))

export default class BoxRequireAuth extends React.Component {

  render() {
    const { boxRequireAuth } = this.props;

    if(boxRequireAuth.get('loginShow')) {
      return (
        <div className="boxLogin">
          <div className="container">
            <div className="row row-form">
              <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
                <div className="centrix">
                  <LoginForm onSubmit={::this.handleSubmitLogin} >
                    <div onClick={::this.hideBoxLogin} className="closeBox fa fa-times" />
                  </LoginForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(boxRequireAuth.get('verifyShow')) {
      return (
        <div className="boxLogin">
          <div className="container">
            <div className="row row-form">
              <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
                <div className="centrix">
                  <VerifyForm handleCancel={::this.hideBoxVerify}
                              onSubmit={::this.handleSubmitVerify} >
                    <div onClick={::this.hideBoxVerify} className="closeBox fa fa-times" />
                  </VerifyForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />
    }
  }

  async handleSubmitLogin(data) {
    const { dispatch } = this.props;
    await dispatch(logIn({...data}, function() {
      // đăng nhập thành công thì Hide box login.
      dispatch(loginHide());
    }));
    dispatch(initialize('login', {})); // clear form
  }

  hideBoxLogin() {
    const { dispatch } = this.props;
    dispatch(loginHide());
  }

  handleSubmitVerify(data) {
    const { dispatch } = this.props;
    dispatch(getVerify(data, function() {
      // xác thực thành công thì Hide box Verify.
      dispatch(verifyHide());
    }));
  }

  hideBoxVerify() {
    const { dispatch } = this.props;
    dispatch(verifyHide());
  }

};
