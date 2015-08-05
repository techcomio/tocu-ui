'use strict';

import React, { PropTypes}       from 'react/addons';
import {Link, State, Navigation} from 'react-router';
import VerifyStore               from '../../store/VerifyStore';
import AuthStore                 from '../../store/AuthStore';
import VerifyActions             from '../../actions/VerifyActions';


export default React.createClass({

  mixins: [State, Navigation],

  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      auth: AuthStore.getState().auth,
      ...VerifyStore.getState(),
    };
  },

  componentDidMount() {
    React.findDOMNode(this.refs.code).focus();
    AuthStore.listen(this._onChangeAuthStore);
    VerifyStore.listen(this._onChangeVerifyStore);
  },

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    VerifyStore.unlisten(this._onChangeVerifyStore);
  },

  _onChangeAuthStore(state) {
    this.setState({
      auth: state.auth,
    });
  },

  _onChangeVerifyStore(state) {
    this.setState({
      ...state,
    });
  },

  componentDidUpdate() {
    if(this.state.verifyState) {
      this.onToNexPath();
    }
  },

  getCode() {
    VerifyActions.getCode();
  },

  render() {
    return (
      <div className="form-signup verify">
        <div className="verify-body">
          {this.props.children}
          <h4>Xác thực số điện thoại!</h4>
          <p>Chúng tôi đã gửi một mã xác thực vào số điện thoại {this.state.auth.get('mobilePhone')}.</p>
          <div className="form-group" >
            <label className="text-danger">{this.state.verifyFaild.get('message') || this.state.codeFaild.get('message')}</label>
            <input ref="code" className="form-control" name="macode" placeholder="Mã xác thực" type="text" />
          </div>
          <div className="row">
            <div className="col-xs-5 col-md-5">
              <button className="btn btn-link" onClick={this.getCode} disabled={this.state.codeFaild.size > 0 ? true : false}><i className="fa fa-refresh"></i>Send a new code.</button>
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
    VerifyActions.getVerify(code)
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
