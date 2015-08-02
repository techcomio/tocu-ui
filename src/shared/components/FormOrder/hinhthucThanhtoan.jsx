"use strict";

import React      from 'react/addons';
import classNames from 'classnames';


export default class HinhthucThanhtoan extends React.Component {

  constructor(props) {
    super(props);
    this.handleCodChange = this.handleCodChange.bind(this);
    this.handleCpnChange = this.handleCpnChange.bind(this);

    this.state = {
      codChecked: false,
      cpnChecked: false,
    };
    this.test = '';
  }

  render() {
    return this.renderCheckbox();
  }

  renderCheckbox() {
    if(this.props.disabled) {
      return (
        <div className="row">
          <div className="col-md-12">
            <span className="hihi">Thanh toán trực tiếp:</span>
            <div className="checkbox disabled">
              <label>
                <input ref="cod" type="checkbox" checked={false} disabled={true}/>&nbsp; Nhận hàng và thanh toán trực tiếp cho nhân viên giao hàng
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <span className="hihi">Chuyển khoản:</span>
            <div className="checkbox disabled">
              <label>
                <input ref="cpn" type="checkbox" checked={false} disabled={true}/>&nbsp; Chuyển khoản qua tài khoản ngân hàng, thẻ, ATM trong vòng 12h
              </label>
            </div>
          </div>
        </div>
      );
    } else {
      let classhinhthucCOD = classNames({
        checkbox: true,
        disabled: this.props.disabled || this.props.hinhthucVC !== 'cod',
      });

      let classhinhthucCPN = classNames({
        checkbox: true,
        disabled: this.props.disabled || this.props.hinhthucVC === null,
      });

      return (
        <div className="row">
          <div className="col-md-12">
            <span className="hihi">Thanh toán trực tiếp:</span>
            <div className={classhinhthucCOD}>
              <label>
                <input ref="cod" type="checkbox" onChange={this.handleCodChange} checked={this.state.codChecked} disabled={this.props.disabled || this.props.hinhthucVC !== 'cod'}/>&nbsp; Nhận hàng và thanh toán trực tiếp cho nhân viên giao hàng
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <span className="hihi">Chuyển khoản:</span>
            <div className={classhinhthucCPN}>
              <label>
                <input ref="cpn" type="checkbox" onChange={this.handleCpnChange} checked={this.state.cpnChecked} disabled={this.props.disabled || this.props.hinhthucVC === null}/>&nbsp; Chuyển khoản qua tài khoản ngân hàng, thẻ, ATM trong vòng 12h
              </label>
            </div>
          </div>
        </div>
      );
    }
  }

  handleCodChange(e) {
    this.setState({
      codChecked: !this.state.codChecked,
      cpnChecked: false,
    });
    this.props.onChange();
    this.test = e.target.checked ? 'cash' : null;
  }

  handleCpnChange(e) {
    this.setState({
      codChecked: false,
      cpnChecked: !this.state.cpnChecked,
    });
    this.props.onChange();
    this.test = e.target.checked ? 'transfer' : null;
  }

  getCheckbox() {
    if(React.findDOMNode(this.refs.cod).checked && !React.findDOMNode(this.refs.cod).disabled) {
      return "cash";
    }
    if(React.findDOMNode(this.refs.cpn).checked && !React.findDOMNode(this.refs.cpn).disabled) {
      return "transfer";
    }
    return null;
  }

  getTest() {
    return this.test;
  }

};
