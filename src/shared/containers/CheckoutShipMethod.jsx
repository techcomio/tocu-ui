'use strict';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Navbar from '../components/Checkout/Navbar';
import Sidebar from '../components/Checkout/Sidebar';


export default class CheckoutShipMethod extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className="checkout">
        <Navbar />
        <div className="checkout-body">
          <Sidebar />

          <div className="body-checkout">
            <form className="checkout-form">
              <div className="checkout-title text-center">Phương thức vận chuyển</div>

              <div className="radio">
                <label>
                  <input type="radio" name="phuongthucVC" value="option1" />
                  Chuyển phát nhanh
                </label>
              </div>


              <div className="btn-continue">
                <button type="submit" className="btn btn-primary navbar-btn btn-block">Tiếp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

};
