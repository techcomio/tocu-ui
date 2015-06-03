/* @jsx React.DOM */
'use strict';

import React from 'react';
import { Link } from 'react-router';
import { ButtonInput, Input } from 'react-bootstrap';

export default React.createClass({
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

			      <Input type='email' className='input-lg' placeholder='Phone' />
			      <Input type='password' className='input-lg' placeholder='Password' />
			      <ButtonInput type='submit' bsStyle='success' className="form-control" value='Log In' />
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
  }
});

