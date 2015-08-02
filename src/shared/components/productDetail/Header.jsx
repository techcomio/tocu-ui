/* @jsx React.DOM */
"use strict";

import React       from 'react/addons';
import { Link	}    from 'react-router';
import classNames  from 'classnames';
import AuthStore   from '../../store/AuthStore';
import AuthActions from '../../actions/AuthActions';

export default React.createClass({

 	getInitialState() {
    return {
    	hideHeader: false,
    	...AuthStore.getState().auth.toJS()
    }
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    AuthStore.listen(this.handleAuthStore);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    AuthStore.unlisten(this.handleAuthStore);
  },

  handleScroll(e) {
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 33;
    this.setState({
      hideHeader: hideHeader
    });
  },

  handleAuthStore(state) {
  	this.setState({
  		...state.auth.toJS(),
  	})
  },

	render() {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-default": true,
      "navbar-fixed-top": true,
      "headerHiden": this.state.hideHeader,
    });

    if(!this.state.mobilePhone) {
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
			          	<span className="text-name">{this.state.name}</span>
			            <div className="btn-group">
			              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			                <img alt="Brand" src={this.state.avatarUrl} />
			              </button>
			              <ul className="dropdown-menu">
			                <li><a href="#">settings</a></li>
			                <li role="separator" className="divider"></li>
			                <li><Link to="/signin" onClick={this.handleLogout} >log out</Link></li>
			              </ul>
			            </div>
				        </div>
			        </div>
		        </div>
			    </nav>

	      </div>
	    </header>
    );
	},

	handleLogout() {
		AuthActions.Logout(localStorage.access_token);
	},

});
