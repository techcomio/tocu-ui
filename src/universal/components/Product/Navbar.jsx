'use strict';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import { notifActions } from 'redux-notif';

export default class NavbarProduct extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hideHeader: false
      , NavbarWidth: null
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    var offsetWidth = ReactDOM.findDOMNode(this.refs.navbar).offsetWidth;
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 30;
    this.setState({
      hideHeader: hideHeader,
      NavbarWidth: offsetWidth,
    });
  }

  render() {
    const { user, product, href } = this.props;
    let classesNavbar = classNames({
        "navbar-product-detail": true,
        "sticky": this.state.hideHeader
      });

    return (
      <div ref="navbar">
        <div className={classesNavbar} style={{width: this.state.NavbarWidth}} >
          <nav className="navbar navbar-light navbar-tocu">
            <div className="navbar-header navbar-left">
              <div className="fb-share-button" data-href={href} data-layout="button_count"></div>
            </div>
            <div className="navbar-right pull-right">
              {this.renderBtn()}
            </div>
          </nav>
        </div>
      </div>
    );
  }

  renderBtn = () => {
    switch(this.props.product.get('status')) {
      case "available":
        return <button onClick={::this.Cart} type="button" className="btn btn-primary btn-sm navbar-btn"><i className="fa fa-shopping-cart gray">&nbsp; </i> Thêm vào giỏ</button>
      case "suspended":
        return <button onClick={::this.Cart} type="button" className="btn btn-warning btn-sm navbar-btn" disabled><i className="fa fa-clock-o gray">&nbsp; </i> Thêm vào giỏ</button>
      default:
        return <button onClick={::this.Cart} type="button" className="btn btn-warning btn-sm navbar-btn" disabled><i className="fa fa-clock-o gray">&nbsp; </i> Thêm vào giỏ</button>
    }
  }

  Cart() {
    const { user, cart, pushCart, createCart, product } = this.props;
    const {id, code, boxName, images, price, salePrice, weight, status} = product.toJS();
    if(!cart.getIn(['Cart', 'lines']) && !cart.getIn(['Cart', 'id'])) {
      createCart({id, code, boxName, imageUrl: images[0], price, salePrice, weight, quantity: 1, status});
    } else {
      pushCart({id, code, boxName, imageUrl: images[0], price, salePrice, weight, quantity: 1, status});
    }
  }

};
