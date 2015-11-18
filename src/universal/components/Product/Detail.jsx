"use strict";
import React, { PropTypes } from 'react';
import Immutable from 'immutable';


export default class Detail extends React.Component {

  render() {
    return (
      <div className="detail">
        <h2>{this.props.product.get('code')}</h2>
        {this.renderPrice()}
      </div>
    );
  }

  renderPrice() {
    /**
     * format number to string   [250000 => "250.000"]
     * @type {number}
     */
    let price = null;
    let salePrice = null;
    if(this.props.product.get('price')) {
      price = this.props.product.get('price').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
    }
    if(this.props.product.get('salePrice')) {
      salePrice = this.props.product.get('salePrice').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
    }

    if(this.props.product.get('salePrice')) {
      return (
        <h4 className="price">
          <span className="price-list">{price} VNĐ</span>
          <span className="price-sale">{salePrice} VNĐ</span>
        </h4>
      )
    } else {
      return (
        <h4 className="price">
          <span className="price-sale">{price} VNĐ</span>
        </h4>
      );
    }
  }

};

Detail.propTypes = {
  product: PropTypes.instanceOf(Immutable.Map).isRequired,
}
