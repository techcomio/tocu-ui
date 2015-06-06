/* @jsx React.DOM */
'use strict';

import React from 'react';
import { Link } from 'react-router';
import { ButtonInput, Input } from 'react-bootstrap';

export default React.createClass({
  contextTypes: {
    flux: React.PropTypes.object.isRequired,
	  router: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    this.AuthActions = this.context.flux.getActions('authActions');
    this.AuthStore = this.context.flux.getStore('authStore');

   	return {
      logInState: this.AuthStore.getLogInState(),
	  };
  },

  componentDidMount() {
    this.AuthStore.addListener('change', this.onSotreAuthChange);

    if(this.AuthStore.getToken()) {
    	var { router } = this.context;
  		var nextPath = router.getCurrentQuery().nextPath;
  		if (nextPath) {
        router.replaceWith(nextPath);
      } else {
	     	router.replaceWith('home');
      }
    }

  },

  componentWillUnmount() {
    this.AuthStore.removeListener('change', this.onSotreAuthChange);
  },

  componentDidUpdate() {
  	if (this.state.logInState === 'success') {
  		var { router } = this.context;
  		var nextPath = router.getCurrentQuery().nextPath;
  		if (nextPath) {
        router.replaceWith(nextPath);
      } else {
	     	router.replaceWith('home');
      }
    }
  },

  onSotreAuthChange() {
    this.setState({
    	logInState: this.AuthStore.getLogInState()
   	});
  },

  render() {
		return (
			<div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >

    	  		<div className="form-signin">
    	    		<div className="form-body">
    					  <div className="form-group">
    					  	<div className="logo">
    							  <img src="/img/logo.png" style={{width: 50, height: 50}} />
    					  	</div>
    	    			</div>

                <p className="text-center title-form">Đăng Nhập Tổ Cú</p>

    	    			{this.state.logInState === "errors" && (
    	    				<p className="text-danger">số điện thoại hoặc mật khẩu không đúng</p>
    	    			)}

    	    			<form name="signIn" onSubmit={this.Submit}>
    				      <Input ref="phone" onBlur={this.Test} type='text' className='input-lg' placeholder='số điện thoại' />
    				      <Input ref="pass" type='password' className='input-lg' placeholder='mật khẩu' />
    				      <ButtonInput type='submit' onClick={this.handleLogin} bsStyle='primary' className="form-control" value='Đăng Nhập' />
    			      </form>
    				  </div>

    				  <div className="form-footer">
    				  	<div className="row">
    				    	<div className="col-xs-7 col-md-8">
    						    <a href="/password/reset/" >quên mật khẩu?</a>
    						  </div>
    				    	<div className="col-xs-5 col-md-4">
    							  <Link to="signup" className="pull-right" >Đăng Ký</Link>
    						  </div>
    					  </div>
    		    	</div>
    			  </div>
          </div>
        </div>
		  </div>
		)
  },
  Submit(e) {
  	e.preventDefault();
  },
  handleLogin() {
  	let mobilePhone = this.refs.phone.getValue();
  	let password = this.refs.pass.getValue();
  	this.AuthActions.LoginActions({mobilePhone, password});
  	this.setState({
  		logInState: 'loading'
  	});
  },
  Test() {
    console.log('test');
  }
});

