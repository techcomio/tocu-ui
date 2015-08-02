'use strict';

import React                     from 'react/addons';
import {Link, State, Navigation} from 'react-router';


export default React.createClass({

  mixins: [State, Navigation],

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  componentDidMount() {
    React.findDOMNode(this.refs.code).focus();
  },

  componentDidUpdate() {
    if(this.props.verifyState) {
      this.onTransitionTo();
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
            <label className="text-danger">{this.props.verifyFaild.get('message')}</label>
            <input ref="code" className="form-control" name="macode" placeholder="mã xác thực" type="text" />
          </div>
          <div className="row">
            <div className="col-xs-5 col-md-5">
              <button className="btn btn-link" onClick={this.getCode} disabled={this.props.verifyFaild.size > 0 ? true : false}><i className="fa fa-refresh"></i>Send a new code.</button>
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
    this.onTransitionTo();
  },

  onVerify() {
    let code = React.findDOMNode(this.refs.code).value;
    this.props.VerifyActions.getVerify(code)
  },

  onTransitionTo() {
    var self = this;
    if(this.props.hideBoxVerify) {
      this.props.hideBoxVerify();
      return;
    }

    let { router: {state: {location}} } = this.context;
    let query = location.query;

    if (query && query.nextPath) {
      setTimeout(function() {
        self.transitionTo(query.nextPath);
      }, 100);
      return;
    } else {
      setTimeout(function() {
        self.transitionTo('/');
      }, 100);
      return;
    }
  }

});
