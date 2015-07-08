"use strict";

import React from 'react';


export default class Detail extends React.Component {

  render() {
    /**
     * format number to string   [250000 => "250.000"]
     * @type {number}
     */
    let price = null;
    let salePrice = null;
    if(this.props.price) {
      price = this.props.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
    }
    if(this.props.salePrice) {
      salePrice = this.props.salePrice.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
    }
    
    if(this.props.salePrice) {
      return (
        <div className="detail">
          <h1>{this.props.name}</h1>
          <h3 className="price">
            <span className="price-list">{price} VNĐ</span>
            <span className="price-sale">{salePrice} VNĐ</span>
          </h3>
        </div>
      );
    } 

    return (
      <div className="detail">
        <h1>{this.props.name}</h1>
        <h3 className="price">
          <span className="price-sale">{price} VNĐ</span>
        </h3>
      </div>
    );
  }
  
};

Detail.propTypes = {
  name: React.PropTypes.string,
  price: React.PropTypes.number,
  salePrice: React.PropTypes.number,
}
