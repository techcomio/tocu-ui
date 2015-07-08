/* @jsx React.DOM */
"use strict";

import React from 'react';
import Router from 'react-router';
/* @jsx */
import Header from './Header';
import Navbar from './Navbar';


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.instanceOf(Router).isRequired
  },

  getInitialState() {
    return {
      hideHeader: false,
      previousScroll: 0
    };
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll(e) {
    var scrollTop = window.scrollY || e.pageY;
    if(scrollTop >= 70) {
  	  var hideHeader = this.state.previousScroll <= scrollTop;

	    this.setState({
	      hideHeader: hideHeader,
	      previousScroll: scrollTop,
	    });
    }
  },

	render() {
		return (
			<div>
				<Header 
          hideHeader={this.state.hideHeader} />
				<Navbar 
          hideHeader={this.state.hideHeader} />
			</div>
		);
	}
})