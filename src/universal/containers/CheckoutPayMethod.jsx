'use strict';
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Navbar from '../components/Checkout/Navbar';
import Sidebar from '../components/Checkout/Sidebar';
import PayMethodForm from '../components/Form/PayMethodForm';
import { capnhatCartExport } from '../actions/cart';
import { CreateOrderExport } from '../actions/order';
import { API_URL } from '../../../config';


@connect(state => ({
  cart: state.cart,
  auth: state.auth,
  order: state.order
}), dispatch => ({
  capnhatCartExport: bindActionCreators(capnhatCartExport, dispatch),
  CreateOrderExport: bindActionCreators(CreateOrderExport, dispatch)
}))

export default class CheckoutPayMethod extends React.Component {

  constructor (props) {
    super(props)
  }

  static contextTypes = {
  	history: PropTypes.object.isRequired,
  }

  render() {
    const { cart } = this.props;
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
            <div className="checkout-title text-center">Thông tin người nhận</div>
            <p>{cart.getIn(['Cart', 'shippingInfo', 'name'])}</p>
            <p>{cart.getIn(['Cart', 'shippingInfo', 'phone'])}</p>
            <p>{cart.getIn(['Cart', 'shippingInfo', 'province'])}</p>
            <p>{cart.getIn(['Cart', 'shippingInfo', 'district'])}</p>
            <p>{cart.getIn(['Cart', 'shippingInfo', 'address'])}</p>
            <p><Link to="/checkout">Sửa thông tin người nhận</Link></p>
            <PayMethodForm onSubmit={::this.handleSubmit} />
          </div>

        </div>
      </div>
    );
  }

  handleSubmit(data) {
    const self = this
      , { capnhatCartExport, CreateOrderExport, history, cart, auth, order } = this.props;

    var total = 0,
      subTotal = 0,
      totalWeight = 0,
      shippingCost = order.getIn(['phiship', 'shippingCost']),
      OrderLines = cart.getIn(['Cart', 'lines']).toJS().map(function(item) {
        total += item.salePrice || item.price;
        subTotal += item.salePrice || item.price;
        totalWeight += item.weight;

        return {
          product: {
            id: item.id,
            onlineStore: true,
            code: item.code,
            boxName: item.boxName,
            imageUrl: item.imageUrl
          },
          unitPrice: item.salePrice || item.price,
          quantity: 1,
          amount: item.salePrice || item.price,
          weight: item.weight
        }
      });

    const dataOrder = {
      "store": "ol",
      "shippingInfo": cart.getIn(['Cart', 'shippingInfo']).toJS(),
      "shippingCost": shippingCost,
      "shippingDays": 3,
      "status": "pending",
      "subTotal": subTotal,
      "percentageDiscount": 0,
      "fixedDiscount": 0,
      "totalDiscounts": 0,
      "total": total + shippingCost,
      "totalWeight": totalWeight,
      "OrderLines": OrderLines
    }

    capnhatCartExport()
      .then((res) => {
        console.log('then capnhat Cart')
      })
      .catch((res) => {
        CreateOrderExport(dataOrder)
          .then((res) => {
            // client redirect `http://tocu-api-dev-tranduchieu.c9.io/onepay?vpc_OrderInfo=${data.id}&vpc_Amount=${data.total}&access_token=${user.get('tonken')}`
            window.location.replace(`${API_URL}/onepay?vpc_OrderInfo=${res.data.id}&vpc_Amount=${res.data.total}&access_token=${auth.getIn(['user', 'access_token'])}`);
          })
          .catch((res) => {
            history.pushState(null, '/cart');
          });
      });
  }
};


CheckoutPayMethod.onEnter = (store) => {
  return (nextState, replaceState) => {
    const { auth, cart } = store.getState();
    if (!cart.getIn(["Cart", "shippingInfo", "phone"])) {
      replaceState(null, '/checkout');
    }
  };
}
