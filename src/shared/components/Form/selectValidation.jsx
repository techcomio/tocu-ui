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
		var classes = classNames({
      "form-group": true,
      "has-error": this.props.validator.hasError,
    });

		var erros;

    if(this.props.validator.errorTextRequest !== "") {
    	erros = <label className="control-label" htmlFor={this.props.name} >{this.props.validator.errorTextRequest}</label>
    } else {
    	erros = <label className="control-label" htmlFor={this.props.name} >{this.props.validator.errorMessage}</label>
    }

		return (
			<div className={classes} >
				{this.props.validator.hasError && (
				  erros
				)}
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
    this.setValues(value);
    if(this.props.onChangeCity) {
    	this.props.onChangeCity(value);
    }
    this.props.onChange(this.props.name, value);
    this.props.onChangeTest();
  },

  setValues(txt) {
    this.setState({ value: txt });
    this.value = txt;
  },

  getValues() {
  	return this.value;
  }
  
});
