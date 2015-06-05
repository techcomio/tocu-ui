/* @jsx React.DOM */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import { ButtonInput, Input } from 'react-bootstrap';


/* @jsx */
import SelectCity from '../components/SignUp/SelectCity';
import SelectDistrict from '../components/SignUp/SelectDistrict';


export default React.createClass({

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    this.CityActions = this.context.flux.getActions('cityActions');
    this.AuthActions = this.context.flux.getActions('authActions');
    this.CityStore = this.context.flux.getStore('cityStore');
    this.AuthStore = this.context.flux.getStore('authStore');

   	return {
      city: this.CityStore.getCity(),
      district: this.CityStore.getDistrict(),
      errCreateUse: this.AuthStore.getErrCreateUse(),
      error: {},
	  };
  },

  componentDidMount() {
    this.CityStore.addListener('change', this.onStoreCityChange);
    this.AuthStore.addListener('change', this.onSotreAuthChange);
		this.CityActions.getCityActions();
  },

  componentWillUnmount() {
    this.CityStore.removeListener('change', this.onStoreCityChange);
    this.AuthStore.removeListener('change', this.onSotreAuthChange);
  },

  onStoreCityChange() {
    this.setState({
    	city: this.CityStore.getCity(),
  	  district: this.CityStore.getDistrict(),
   	});
  },

  onSotreAuthChange() {
  	this.setState({
  		errCreateUse: this.AuthStore.getErrCreateUse(),
  	});
  },

  render() {
  	let InputPhone;
  	if (!this.state.errCreateUse.mobilePhone) {
  		InputPhone = <Input ref="phone" type='tel' placeholder='Phone' />
  	} else {
  		let label = null;
  		if(this.state.errCreateUse.mobilePhone.properties.type === "regexp") {
  			label = "not number phone";
  		}
  		if(this.state.errCreateUse.mobilePhone.properties.type === "user defined") {
  			label = this.state.errCreateUse.mobilePhone.message;
  		}
  		InputPhone = <Input ref="phone" bsStyle='error' label={label} type='tel' placeholder='Phone' />
  	}

		return (
			<div className="container">
	  		<div className="form-signup">
	    		<div className="form-body">
					  <div className="form-group">
					  	<div className="logo">
							  <img src="/img/logo.png" style={{width: 50, height: 50}} />
					  	</div>
	    			</div>

            <p className="text-center title-form">đăng ký tổ cú</p>

	    			<form>
				      {!this.state.errCreateUse.name && (
					      <Input ref="name" type='text' placeholder='name' />
				      )}
				      {this.state.errCreateUse.name && (
					      <Input ref="name" type='text' bsStyle='error' placeholder='name' />
				      )}

				      {InputPhone}
				
						  <div className="row">
					  		<div className="col-xs-6">
					  			<Input onChange={this.CityOnChange} ref="city" type='select' placeholder='select'>
								  	<option value="">City</option>
										{this.state.city && (
								      this.state.city.map(function(city, i) {
								      	return <option key={i} value={city}>{city}</option>
								      })
										)}
							    </Input>
					  		</div>
					  		<div className="col-xs-6">
								  <Input type='select' ref="district" placeholder='select' >
						        <option value="">District</option>
						        {this.state.district && (
						          this.state.district.map(function(district, i) {
						            return <option key={i} value={district.name}>{district.name}</option>
						          })
						        )}
							    </Input>
						  	</div>
						  </div>

						  {!this.state.errCreateUse.password && (
					      <Input ref="password" type='password' name="password" placeholder='Password' required />
				      )}
				      {this.state.errCreateUse.password && (
					      <Input ref="password" type='password' bsStyle='error' name="password" placeholder='Password' required />
				      )}

				      <ButtonInput onClick={this.CreateAuth} type='submit' bsStyle='primary' className="form-control" value='Create account' />
			      </form>
				  </div>

				  <div className="form-footer text-center">
					  <Link to="signin">Sign In</Link>
		    	</div>
			  </div>
		  </div>
		)
  },

  CreateAuth(e) {
  	e.preventDefault();
  	var name = this.refs.name.getValue();
  	var mobilePhone = this.refs.phone.getValue();
  	var city = this.refs.city.getValue();
  	var district = this.refs.district.getValue();
  	var password = this.refs.password.getValue();
  	
  	this.AuthActions.CreateUser({name, mobilePhone, city, district, password});
  },
  
  CityOnChange(citySelect) {
  	var citySelect = this.refs.city.getValue();
  	this.CityActions.getDistrictActions({city: citySelect});
  },

});

