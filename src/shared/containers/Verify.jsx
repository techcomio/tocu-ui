'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Link } from 'react-router';
import { getVerify } from '../actions/auth';
import VerifyForm from '../components/Form/VerifyForm';


const meta = {
  title: 'Xác thực - Tocu'
};

@connect(state => ({
  auth: state.auth
}))

export default class Verify extends React.Component {

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
          <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >

            <VerifyForm handleCancel={this.handleCancel}
                        onSubmit={::this.handleSubmit} />

          </div>
        </div>

      </div>
    );
  }

  handleSubmit(data) {
    const self = this;
    const { dispatch } = this.props;
    dispatch(getVerify(data, function() {
      self.handleCancel();
    }));
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
