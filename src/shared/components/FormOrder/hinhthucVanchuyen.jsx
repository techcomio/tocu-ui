"use strict";

import React      from 'react';
import classNames from 'classnames';


export default class HinhthucVanchuyen extends React.Component {

  render() {

    let classhinhthucCOD = classNames({
      checkbox: true,
      disabled: this.props.disabled || this.props.shippingMethod !== 'COD',
    });

    let classhinhthucCPN = classNames({
      checkbox: true,
      disabled: this.props.disabled || this.props.shippingMethod !== 'CPN Viettel',
    });

    return (
      <div className="row">
        <div className="col-xs-9 col-sm-9 col-md-9">
          <div className={classhinhthucCOD}>
            <label>
              <input ref="cod" onChange={this.onChange.bind(this, 'cod')} type="checkbox" disabled={this.props.disabled || this.props.shippingMethod !== 'COD'} />&nbsp; COD chuyển hành trực tiếp
            </label>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3">
          <p className="text-center">{this.props.cost}đ</p>
        </div>
        <div className="col-xs-9 col-sm-9 col-md-9">
          <div className={classhinhthucCPN}>
            <label>
              <input ref="cpn" type="checkbox" onChange={this.onChange.bind(this, 'cpn')} disabled={this.props.disabled || this.props.shippingMethod !== 'CPN Viettel'} />&nbsp; Chuyển phất nhanh Viettel
            </label>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3">
          <p className="text-center">{this.props.cost}đ</p>
        </div>
      </div>
    );
  }

  onChange(type, e) {
    let checked = e.target.checked;
    this.props.onChange(type, checked);
  }

  getCheckbox() {
    if(React.findDOMNode(this.refs.cod).checked && !React.findDOMNode(this.refs.cod).disabled) {
      return "cod";
    }
    if(React.findDOMNode(this.refs.cpn).checked && !React.findDOMNode(this.refs.cpn).disabled) {
      return "cpn";
    }
    return null;
  }

};

  // React.findDOMNode(this.refs.cod).checked = true;