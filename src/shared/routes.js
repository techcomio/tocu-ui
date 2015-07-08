'use strict';

import React from 'react';
import {Route} from 'react-router';
/**
 * @Component
 */
import App       from './handlers/App';
import Home      from './handlers/Home';
import Box       from './handlers/Box';
import Posts     from './handlers/Posts';
import Album     from './handlers/Album';
import Sanpham   from './handlers/Sanpham';
import SanphamID from './handlers/Sanpham_id';
import SignIn    from './handlers/SignIn';
import SignUp    from './handlers/SignUp';
import NotFound  from './handlers/NotFound';


export default (
	<Route component={App}>
		<Route component={Home}      name="home"     path="/"          onEnter={Home.onEnter} />
		<Route component={Box}       name="box"      path="/box/:id"   />
		<Route component={Posts}     name="posts"    path="/posts/:id" />
		<Route component={Album}     name="album"    path="/album/:id" />
		<Route component={Sanpham}   name="sp"       path="/sp"        />
		<Route component={SanphamID} name="spID"     path="/sp/:id"    />
		<Route component={SignIn}    name="signin"   path="/signin"    />
		<Route component={SignUp}    name="signup"   path="/signup"    />
		<Route component={NotFound}  name="NotFound" path="*"          />
	</Route>
);
	