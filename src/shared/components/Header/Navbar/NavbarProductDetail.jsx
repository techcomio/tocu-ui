'use strict';

import React      from 'react/addons';
import {Link}     from 'react-router';
import classNames from 'classnames';


export default class NavbarProductID extends React.Component {

  constructor (props) {
    super(props)
    this._bind('Like', 'Share', 'Cart', 'handleScroll');

    this.state = {
      hideHeader: false,
      NavbarWidth: null,
    };
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  static propTypes = {
    hideNavbar: React.PropTypes.bool,
    countLike: React.PropTypes.number,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 80;
    this.setState({
      hideHeader: hideHeader,
      NavbarWidth: offsetWidth,
    });
  }
  
  render () {
    let classesNavbar = classNames({
      "navbar-product-detail": true,
      "sticky": this.state.hideHeader
    });

    return (
      <div ref="navbar">
        <div className={classesNavbar} style={{width: this.state.NavbarWidth}} >
          <nav className="navbar navbar-tocu">
            <div className="navbar-header">
              <div className="btn-group">
                <button onClick={this.Like} type="button" className="btn btn-default navbar-btn"><i className="fa fa-heart gray">&nbsp;</i> Thích</button>
                <button type="button" className="btn btn-default count-like navbar-btn"><span>{this.props.product.get('likesCount')}</span></button>
              </div>
              <button onClick={this.Share} type="button" className="btn btn-default navbar-btn"><i className="fa fa-facebook-square gray">&nbsp; </i>Chia sẻ</button>
            </div>
            <div className="nav navbar-nav navbar-right">
              {this.renderBtn()}
            </div>
          </nav>
        </div>
      </div>
    );
	}

  renderBtn() {
    switch(this.props.product.get('status')) {
      case "available":
        return <button onClick={this.Cart} type="button" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart gray">&nbsp; </i> Mua</button>
      case "suspended":
        return <button onClick={this.Cart} type="button" className="btn btn-warning navbar-btn" disabled><i className="fa fa-clock-o gray">&nbsp; </i> Mua</button>
      default:
        return <button onClick={this.Cart} type="button" className="btn btn-warning navbar-btn" disabled><i className="fa fa-clock-o gray">&nbsp; </i> Mua</button>
    }
  }

  boxLogin(cb) {
    if(!this.props.auth.get('access_token')) {
      this.props.handleBoxLogin();
    } else {
      cb();
    }
  }

  Like() {
    this.boxLogin(function() {
      let token  = this.props.auth.get('access_token');
      let type   = this.props.product.get('Box').get('type');
      let itemId = this.props.product.get('id');

      this.props.SanphamActions.like({itemId: itemId, token: token, type: type});
    }.bind(this));
  }

  Share() {
    console.log('Share');
  }

  Cart() {
    let {id, code, boxName, images, price, salePrice, weight, status} = this.props.product.toJS();

    if(!this.props.cartId) {
      this.props.CartActions.createCart({id, code, boxName, imageUrl: images[0], price, salePrice, weight, quantity: 1, status});
    } else {
      this.props.CartActions.pushToCart({id, code, boxName, imageUrl: images[0], price, salePrice, weight, quantity: 1, status}, this.props.cartId);
    }
  }

};
