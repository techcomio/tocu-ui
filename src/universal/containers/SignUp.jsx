'use strict';
import Axios from 'axios';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import { getCity } from '../actions/location';
import { createLoad, createAuthSuccess, createAuthFail } from '../actions/auth';
import SignUpForm from '../components/Form/SignUpForm';
import { API_URL } from '../../../config';

const meta = {
  title: 'SignUp - Tocu'
  , description: 'SignUp Tocu.vn'
};

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getCity()),
  ];
})

@connect(state => ({
  auth: state.auth
}))

export default class SignUp extends React.Component {

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
            {/* Form SignUp */}
            <SignUpForm onSubmit={::this.handleSubmit} />

          </div>
        </div>

      </div>
    );
  }

  async handleSubmit(data) {
    const { dispatch, location, history } = this.props;
    await dispatch(async (_, getState) => {
      dispatch(createLoad());
      await Axios.post(`${API_URL}/user`, {
        ...data
      })
      .then((res) => {
        dispatch(createAuthSuccess(res.data));
        // nếu đăng ký thành công, chuyển hướng đến xác thực!
        if (location.query && location.query.NextPath) {
          history.replaceState({NextPath: location.query.NextPath}, '/verify');
        } else {
          history.replaceState(null, '/verify');
        }
      })
      .catch((res) => {
        dispatch(createAuthFail(res.data));
      });
    });
    dispatch(initialize('signup', {...data, password: ''})); // clear password
  }

}
