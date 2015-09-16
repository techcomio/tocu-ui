'use strict';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { initialize, connect } from 'redux-form';
import Navbar from '../components/Checkout/Navbar';
import Sidebar from '../components/Checkout/Sidebar';
import OrderForm from '../components/Form/OrderForm';


export default class CheckoutForm extends React.Component {

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
            <OrderForm onSubmit={this.handleSubmit.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(data) {
    console.log('handleSubmit', data, this.props);
  }

};
