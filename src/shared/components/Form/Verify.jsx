'use strict';

import React, { PropTypes}       from 'react/addons';
import {Link, State, Navigation} from 'react-router';


export default React.createClass({

  mixins: [State, Navigation],

  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  componentDidMount() {
    React.findDOMNode(this.refs.code).focus();
  },

  componentDidUpdate() {
    if(this.props.verifyState) {
      this.onToNexPath();
    }
  },

  getCode() {
    this.props.VerifyActions.getCode();
  },

  render() {
    return (
      <div className="form-signup verify">
        <div className="verify-body">
          <h4>Xác thực số điện thoại!</h4>
          <p>Chúng tôi đã gửi một mã xác thực vào số điện thoại {this.props.auth.get('mobilePhone')}.</p>
          <div className="form-group" >
            <label className="text-danger">{this.props.verifyFaild.get('message') || this.props.codeFaild.get('message')}</label>
            <input ref="code" className="form-control" name="macode" placeholder="Mã xác thực" type="text" />
          </div>
          <div className="row">
            <div className="col-xs-5 col-md-5">
              <button className="btn btn-link" onClick={this.getCode} disabled={this.props.codeFaild.size > 0 ? true : false}><i className="fa fa-refresh"></i>Send a new code.</button>
            </div>
            <div className="col-xs-7 col-md-7">
              <div className="pull-right">
                <button onClick={this.onCancel} className="btn btn-default">
                  <span>Cancel</span>
                </button>
                <button onClick={this.onVerify} className="btn btn-primary">
                  <span>Verify</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  onCancel() {
    this.onToNexPath();
  },

  onVerify() {
    let code = React.findDOMNode(this.refs.code).value;
    this.props.VerifyActions.getVerify(code)
  },

  onToNexPath() {
    if(this.props.hideBoxVerify) {
      this.props.hideBoxVerify();
      return;
    }

    const { router } = this.context;
    const { state: { location } } = router;
    const query = location.query;

    if (query && query.nextPath) {
      return router.transitionTo(query.nextPath);
    } else {
      return router.transitionTo('/');
    }
  }

});
