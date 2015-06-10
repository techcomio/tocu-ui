'use strict';

import React from 'react';
import {Route, Routes, DefaultRoute, NotFoundRoute, RouteHandler, Link} from 'react-router';

/* @jsx */
import App from './handlers/App';
import Home from './handlers/Home';
import NotFound from './handlers/NotFound';
import Posts from './handlers/Posts';
import Sanpham from './handlers/Sanpham';
import Album from './handlers/Album';
import SignIn from './handlers/SignIn';
import SignUp from './handlers/SignUp';
import SignInTest from './handlers/SignInTest';


const routers = (
  <Route handler={App}>
		<Route name="signin" path="/signin" handler={SignIn} />
		<Route name="signup" path="/signup" handler={SignUp} />
		<Route name="signintest" path="/signintest" handler={SignInTest} />
		<Route name="home" path="/" handler={Home} />
		<Route name="posts" path="/posts/:id" handler={Posts} />
		<Route name="sp" path="/sp/:id" handler={Sanpham} />
		<Route name="album" path="/album/:id" handler={Album} />
	  <NotFoundRoute name="notFound" handler={NotFound} />
  </Route>
);

export default routers;
