'use strict';
import Axios from 'axios';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logInLoad, logInSuccess, logInFail, verifyLoad, verifySuccess, verifyFail } from '../../actions/auth';
import { getCart } from '../../actions/cart';
import { loginHide, verifyHide } from '../../actions/boxRequireAuth';
import LoginForm from '../Form/LoginForm';
import VerifyForm from '../Form/VerifyForm';
import { API_URL } from '../../../../config';


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
              <div className="col-xs-12 col-sm-7 col-md-6 col-centered" >
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
    await dispatch(async (_, getState) => {
      dispatch(logInLoad());
      const { cart } = getState();
      await Axios.post(`${API_URL}/token`, {
          ...data
          , cartId: cart.getIn(['Cart', 'id'])
        })
        .then((res) => {
          dispatch(logInSuccess(res.data));
          dispatch(getCart({}));
          dispatch(loginHide());
        })
        .catch((res) => {
          dispatch(logInFail(res.data));
        });
    });
    dispatch(initialize('login', {})); // clear form
  }

  hideBoxLogin() {
    const { dispatch } = this.props;
    dispatch(loginHide());
  }

  handleSubmitVerify(data) {
    const { dispatch } = this.props;

    dispatch((_, getState) => {
      dispatch(verifyLoad());
      const { auth } = getState();
      const access_token = auth.getIn(['user', 'access_token']);
      Axios.get(`${API_URL}/user/verify/${data.code}`, {
        headers: { 'Authorization': `Bearer ${access_token}` }
      })
      .then((res) => {
        dispatch(verifySuccess(res.data));
        // xác thực thành công thì Hide box Verify.
        dispatch(verifyHide());
      })
      .catch((res) => {
        dispatch(verifyFail(res.data));
      });
    });
  }

  hideBoxVerify() {
    const { dispatch } = this.props;
    dispatch(verifyHide());
  }

};
