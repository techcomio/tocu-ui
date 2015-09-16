'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connectReduxForm } from 'redux-form';
import * as cartAction from '../../actions/cart';
import * as boxRequireAuth from '../../actions/boxRequireAuth';
import Navbar from './Navbar';


@connect(state => ({
  cart: state.cart
  , auth: state.auth
}), dispatch => ({
  capnhatCart: () => dispatch(cartAction.capnhatCart())
  , destroyCart: ({id}) => dispatch(cartAction.destroyCart({id}))
  , loginShow: () => dispatch(boxRequireAuth.loginShow())
  , verifyShow: () => dispatch(boxRequireAuth.verifyShow())
}))

export default class CartContent extends React.Component {

  render() {
    const { auth, capnhatCart, loginShow, verifyShow } = this.props;

    return (
      <div className="cart">
        <Navbar auth={auth}
              loginShow={loginShow}
              verifyShow={verifyShow}
              capnhatCart={capnhatCart} />

        <div className="cart-table">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="hidden-sm-down hidden-xs-down">#</th>
                  <th className="td-sanpham">Sản phẩm</th>
                  <th>Giá</th>
                  <th className="hidden-sm-down hidden-xs-down acenter">SL</th>
                  <th className="hidden-sm-down hidden-xs-down aright">Thành tiền</th>
                  <th className="delete">Xóa</th>
                </tr>
              </thead>
              <tbody>
                {this.renderItem()}
              </tbody>
              <tfoot>
                <tr className="padT20">
                  <td className="hidden-sm-down hidden-xs-down" scope="row"></td>
                  <td className="hidden-sm-down hidden-xs-down"></td>
                  <td className="hidden-sm-down hidden-xs-down"></td>
                  <td colSpan="1">Trước giảm giá:</td>
                  <td className="aright" colSpan="1">{::this.getTotalCart()}đ</td>
                  <td colSpan="1">&nbsp;</td>
                </tr>
                <tr className="total">
                  <td className="hidden-sm-down hidden-xs-down" scope="row"></td>
                  <td className="hidden-sm-down hidden-xs-down"></td>
                  <td className="hidden-sm-down hidden-xs-down"></td>
                  <td colSpan="1">Tổng:</td>
                  <td className="aright" colSpan="1">{::this.getTotalCartSale()}đ</td>
                  <td colSpan="1">&nbsp;</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }

  renderItem = () => {
    const { cart } = this.props;
    if(cart.getIn(['Cart', 'lines'])) {
      return cart.getIn(['Cart', 'lines']).map((item, i) => {
        let url = item.get('imageUrl')
          , imgUrl;
        if(url) {
          imgUrl = url.replace(/image\//gi, 'image/50x50/');
        }

        let price = null;
        let salePrice = null;
        if(item.get('price')) {
          price = this.formatNumber(item.get('price'));
        }
        if(item.get('salePrice')) {
          salePrice = this.formatNumber(item.get('salePrice'));
        }

        let classer = classNames({
          disabled: item.get('status') !== "available"
        });

        return (
          <tr key={i} className={classer}>
            <th className="hidden-sm-down hidden-xs-down" scope="row">{i+1}</th>
            <td>
              <div className="imageIcon"><img src={imgUrl} /></div>
              <div className="nameInfo">
                <span className="code">{item.get('code')}</span>
                <span className="name">{item.get('boxName')}</span>
              </div>
            </td>
            <td>{this.renderPrice(item, price, salePrice)}</td>
            <td className="hidden-sm-down hidden-xs-down acenter"><div>1</div></td>
            <td className="hidden-sm-down hidden-xs-down aright"><div>{salePrice || price}đ</div></td>
            <td className="delete"><div><i onClick={this._onClickDestroy.bind(this, item.get('id'))} className="destroy"></i></div></td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="6">
            <div className="text-center">
              Giỏ hàng của bạn không có sản phẩm nào!
            </div>
          </td>
        </tr>
      )
    }
  }

  formatNumber = (number) => {
    return number.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
  }

  renderPrice = (item, price, salePrice) => {
    if(item.get('salePrice')) {
      return (
        <div>
          <span className="sale">{price}đ</span>
          <span>{salePrice}đ</span>
        </div>
      )
    } else {
      return (
        <div>
          <span>{price}đ</span>
        </div>
      );
    }
  }

  _onClickDestroy(id) {
    this.props.destroyCart({id});
  }

  getTotalCart() {
    let total = 0,
      { cart } = this.props;

    if(cart.getIn(['Cart','lines'])) {
      cart.getIn(['Cart','lines']).forEach((product, key) => {
        if(product.get('status') === "available") {
          total += product.get('price');
        }
      });
    }

    return this.formatNumber(total);
  }

  getTotalCartSale() {
    let total = 0,
      { cart } = this.props;

    if(cart.getIn(['Cart','lines'])) {
      cart.getIn(['Cart','lines']).forEach((product, key) => {
        if(product.get('status') === "available") {
          total += product.get('salePrice') ? product.get('salePrice') : product.get('price');
        }
      });
    }

    return this.formatNumber(total);
  }

}
