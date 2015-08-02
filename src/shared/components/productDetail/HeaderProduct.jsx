"use strict";

import React  from 'react/addons';
import Router from 'react-router';
/* @Component */
import AltContainer from 'alt/AltContainer';
import Header       from './Header';
import Navbar       from './Navbar';


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.instanceOf(Router).isRequired
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
		return (
			<div>
        <Header 
          hideHeader={this.state.hideHeader} />

				<Navbar
          info={this.props.info}
          auth={this.props.auth}
          handleBoxLogin={this.props.handleBoxLogin}
          BoxActions={this.props.BoxActions}
          hideHeader={this.state.hideHeader} />

			</div>
		);
	},

});
