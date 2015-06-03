/* @jsx React.DOM */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import { ButtonInput, Input } from 'react-bootstrap';

export default React.createClass({
  render() {
		return (
			<div className="container">
	  		<div className="form-signup">
	    		<div className="form-body">
					  <div className="form-group">
					  	<div className="logo">
							  <img src="/img/logo.png" style={{width: 50, height: 50}} />
					  	</div>
	    			</div>
			      <Input ref="name" type='text' placeholder='name' />
			      <Input ref="phone" type='text' placeholder='Phone' />
		
					  <div className="row">
				  		<div className="col-xs-6">
							  <Input ref="city" type='select' placeholder='select'>
						      <option value='select'>City</option>
						      <option value='other'>Hanoi</option>
						    </Input>
				  		</div>
				  		<div className="col-xs-6">
							  <Input ref="district" type='select' placeholder='select'>
						      <option value='select'>District</option>
						      <option value='other'>1</option>
						      <option value='other'>2</option>
						      <option value='other'>3</option>
						    </Input>
					  	</div>
					  </div>
			      <Input ref="password" type='password'placeholder='Password' />
			      <ButtonInput onClick={this.CreateAuth} type='submit' bsStyle='success' className="form-control" value='Create account' />
				  </div>

				  <div className="form-footer text-center">
					  <Link to="signin">Sign In</Link>
		    	</div>
			  </div>
		  </div>
		)
  },
  CreateAuth() {
  	console.log(this.refs.name.getValue());
  }
});

