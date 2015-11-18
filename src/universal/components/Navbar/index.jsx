'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link }   from 'react-router';
import { logOut } from '../../actions/auth';
import NavLeft from '../NavLeft';
import BoxDropdown from './BoxDropdown';


@connect(state => ({
  user: state.auth.get('user')
  , cart: state.cart.get('Cart')
}))

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user, cart } = this.props;

    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-light bg-faded">
          <div className="navbar-header">
            <div className="navbar-brand">
              <div className="btn-menu" onClick={::this._toggle}><span className="icon-menu" /></div>
            </div>
            <Link to="/" >
              <img className="logo" alt="Brand" src="/img/logo.png" />
            </Link>
          </div>
          <div className="navbar-right pull-right">
            <Link to="/cart" className="btn btn-sm btn-link icon-cart">
              <div className="cart-menu">
                <span className="label label-pill label-success count">{cart.get('lines') ? cart.get('lines').size : 0}</span>
              </div>
            </Link>
            {user.get('access_token') && (
              <div className="btn-group btn-avata btn-avata-navbar">
                <span className="dropdown-toggle" onClick={::this.test}><img alt="avatar" src={user.get('avatarUrl')} /></span>
                <BoxDropdown ref="boxdropdown">
                  <li><Link to="/order">Đơn hàng đã đặt</Link></li>
                  <li><div role="separator" className="dropdown-divider"></div></li>
                  <li><a href="#">Settings</a></li>
                  <li><Link to="/signin" onClick={this.handleLogout.bind(this)} >Log out</Link></li>
                </BoxDropdown>
              </div>
            )}
          </div>
        </nav>
        <NavLeft ref="navLeft" docked={false}>
          <div className="side-nav" >
            <div className="auth-nav">
              {user.get('access_token') ? (
                <div className="auth-body">
                  <div className="btn-group btn-avata">
                    <span className="btn dropdown-toggle" onClick={::this.test2}><img alt="avatar" src={user.get('avatarUrl')} /></span>
                    <BoxDropdown ref="boxdropdown2" className="bubble-dropdown-left">
                      <li><Link to="/order">Đơn hàng đã đặt</Link></li>
                      <li><div role="separator" className="dropdown-divider"></div></li>
                      <li><a href="#">Settings</a></li>
                      <li><Link to="/signin" onClick={this.handleLogout.bind(this)} >Log out</Link></li>
                    </BoxDropdown>
                  </div>
                  <div className="auth-name">{user.get('name')}</div>
                </div>
              ) : (
                <div className="auth-body">
                  <div className="link-signin">
                    <span><Link to="/signin">Đăng nhập</Link> Tổ Cú</span>
                  </div>
                </div>
              )}
            </div>
            <div className="nav-left-body">
              <ul>
                <li><Link activeClassName="active" to="/">Box</Link></li>
                <li><Link activeClassName="active" to="/product">Sản phẩm</Link></li>
                <li><Link activeClassName="active" to="/album">Ảnh</Link></li>
                <li><Link activeClassName="active" to="/post">Bài Viết</Link></li>
              </ul>
            </div>
            <div className="nav-left-footer">
              <Link to="/about">Giới thiệu</Link>
              <span role="presentation" aria-hidden="true"> · </span>
              <Link to="/dieukhoan">Điều khoản mua hàng</Link>
              <div className="FooterCopyright"><span>Techcomio © 2015</span></div>
            </div>
          </div>
        </NavLeft>
      </div>
    );
  }

  handleLogout(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logOut());
  }

  _toggle(e) {
    e.preventDefault();
    this.refs.navLeft.toggle();
  }

  test = (e) => {
    e.preventDefault();
    this.refs.boxdropdown.toggle();
  }

  test2 = (e) => {
    e.preventDefault();
    this.refs.boxdropdown2.toggle();
  }

};
