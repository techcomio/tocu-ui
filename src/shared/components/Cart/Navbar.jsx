'use strict';

import React from 'react/addons';
import { Link, History } from 'react-router';
import classNames from 'classnames';


export default React.createClass({

  mixins: [ History ],

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

  handleScroll(e) {
    var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 50;
    this.setState({
      hideHeader: hideHeader,
      NavbarWidth: offsetWidth,
    });
  },

  render () {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-light": true,
      "sticky": this.state.hideHeader,
    });

    return (
      <div ref="navbar">
        <nav className={classesNavbar} style={{width: this.state.NavbarWidth}}>
          <div className="navbar-header navbar-left">
            <div><i className="icon icont-cart"></i></div>
            <div><span className="title-nav-cart">Cart</span></div>
          </div>
          <div className="navbar-right pull-right">
            <button onClick={this.onClickCapNhat} type="button" className="btn btn-secondary btn-sm">Cập nhật</button>
            <button onClick={this._onClickMua} type="button" className="btn btn-primary btn-sm">Mua</button>
          </div>
        </nav>
      </div>
    );
  },

  onClickCapNhat(e) {
    this.props.capnhatCart();
  },

  _onClickMua(e) {
    const { auth } = this.props;
    if(auth.getIn(['user', 'access_token'])) {
      // if(auth.getIn(['user', 'isVerifyMobilePhone'])) {
      //   this.history.pushState(null, '/checkout');
      // } else {
      //   this.props.verifyShow();
      // }
      this.history.pushState(null, '/checkout/from');
      console.log('Enable verifyShow');
    } else {
      this.props.loginShow();
    }
  },

});
