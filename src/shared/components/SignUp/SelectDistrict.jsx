'use strict';

import React from 'react';
import { Input } from 'react-bootstrap';


export default React.createClass({

	render() {
		return (
			<Input type='select' placeholder='select' >
        <option value="">District</option>
        {this.props.district && (
          this.props.district.map(function(district, i) {
            return <option key={i} value={district}>{district}</option>
          })
        )}
	    </Input>
		);
	}

});
