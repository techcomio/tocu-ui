'use strict';
import Axios from 'axios';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Link } from 'react-router';
import { logInLoad, logInSuccess, logInFail } from '../actions/auth';
import { getCart } from '../actions/cart';
import LoginForm from '../components/Form/LoginForm';
import { API_URL } from '../../../config';


const meta = {
  title: 'SignIn - Tocu'
  , description: 'SignIn Tocu.vn'
};

@connect(state => ({
  auth: state.auth
}))

export default class SignIn extends React.Component {

	constructor(props) {
    super(props);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="container">
        <DocumentMeta {...meta} />

        <div className="row row-form">
          <div className="col-xs-12 col-sm-10 col-md-7 col-lg-5 col-centered" >
            {/* Form Login*/}
            <LoginForm onSubmit={::this.handleSubmit} />

          </div>
        </div>

      </div>
    );
  }

  async handleSubmit(data) {
    const { dispatch, location, history } = this.props;

    await dispatch(async (_, getState) => {
      dispatch(logInLoad());
      const { cart } = getState();
      await Axios.post(`${API_URL}/token`, {
          ...data
          , cartId: cart.getIn(['Cart', 'id'])
        })
        .then((res) => {
          dispatch(logInSuccess(res.data));
          // nếu đã đăng nhập, vậy ko nên có mặt ở đây!
          if (location.query && location.query.NextPath) {
            history.replaceState(null, location.query.NextPath);
          } else {
            history.replaceState(null, '/');
          }
          dispatch(getCart({}));
        })
        .catch((res) => {
          dispatch(logInFail(res.data));
        });
    });
    dispatch(initialize('login', {...data, password: ''})); // clear password
  }

}
