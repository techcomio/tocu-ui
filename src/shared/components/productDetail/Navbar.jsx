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
      "navbar-product": true,
      "navbar-fixed-top": true,
      headerHiden: this.state.hideHeader,
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