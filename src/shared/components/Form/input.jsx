/* @jsx React.DOM */
'use strict';

import React      from 'react/addons';
import classNames from 'classnames';

export default React.createClass({
	getInitialState() {
   	return {
      value: this.props.defaultValue,
	  };
  },
	propTypes: {
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.string 
  },
	getDefaultProps() {
		return {
      placeholder: '',
      type: 'text',
    };
	},
	render() {
		var classes = classNames({
      "form-group": true,
    });

		return (
			<div className={classes}>
				<input
					className="form-control"
					type={this.props.type}
					value={this.state.value}
					name={this.props.name}
          onChange={this._onChange}
					placeholder={this.props.placeholder} />
					
			</div>
		);
	},
	_onChange(e) {
    var value = e.target.value;
    this.setValue(value);
  },
  setValue(txt) {
    this.setState({ value: txt });
  },
  getValue() {
  	return this.state.value;
  }
});