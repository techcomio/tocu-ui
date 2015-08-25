'use strict';
import React from 'react/addons';
import { Link } from 'react-router';
import classNames from 'classnames';


export default class NavbarCart extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      hideHeader: false,
    };
  }
  
  render () {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-defaul": true,
    });

    return (
      <div ref="navbar">
        <ol className="breadcrumb">
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Thông tin người nhận</Link></li>
          <li><Link to="/checkout-ship-method" className="active">PT vận chuyển</Link></li>
          <li><Link to="/checkout-pay-method">PT thanh toán</Link></li>
        </ol>
      </div>
    );
  }
  
};
