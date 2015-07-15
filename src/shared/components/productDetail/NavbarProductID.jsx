'use strict';

import React      from 'react';
import {Link}     from 'react-router';
import classNames from 'classnames';


export default class NavbarProductID extends React.Component {

  constructor (props) {
    super(props)

    this.Like  = this.Like.bind(this);
    this.Share = this.Share.bind(this);
    this.Cart  = this.Cart.bind(this);

    this.state = {
      hideHeader: false,
    };
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 33;
    this.setState({
      hideHeader: hideHeader
    });
  }

	render () {
    let classesNavbar = classNames({
      "navbar-product-detail": true,
      "sticky": this.state.hideHeader
    });

    return (
      <div className={classesNavbar} >
        <nav className="navbar navbar-defaul">
          <div className="navbar-header">
            <div className="btn-group">
              <button onClick={this.Like} type="button" className="btn btn-default navbar-btn"><i className="fa fa-heart gray">&nbsp;</i> Thích</button>
              <button type="button" className="btn btn-default count-like navbar-btn"><span>{this.props.countLike}</span></button>
            </div>
            <button onClick={this.Share} type="button" className="btn btn-default navbar-btn"><i className="fa fa-facebook-square gray">&nbsp; </i>Chia sẻ</button>
          </div>
          <div className="nav navbar-nav navbar-right">
            <button onClick={this.Cart} type="button" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart gray">&nbsp; </i> Mua</button>
          </div>
        </nav>
      </div>
    );
	}

  boxLogin(cb) {
    if(!this.props.token) {
      this.props.handleBoxLogin();
    } else {
      cb();
    }
  }

  Like() {
    this.boxLogin(function() {
      console.log('Like')
    });
  }

  Share() {
    this.boxLogin(function() {
      console.log('Share');
    });
  }

  Cart() {
    this.boxLogin(function() {
      console.log('Cart');
    });
  }

};

NavbarProductID.propTypes = {
  hideNavbar: React.PropTypes.bool,
  countLike: React.PropTypes.number,
};