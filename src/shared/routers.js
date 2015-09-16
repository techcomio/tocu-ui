'use strict';
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
/**
 * @Component
 */
import App from './containers/App';
import Home from './containers/Home';
import Demo from './containers/Demo';
import BoxID from './containers/BoxID';
import ProductID from './containers/ProductID';
import RequireLogin from './containers/RequireLogin';
import RequireVerify from './containers/RequireVerify';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Verify from './containers/Verify';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';
import CheckoutForm from './containers/CheckoutForm';
import CheckoutShipMethod from './containers/CheckoutShipMethod';
import CheckoutPayMethod from './containers/CheckoutPayMethod';
import NotFound from './containers/NotFound';


export default (store) => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route name="boxid" path="box/:id" component={BoxID} />
    <Route name="productid" path="product/:id" component={ProductID} />
  	<Route component={RequireLogin} onEnter={RequireLogin.onEnter(store)}>
    	<Route name="signin" path="signin" component={SignIn} />
    	<Route name="signup" path="signup" component={SignUp} />
    </Route>
    <Route component={RequireVerify} onEnter={RequireVerify.onEnter(store)}>
    	<Route name="verify" path="verify" component={Verify} />
    </Route>
    <Route name="cart" path="cart" component={Cart} />
    <Route name="checkout" path="checkout" component={Checkout} onEnter={Checkout.onEnter(store)} >
      <Route name="checkoutFrom" path="from" component={CheckoutForm} />
      <Route name="CheckoutShipMethod" path="ship-method" component={CheckoutShipMethod} />
      <Route name="CheckoutPayMethod" path="pay-method" component={CheckoutPayMethod} />
    </Route>
  	<Route name="NotFound" path="*" component={NotFound} />
  </Route>
);
