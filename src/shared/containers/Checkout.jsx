'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import { getCity } from '../actions/location';


const meta = {
  title: 'Checkout'
};

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getCity())
  ];
})

export default class Checkout extends React.Component {

	constructor(props, context) {
    super(props, context);
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


Checkout.onEnter = (store) => {
  return (nextState, replaceState) => {
    const { auth, cart } = store.getState();
    if (!auth.getIn(['user', 'access_token']) || !(cart.getIn(['Cart', 'lines']) && cart.getIn(['Cart', 'lines']).size)) {
      replaceState(null, '/cart');
    }
  };
}
