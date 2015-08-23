'use strict';
import React   from 'react/addons';
import {Route} from 'react-router';
/**
 * @Component
 */
import App from './handlers/App';
import Home from './handlers/Home';
import Box from './handlers/Box';
import Cart from './handlers/Cart';
import Posts from './handlers/Posts';
import Album from './handlers/Album';
import ProductID from './handlers/Product_id';
import SignIn from './handlers/SignIn';
import SignUp from './handlers/SignUp';
import NotFound from './handlers/NotFound';
import CartCheckout from './handlers/Cart-checkout';


export default (
	<Route component={App}>
		<Route   component={Home}         path="/"            onEnter={Home.onEnter}   />
		<Route   component={Box}          path="/box/:id"     />
		<Route   component={Cart}         path="/cart">
			<Route   component={CartCheckout} name="checkout" path="/checkout" />
		</Route>
		<Route   component={Posts}        path="/posts/:id"   />
		<Route   component={Album}        path="/album/:id"   />
		<Route   component={ProductID}    path="/product/:id" />
		<Route   component={SignIn}       path="/signin"      onEnter={SignIn.onEnter} />
		<Route   component={SignUp}       path="/signup"      />
		<Route   component={NotFound}     path="*"            />
	</Route>
);
