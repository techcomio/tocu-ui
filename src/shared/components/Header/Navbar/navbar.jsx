'use strict';

import React      from 'react/addons';
import { Link }   from 'react-router';
import classNames from 'classnames';


export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      transform: false
    }
  }

  render() {
    if(!this.props.auth.get('mobilePhone')) {
      return (
        <nav className="navbar navbar-tocu">
          <div className="navbar-header">
            <div className="logo">
              <Link to="/" className="navbar-brand" >
                <img alt="Brand" src="/img/logo.png" />
              </Link>
              <p className="navbar-text pull-left">Tổ Cú</p>
            </div>
          </div>
          <div className="navbar-tocu-right">
            <div className="btn-group">
              <Link to="/signin" className="btn btn-sm btn-link">Sign in</Link>
              <Link to="/signup" className="btn btn-sm btn-primary">Sign up</Link>
            </div>
            <div className="btn-group">
              <Link to="/cart" className="icon cart-menu">
                <span className="count">{this.props.count}</span>
              </Link>
            </div>
            <div className="btn-group">
              <span className="icon menu-bars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
              <div className="dropdown-menu dropdown-menu-right drop-menu">
                <span className="tamgiac"></span>
                <div className="drop-header">
                  <div className="search">
                    <input type="search" placeholder="Search" autofocus />
                    <i className="fa fa-search"></i>
                  </div>
                </div>
                <div className="drop-body">
                  <li><a href="#">test</a></li>
                  <li><a href="#">hihi</a></li>
                  <li><a href="#">test</a></li>
                  <li><a href="#">hihi</a></li>
                </div>
                <div className="drop-footer">
                  <li><Link to="/about">about</Link></li>
                  <li><Link to="/chinhsachmuahang">chính sách mua hàng</Link></li>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }

    return (
      <nav className="navbar navbar-tocu">
        <div className="navbar-header">
          <div className="logo">
            <Link to="/" className="navbar-brand" >
              <img alt="Brand" src="/img/logo.png" />
            </Link>
            <p className="navbar-text pull-left">Tổ Cú</p>
          </div>
        </div>
        <div className="navbar-tocu-right">
          <div className="btn-group">
            <Link to="/cart" className="icon cart-menu">
              <span className="count">{this.props.count}</span>
            </Link>
          </div>
          <div className="btn-group">
            <span className="icon menu-bars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
            <div className="dropdown-menu dropdown-menu-right drop-menu">
              <span className="tamgiac"></span>
              <div className="drop-header">
                <div className="search">
                  <input type="search" placeholder="Search" autofocus />
                  <i className="fa fa-search"></i>
                </div>
              </div>
              <div className="drop-body">
                <li><a href="#">test</a></li>
                <li><a href="#">hihi</a></li>
                <li><a href="#">test</a></li>
                <li><a href="#">hihi</a></li>
              </div>
              <div className="drop-footer">
                <li><Link to="/about">about</Link></li>
                <li><Link to="/chinhsachmuahang">chính sách mua hàng</Link></li>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img alt="avatar" src={this.props.auth.get('avatarUrl')} />
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li><a href="#">Settings</a></li>
              <li role="separator" className="divider"></li>
              <li><Link to="/signin" onClick={this.handleLogout} >Log out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  handleLogout = (e) => {
    this.props.AuthActions.Logout();
  }

};
