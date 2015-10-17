'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connectReduxForm } from 'redux-form';
import { getCode } from '../../actions/auth';
import { verifyValidate } from '../../validation/verifyValidation'


@connectReduxForm({
  form: 'verify'
  , fields: ['code']
  , validate: verifyValidate
})

@connect(state => ({
  auth: state.auth
}))

export default class VerifyForm extends React.Component {

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

  componentDidMount() {
    this._GetCode();
  }

  _GetCode = () => {
    const { dispatch } = this.props;
    dispatch(getCode());
  }

  render() {
    const {
      fields: {code}
      , handleSubmit
      , valid
      , auth
      , handleCancel
    } = this.props;


    let classerCode = classNames({
      "form-group": true
      , "has-error": code.error && code.touched
    });

    return (
      <div className="form-signup verify">
        <div className="verify-body">
          {this.props.children}
          <h4>Xác thực số điện thoại!</h4>
          <p>Chúng tôi đã gửi một mã xác thực vào số điện thoại {auth.getIn(['user', 'mobilePhone'])}.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group" >
              <label className="text-danger">
                {auth.getIn(['verifyErr', 'message']) || auth.getIn(['getcodeErr', 'message'])}
              </label>
              <input type="text"
                    className="form-control"
                    placeholder="Mã xác thực"
                    {...code} />
            </div>
            <div className="row">
              <div className="col-xs-5 col-md-5">
                <div className="btn btn-link" onClick={::this.handleGetCode} >
                  {auth.get('getcodeLoad') ? <i className="fa fa-refresh fa-pulse" /> : <i className="fa fa-refresh" />}
                  Send a new code.
                </div>
              </div>
              <div className="col-xs-7 col-md-7">
                <div className="pull-right">
                  <div className="btn btn-default"
                      onClick={handleCancel}>
                    Cancel
                  </div>
                  <button type="submit"
                          className="btn btn-primary"
                          disabled={!valid || auth.get('verifyLoad')}
                          onClick={handleSubmit} >
                    {auth.get('verifyLoad') ? <i className="fa fa-spinner fa-pulse"></i> : 'Verify' }
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleGetCode() {
    this._GetCode();
  }

}
