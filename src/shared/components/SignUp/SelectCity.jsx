'use strict';

import React from 'react';
import { Input } from 'react-bootstrap';


export default React.createClass({

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
  },

	render() {
		return (
			<Input onChange={this.handleOnChange} ref="city" type='select' placeholder='select'>
		  	<option value="">City</option>
				{this.props.city && (
		      this.props.city.map(function(city, i) {
		      	return <option key={i} value={city}>{city}</option>
		      })
				)}
	    </Input>
		);
	},
	handleOnChange() {
		var CitySelect = this.refs.city.getValue();
		if( CitySelect !== "") {
			this.props.onChange(CitySelect);
		}
	}
});
