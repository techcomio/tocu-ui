'use strict';
import React from 'react/addons';
import { Link } from 'react-router';
import classNames from 'classnames';


export default class NavbarCheckout extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-defaul": true,
    });

    return (
      <div>
        <ul className="breadcrumb">
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Thông tin người nhận</Link></li>
          <li><Link to="/checkout/pay-method">PT thanh toán</Link></li>
        </ul>
      </div>
    );
  }

};
