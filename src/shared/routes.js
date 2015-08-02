'use strict';

import React   from 'react/addons';
import {Route} from 'react-router';
/**
 * @Component
 */
import App       from './handlers/App';
import Home      from './handlers/Home';
import Box       from './handlers/Box';
import Posts     from './handlers/Posts';
import Album     from './handlers/Album';
import ProductID from './handlers/Product_id';
import SignIn    from './handlers/SignIn';
import SignUp    from './handlers/SignUp';
import NotFound  from './handlers/NotFound';


export default (
	<Route component={App}>
		<Route component={Home}      name="home"      path="/"            onEnter={Home.onEnter}   />
		<Route component={Box}       name="box"       path="/box/:id"     />
		<Route component={Posts}     name="posts"     path="/posts/:id"   />
		<Route component={Album}     name="album"     path="/album/:id"   />
		<Route component={ProductID} name="productID" path="/product/:id" />
		<Route component={SignIn}    name="signin"    path="/signin"      onEnter={SignIn.onEnter} />
		<Route component={SignUp}    name="signup"    path="/signup"      />
		<Route component={NotFound}  name="NotFound"  path="*"            />
	</Route>
);
	