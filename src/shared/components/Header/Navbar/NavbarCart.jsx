'use strict';

import React from 'react/addons';
import { Link, Navigation } from 'react-router';
import classNames from 'classnames';


export default React.createClass({

  mixins: [ Navigation ],

  getInitialState() {
    return {
      hideHeader: false,
      NavbarWidth: null,
    }
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  componentWillUpdate() {
    if(this.props.status = "success") {
    }
  },

  handleScroll(e) {
    var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 80;
    this.setState({
      hideHeader: hideHeader,
      NavbarWidth: offsetWidth,
    });
  },
  
  render () {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-defaul": true,
      "sticky": this.state.hideHeader,
    });
    
    return (
      <div ref="navbar">
        <nav className={classesNavbar} style={{width: this.state.NavbarWidth}}>
          <div className="navbar-header">
            <div><i className="icon icont-cart"></i></div>
            <div><span className="title-nav-cart">Cart</span></div>
          </div>
          <div className="nav navbar-nav navbar-right">
            <button onClick={this._onClickCapNhat} type="button" className="btn btn-default navbar-btn">Cập nhật</button>
            <button onClick={this._onClickMua} type="button" className="btn btn-primary navbar-btn">Mua</button>
          </div>
        </nav>
      </div>
    );
  },

  boxLogin(cb) {
    if(!this.props.auth.get('access_token')) {
      this.props.handleBoxLogin();
    } else {
      cb();
    }
  },

  _onClickCapNhat(e) {
    this.props.CartActions.capnhatCart();
  },

  _onClickMua(e) {
    var self = this;
    this.boxLogin(() => {
      self.transitionTo('/cart/checkout');
    });
  },

});
