"use strict";

import React, { PropTypes } from 'react/addons';
import Immutable            from 'immutable';


export default class InfoSanpham extends React.Component {

  render() {
    return (
      <ul >
        <li>Mã số: <strong>{this.props.product.get('code')}</strong></li>
        <li>Tình trạng: <strong>Còn hàng</strong></li>
        <li>
          <p className="status">{this.props.product.get('description')}</p>
        </li>
      </ul>
    );
  }
  
};

InfoSanpham.propTypes = {
  product: PropTypes.instanceOf(Immutable.Map).isRequired,
};