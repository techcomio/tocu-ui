"use strict";

import React from 'react';


export default class InfoSanpham extends React.Component {

  render() {
    return (
      <ul >
        <li>Mã số: <strong>{this.props.code}</strong></li>
        <li>Tình trạng: <strong>Còn hàng</strong></li>
        <li>
          <p className="status">{this.props.description}</p>
        </li>
      </ul>
    );
  }
  
};

InfoSanpham.propTypes = {
  code: React.PropTypes.string,
  description: React.PropTypes.string,
};