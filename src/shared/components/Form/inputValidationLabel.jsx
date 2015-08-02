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
    validation: React.PropTypes.object,
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.string 
  },
  getDefaultProps() {
    return {
      validation: { hasError: false},
      placeholder: '',
      type: 'text',
    };
  },
  render() {
    var classes = classNames({
      "form-group": true,
      "has-error": this.props.validator.hasError,
    });
    var classesInput = classNames({
      "form-control": true,
      "input-lg": this.props.size === "lg",
    });

    var erros = <label className="control-label" htmlFor={this.props.name}></label>;

    if(this.props.validator.errorTextRequest !== "") {
      erros = <label className="control-label" htmlFor={this.props.name} >{this.props.validator.errorTextRequest}</label>
    } else {
      erros = <label className="control-label" htmlFor={this.props.name} >{this.props.validator.errorMessage}</label>
    }

    return (
      <div className={classes}>
        {erros}
        <input
          className={classesInput}
          type={this.props.type}
          value={this.state.value}
          name={this.props.name}
          onChange={this._onChange}
          onBlur={this._onBlur}
          placeholder={this.props.placeholder} />
      </div>
    );
  },
  _onChange(e) {
    var value = e.target.value;
    this.setValue(value);
    this.props.onChange(this.props.name, value);
  },
  _onBlur(e) {
    var value = e.target.value;
    this.props.onChange(this.props.name, value);
  },
  setValue(txt) {
    this.setState({ value: txt });
  },
  getValue() {
    return this.state.value;
  }
});