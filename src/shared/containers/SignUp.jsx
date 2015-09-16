'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import { getCity } from '../actions/location';
import { createAuth } from '../actions/auth';
import SignUpForm from '../components/Form/SignUpForm';


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

	constructor(props, context) {
    super(props, context);
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
    await dispatch(createAuth(data, function() {
      // nếu đăng ký thành công, chuyển hướng đến xác thực!
      if (location.query && location.query.NextPath) {
        history.replaceState({NextPath: location.query.NextPath}, '/verify');
      } else {
        history.replaceState(null, '/verify');
      }
    }));
    dispatch(initialize('signup', {...data, password: ''})); // clear password
  }

}
