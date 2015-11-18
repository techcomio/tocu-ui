'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link }   from 'react-router';
import { logOut } from '../../actions/auth';
import NavLeft from '../NavLeft';


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

    if(!user.get('access_token')) {
      return (
        <div>
          <nav className="navbar navbar-fixed-top navbar-light bg-faded">
            <div className="navbar-header">
              <div className="navbar-brand">
                <div className="btn-menu" onClick={::this._toggle}><span className="icon-menu" /></div>
                <Link to="/">
                  <img className="logo" alt="Brand" src="/img/logo.png" />
                  {/*<span className="title-inc">Tổ Cú</span> */}
                </Link>
              </div>
            </div>
            <div className="navbar-right pull-right">
              <Link to="/cart" className="btn btn-sm btn-link icon-cart">
                <div className="cart-menu">
                  <span className="label label-pill label-success count">{cart.get('lines') ? cart.get('lines').size : 0}</span>
                </div>
              </Link>
              <Link to="/signin" className="btn btn-sm btn-link">Đăng nhập</Link>
              <Link to="/signup" className="btn btn-sm btn-primary-outline">Đăng ký</Link>
            </div>
          </nav>
          <NavLeft ref="navLeft" docked={false}>
            NavLeft
            <p>sdf</p>
          </NavLeft>
        </div>
      );
    }

    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-light bg-faded">
          <div className="navbar-header">
            <div className="navbar-brand">
              <div className="btn-menu" onClick={::this._toggle}><span className="icon-menu" /></div>
              <Link to="/">
                <img className="logo" alt="Brand" src="/img/logo.png" />
                {/*<span className="title-inc">Tổ Cú</span> */}
              </Link>
            </div>
          </div>
          <div className="navbar-right pull-right">
            <Link to="/cart" className="btn btn-sm btn-link icon-cart">
              <div className="cart-menu">
                <span className="label label-pill label-success count">{cart.get('lines') ? cart.get('lines').size : 0}</span>
              </div>
            </Link>
            <div className="btn-group btn-avata">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img alt="avatar" src={user.get('avatarUrl')} /></button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Settings</a>
                <div role="separator" className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/signin" onClick={this.handleLogout.bind(this)} >Log out</Link>
              </div>
            </div>
          </div>
        </nav>
        <NavLeft ref="navLeft" docked={false}>
          NavLeft
          <p>sdf</p>
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

};
