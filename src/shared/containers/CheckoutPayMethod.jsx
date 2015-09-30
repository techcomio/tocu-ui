'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Navbar from '../components/Checkout/Navbar';
import Sidebar from '../components/Checkout/Sidebar';
import PayMethodForm from '../components/Form/PayMethodForm';
import { paymentMethod } from '../actions/cart';


@connect(state => ({
}))

export default class CheckoutPayMethod extends React.Component {

  constructor (props) {
    super(props)
  }

  static contextTypes = {
  	history: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="checkout">
        <div>
          <ul className="breadcrumb">
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Thông tin người nhận</Link></li>
            <li><Link to="/checkout/pay-method">PT thanh toán</Link></li>
          </ul>
        </div>
        <div className="checkout-body">
          <Sidebar />

          <div className="body-checkout">
            <PayMethodForm onSubmit={this.handleSubmit.bind(this)} />
          </div>

        </div>
      </div>
    );
  }

  handleSubmit(data) {
    const self = this
      , { dispatch, history } = this.props;
    dispatch(paymentMethod(data.shipping));
  }
};


CheckoutPayMethod.onEnter = (store) => {
  return (nextState, replaceState) => {
    const { auth, cart } = store.getState();
    if (!cart.getIn(["Cart", "shippingInfo", "mobilePhone"])) {
      replaceState(null, '/checkout');
    }
  };
}
