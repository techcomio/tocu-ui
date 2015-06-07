'use strict';

import React from 'react';
import classSet from '../../utils/classSet';

export default React.createClass({

	getDefaultProps() {
		return {
      value: '',
    };
	},
	
	render() {
		var classes = classSet({
      "form-control": true,
      "btn-primary": true,
      "btn": true,
    });

		return (
			<input
				className={classes}
				value={this.props.value}
				type="submit"
				disabled={this.props.disabled} />
		);
	}

});
