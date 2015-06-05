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
	  		<div className="form-signin">
	    		<div className="form-body">
					  <div className="form-group">
					  	<div className="logo">
							  <img src="/img/logo.png" style={{width: 50, height: 50}} />
					  	</div>
	    			</div>

            <p className="text-center title-form">đăng nhập tổ cú</p>

	    			{this.state.logInState === "errors" && (
	    				<p className="text-danger">so dien thoat hoac password ko dung</p>
	    			)}

	    			<form name="signIn" onSubmit={this.Submit}>
				      <Input ref="phone" type='text' className='input-lg' placeholder='Phone' />
				      <Input ref="pass" type='password' className='input-lg' placeholder='Password' />
				      <ButtonInput type='submit' onClick={this.handleLogin} bsStyle='primary' className="form-control" value='Log In' />
			      </form>
				  </div>

				  <div className="form-footer">
				  	<div className="row">
				    	<div className="col-xs-8 col-md-8">
						    <a href="/password/reset/" >Forgot password?</a>
						  </div>
				    	<div className="col-xs-4 col-md-4">
							  <Link to="signup" className="pull-right" >Sign Up</Link>
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
  }
});

