'use strict';

import React      from 'react';
import { Link }   from 'react-router';
import classNames from 'classnames';


export default class Navbar extends React.Component {

  render() {
    let classesHeaderNameAndImg = classNames({
      fixedHeaderNameAndImage: true,
      hiden: !this.props.transform,
      show: this.props.transform,
    });

    var auth = this.props.auth.toJS();
    
    if(!auth.mobilePhone) {
      return (
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className={classesHeaderNameAndImg}>
              <Link to="/" className="navbar-brand" >
                <img alt="Brand" src="/img/logo.png" width="40" height="40" />
              </Link>
              <p className="navbar-text pull-left">Tổ Cú</p>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="nav navbar-nav navbar-right">
              <Link to="/signin" className="btn btn-sm btn-default navbar-btn">Sign in</Link>
              <Link to="/signup" className="btn btn-sm btn-primary navbar-btn">Sign up</Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className={classesHeaderNameAndImg}>
            <Link to="/" className="navbar-brand" >
              <img alt="Brand" src="/img/logo.png" width="40" height="40" />
            </Link>
            <p className="navbar-text pull-left">Tổ Cú</p>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div className="nav navbar-nav navbar-right">
            <span className="text-name">{auth.name}</span>
            <div className="btn-group">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="Brand" src={auth.avatarUrl} />
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">settings</a></li>
                <li role="separator" className="divider"></li>
                <li><Link to="/signin" onClick={this.handleLogout.bind(this)} >log out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleLogout() {
    this.props.Logout();
  }

};
