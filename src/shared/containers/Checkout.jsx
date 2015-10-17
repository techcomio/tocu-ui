'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import { getCity } from '../actions/location';
import { getPhiShip } from '../actions/order';


const meta = {
  title: 'Checkout'
};

function getWeightCart(cart) {
  let total = 0

  if(cart.getIn(['Cart','lines'])) {
    cart.getIn(['Cart','lines']).forEach((product, key) => {
      if(product.get('status') === "available") {
        total += product.get('weight');
      }
    });
  }
  return total;
}

@prepareRoute(async function ({ store, params, location }) {
  const { cart } = store.getState();
  const city = cart.getIn(["Cart", "shippingInfo", "city"]);
  const district = cart.getIn(["Cart", "shippingInfo", "district"]);
  const weight = getWeightCart(cart);

  if(city && district && weight) {
    return await * [
      store.dispatch(getCity())
      , store.dispatch(getPhiShip({city, district, weight}))
    ];
  } else {
    return await * [
      store.dispatch(getCity())
    ];
  }
})

export default class Checkout extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="checkout">
        <DocumentMeta {...meta} />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Checkout.onEnter = store => {
  return (nextState, replaceState) => {
    const { auth, cart } = store.getState();
    if (!auth.getIn(['user', 'access_token']) || !(cart.getIn(['Cart', 'lines']) && cart.getIn(['Cart', 'lines']).size)) {
      replaceState(null, '/cart');
    }
  };
}
