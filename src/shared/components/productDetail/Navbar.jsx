'use strict';

import React      from 'react';
import { Link }   from 'react-router';
import classNames from 'classnames';

export default React.createClass({
 	
 	propTypes: {
	  title: React.PropTypes.string,
	  countLike: React.PropTypes.number
	},

	getInitialState() {
    return {};
  },

	render() {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-default": true,
      "navbar-product": true,
      "navbar-fixed-top": true,
      headerHiden: this.props.hideHeader,
    });

		return (
      <div className="container-fluid">
	    	<nav className={classesNavbar}>
		      <div className="container-fluid">
	          <div className="infoListProduct text-center">
		          <div className="nameinfoListProduct">
		          	{this.props.title}
		          </div>
		          <span className="countListProduct">
		          	{this.props.countLike}
		          </span>
	          </div>
	        </div>
		    </nav>
      </div>
		);
	}
});