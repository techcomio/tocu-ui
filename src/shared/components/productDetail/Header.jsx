/* @jsx React.DOM */
"use strict";

import React      from 'react';
import { Link	}   from 'react-router';
import classNames from 'classnames';


export default React.createClass({

 	getInitialState() {
    return {
      hideHeader: false,
    };
  },

	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll(e) {
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 33;
    this.setState({
      hideHeader: hideHeader
    });
  },

	render() {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-default": true,
      "navbar-fixed-top": true,
      "headerHiden": this.state.hideHeader,
    });

		return (
			<header>
	      <div className="container-fluid">

	      	<nav className={classesNavbar}>
			      <div className="container-fluid">
			        <div className="navbar-header">
			        	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
				        <Link to="/" className="navbar-brand" href="#">
			            <img alt="Brand" src="/img/logo.png" width="40" height="40" />
			          </Link>
			          <p className="navbar-text pull-left">Tổ Cú</p>
			        </div>
			        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		          	<div className="nav navbar-nav navbar-right">
			          	<Link to="/signin" className="btn btn-sm btn-default navbar-btn">Sign in</Link>
                  <Link to="/signup" className="btn btn-sm btn-primary navbar-btn">Sign up</Link>
				        </div>
			        </div>
		        </div>
			    </nav>

	      </div>
	    </header>
		);
	}

});
