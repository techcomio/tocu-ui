'use strict';
import Axios from 'axios';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Link } from 'react-router';
import { verifyLoad, verifySuccess, verifyFail } from '../actions/auth';
import VerifyForm from '../components/Form/VerifyForm';
import { API_URL } from '../../../config';


const meta = {
  title: 'Xác thực - Tổ Cú'
};

@connect(state => ({
  auth: state.auth
}))

export default class Verify extends React.Component {

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
          <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
            <VerifyForm
              handleCancel={this.handleCancel}
              onSubmit={::this.handleSubmit} />
          </div>
        </div>

      </div>
    );
  }

  handleSubmit(data) {
    const self = this;
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
        self.handleCancel();
      })
      .catch((res) => {
        dispatch(verifyFail(res.data));
      });
    });
  }

  handleCancel = () => {
    const { location, history } = this.props;
    if(location.query && location.query.NextPath) {
      history.replaceState(null, location.query.NextPath);
    } else {
      history.replaceState(null, '/');
    }
  }

}
