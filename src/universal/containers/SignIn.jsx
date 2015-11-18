'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Link } from 'react-router';
import { logIn } from '../actions/auth';
import LoginForm from '../components/Form/LoginForm';


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
    await dispatch(logIn({...data}, function() {
      // nếu đã đăng nhập, vậy ko nên có mặt ở đây!
      if (location.query && location.query.NextPath) {
        history.replaceState(null, location.query.NextPath);
      } else {
        history.replaceState(null, '/');
      }
    }));
    dispatch(initialize('login', {...data, password: ''})); // clear password
  }

}
