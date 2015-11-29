'use strict';
import React from 'react';
import { findDOMNode } from 'react-dom';
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
    var offsetWidth = findDOMNode(this.refs.navbar).offsetWidth;
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
    this.props.cartActions.capnhatCart();
  },

  _onClickMua(e) {
    const self = this;
    // this.props.capnhatCart(function() {
    //   const { auth } = self.props;
    //   if(auth.getIn(['user', 'access_token'])) {
    //     // if(auth.getIn(['user', 'isVerifyMobilePhone'])) {
    //     //   self.history.pushState(null, '/checkout');
    //     // } else {
    //     //   self.props.verifyShow();
    //     // }
    //     self.history.pushState(null, '/checkout');
    //     console.log('Enable verifyShow');
    //   } else {
    //     self.props.loginShow();
    //   }
    // });
    this.props.cartActions.capnhatCartExport()
      .then((res) => {
      })
      .catch((res) => {
        const { auth } = self.props;
        if(res.status === 304) {
          if(auth.getIn(['user', 'access_token'])) {
            // if(auth.getIn(['user', 'isVerifyMobilePhone'])) {
            //   self.history.pushState(null, '/checkout');
            // } else {
            //   self.props.verifyShow();
            // }
            self.history.pushState(null, '/checkout');
            console.log('Enable verifyShow');
          } else {
            self.props.loginShow();
          }
        }
        // this.props.cartActions.capnhatCartFail(res.data);
      });
  },

});
