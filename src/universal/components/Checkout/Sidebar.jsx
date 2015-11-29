'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { connectReduxForm } from 'redux-form';


@connect(state => ({
  cart: state.cart
  , order: state.order
}))


export default class SiderbarCheckout extends React.Component {

  render() {
    const { order } = this.props;
    return (
      <div className="sidebars">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <div className="panel-title">
                <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  GIỎ HÀNG <i className="fa fa-angle-down pull-right"></i>
                </a>
              </div>
            </div>
            <div aria-expanded="true" id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                <ul className="list-group">
                  {::this.renderItem()}
                </ul>
                <div className="panel-footer">
                  <div className="panel-table">
                    <div className="panel-key">Tổng tiền hàng:</div>
                    <div className="panel-val">{::this.getTotalCartSale()}đ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <div className="panel-title">
                <a className="" role="button" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  VẬN CHUYỂN <i className="fa fa-angle-down pull-right"></i>
                </a>
              </div>
            </div>
            <div aria-expanded="true" id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body panel-vanchuyen">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="panel-list">
                      <div className="panel-key">Phí:</div>
                      <div className="panel-val">{this.getPhiShip()} đ</div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="panel-list">
                      <div className="panel-key">Thời gian:</div>
                      <div className="panel-val">{order.getIn(['phiship', 'shippingDays']) || '_'} ngày</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {order.getIn(['phiship', 'shippingCost']) && (
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTue">
                <div className="panel-title">
                  <a className="" role="button" data-toggle="collapse" href="#collapseTue" aria-expanded="true" aria-controls="collapseTue">
                    TỔNG <i className="fa fa-angle-down pull-right"></i>
                  </a>
                </div>
              </div>
              <div aria-expanded="true" id="collapseTue" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTue">
                <div className="panel-body panel-vanchuyen">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="panel-list">
                        <div className="panel-key">Tổng Tiền:</div>
                        <div className="panel-val">{this.getTotal()} đ</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  renderItem() {
    const { cart } = this.props;
    if(cart.getIn(['Cart', 'lines'])) {
      return cart.getIn(['Cart', 'lines']).map((item, i) => {
        let url = item.get('imageUrl')
          , imgUrl;
        if(url) {
          imgUrl = url.replace(/\.(jpg|jpeg|png|gif)$/, '-50x50.$1');
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
          "list-group-item": true
          , disabled: item.get('status') !== "available"
        });

        return (
          <li key={i} className={classer}>
            <div className="list-group-body-item">
              <div className="img">
                <span className="imgIcon">
                  <img src={imgUrl} />
                </span>
              </div>
              <div className="newsText">
                <div className="title">{item.get('code')}</div>
                <div className="price">
                  <span className="price-list">{salePrice || price}đ</span>
                </div>
              </div>
            </div>
          </li>
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
    if(typeof number === "number") {
      return number.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
    } else {
      return 0;
    }
  }

  getPhiShip = () => {
    let phi = null;
    const { order } = this.props;
    if(order.getIn(['phiship', 'shippingCost'])) {
      phi = order.getIn(['phiship', 'shippingCost']);
    }
    return typeof phi === "number" ? phi.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '_'
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

  getTotal() {
    let total = 0,
      { cart, order } = this.props;

    if(cart.getIn(['Cart','lines'])) {
      cart.getIn(['Cart','lines']).forEach((product, key) => {
        if(product.get('status') === "available") {
          total += product.get('salePrice') ? product.get('salePrice') : product.get('price');
        }
      });
    }

    if(order.getIn(['phiship', 'shippingCost'])) {
      total += order.getIn(['phiship', 'shippingCost']);
    }

    return this.formatNumber(total);
  }

}
