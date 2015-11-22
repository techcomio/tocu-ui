'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { prepareRoute } from '../decorators';
import Navbar from '../components/Checkout/Navbar';
import Sidebar from '../components/Checkout/Sidebar';
import OrderForm from '../components/Form/OrderForm';
import { shippingInfo, capnhatCart } from '../actions/cart';
import { getDistrict } from '../actions/location';
import { CLIENT } from '../lib/env';


@prepareRoute(async function ({ store, params, location }) {
  const { cart, auth } = store.getState();
  const province = cart.getIn(["Cart", "shippingInfo", "province"]);
  const provinceAuth = auth.getIn(['user', 'province']);

  if(province && CLIENT) {
    return await * [
      store.dispatch(getDistrict({province}))
    ];
  } else if(provinceAuth && CLIENT) {
    return await * [
      store.dispatch(getDistrict({province: provinceAuth}))
    ];
  }
})

@connect(state => ({
  cart: state.cart
}))

export default class CheckoutForm extends React.Component {

  constructor (props) {
    super(props)
  }

  static contextTypes = {
  	history: PropTypes.object.isRequired,
  }

  render () {
    const { cart } = this.props;
    return (
      <div className="checkout">
        <div>
          <ul className="breadcrumb">
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Thông tin người nhận</Link></li>
            {cart.getIn(["Cart", "shippingInfo", "mobilePhone"]) ?
              <li><Link to="/checkout/pay-method">PT thanh toán</Link></li>
              : <li><span>PT thanh toán</span></li>
            }
          </ul>
        </div>
        <div className="checkout-body">
          <Sidebar />
          <div className="body-checkout">
            <OrderForm onSubmit={::this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(data) {
    const self = this
      , { dispatch, history } = this.props;

    dispatch(capnhatCart(function() {
      dispatch(shippingInfo(data, function() {
        history.pushState(null, '/checkout/pay-method')
      }));
    }, function() {
      history.pushState(null, '/cart')
    }));
  }

};
