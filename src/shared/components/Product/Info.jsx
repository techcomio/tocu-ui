"use strict";
import React, { PropTypes } from 'react/addons';
import Immutable from 'immutable';


export default class InfoProduct extends React.Component {

  static propTypes = {
    product: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const { product } = this.props;
    return (
      <ul >
        <li>Mã số: <strong>{product.get('code')}</strong></li>
        <li>Tình trạng: <strong>Còn hàng</strong></li>
        <li>
          <p className="status">{product.get('description')}</p>
        </li>
      </ul>
    );
  }

};
