'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logOut } from '../../actions/auth';


export default class NavLeft extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hide: true
    }
  }

  render() {
    const { user } = this.props;
    const classerNavLeft = classNames({
      'hide-s': this.state.hide
      , 'notUser': !user.get('access_token')
    });
    return (
      <div className={classerNavLeft} >
        <div className="nav-left" onClick={::this.navOnclick} />
        <div className="side-nav" >
          <div className="auth-nav">
            <div className="auth-body">
              <img className="avatar" alt="avatar" src={user.get('avatarUrl')} />
              <div className="auth-name">{user.get('name')}</div>
            </div>
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
      </div>
    );
  }

  navOnclick(e) {
    this.setState({
      hide: true
    });
  }

  showNav = () => {
    this.setState({
      hide: false
    });
  }

};

//
// };
