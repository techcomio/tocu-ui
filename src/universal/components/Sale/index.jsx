"use strict";
import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';


@connect(state => ({
  sales: state.sale.get('sales')
}))

export default class Sale extends React.Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Giảm giá</div>
        <div className="list-group">
        	{this.props.sales.toJS().map((item, i) => {
        		let img_url, price, price_sale;

        		if(item.images[0]) {
			        let url = item.images[0];
			        img_url = url.replace(/image\//gi, 'image/50x50/');
			      }
			      price = item.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
			      price_sale = item.salePrice ? item.salePrice.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

        		return (
        			<Link to={`/product/${item.id}`} key={i} className="list-group-item">
		            <div className="list-group-body-item">
		              <div className="img">
		                <span className="imgIcon">
		                  <img src={img_url} />
		                </span>
		              </div>
		              <div className="newsText">
		                <div className="title">{item.code}</div>
		                <div className="price">
		                  <span className="price-list">{price} đ</span>
		                  <span className="price-sale">{price_sale} đ</span>
		                </div>
		              </div>
		            </div>
		          </Link>
        		);
        	})}
        </div>
      </div>
    );
  }

};
