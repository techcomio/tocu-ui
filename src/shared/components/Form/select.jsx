'use strict';

import React      from 'react/addons';
import classNames from 'classnames';


export default React.createClass({
	getInitialState() {
   	return {
      value: '',
	  };
  },
  propTypes: {
    firstValue: React.PropTypes.string,
    // List: React.PropTypes.array,
  },
	getDefaultProps() {
		return {
      firstValue: '',
    };
	},
	render() {
		return (
			<div className="form-group" >
				{this.renderSelect()}
			</div>
		);
	},

	renderSelect() {
		if(this.props.type === "district") {
			return (
				<select className="form-control" onChange={this._onChange}>
					<option value="">{this.props.firstValue}</option>
					{this.props.List && (
			      this.props.List.toJS().map(function(city, i) {
			      	return <option key={i} value={city.name}>{city.name}</option>
			      })
					)}
				</select>
			);
		} else {
			return (
				<select className="form-control" onChange={this._onChange}>
					<option value="">{this.props.firstValue}</option>
					{this.props.List && (
			      this.props.List.map(function(city, i) {
			      	return <option key={i} value={city}>{city}</option>
			      })
					)}
				</select>
			);
		}
	},

	_onChange(e) {
    var value = e.target.value;
    this.setValue(value);
    if(this.props.onChange) {
    	this.props.onChange(value);
    }
  },
  setValue(txt) {
    this.setState({ value: txt });
  },
  getValue() {
  	return this.state.value;
  }
});
