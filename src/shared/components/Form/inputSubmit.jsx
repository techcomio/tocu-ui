'use strict';

import React      from 'react/addons';
import classNames from 'classnames';


export default React.createClass({

	getDefaultProps() {
		return {
      value: '',
    };
	},
	
	render() {
		var classes = classNames({
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
