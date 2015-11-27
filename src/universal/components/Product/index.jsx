'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createCart, pushCart } from '../../actions/cart';
import * as cartaction from '../../actions/cart';
import Navbar from './Navbar';
import ImgSlide from './imgSlide';
import Detail from './Detail';
import Info from './Info';
import Mau from './Mau';
import { notifActions } from 'redux-notif';

@connect(state => ({
  user: state.auth.get('user')
  , product: state.product.get('productId')
  , cart: state.cart
}), dispatch => ({
  cartActions: bindActionCreators(cartaction, dispatch)
  , notiActions: bindActionCreators(notifActions, dispatch)
}))

export default class ProductContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user, cart, product, notiActions, cartActions, href } = this.props;

    return (
      <div className="productDetail">
        <Navbar user={user}
                cart={cart}
                href={href}
                notif={notiActions.notifSend}
                product={product}
                pushCart={cartActions.pushCart}
                createCart={cartActions.createCart} />

        <div className="product">
          {/* Slide image */}
	        <ImgSlide
	          images={product.get('images').toJS()} />

          <div className="product-detail">
            {/* Detail */}
  	          <Detail
  	          	product={product} />

              <div className="row">
  	            <div className="col-md-6">
  	              {/* Thong tin San pham */}
  	              <Info
  			          	product={product} />
  	            </div>
  	            <div className="col-md-6">
  	              {/* Thong tin Mẫu */}
  	              <Mau
  	              	model={product.get('Model')} />

  	            </div>
  	          </div>
          </div>
        </div>
      </div>
    );
  }

};
