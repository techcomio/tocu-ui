"use strict";

import React  from 'react';
import {Link} from 'react-router';


export default class Sale extends React.Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Giảm giá</div>
        <div className="list-group">
        	{this.props.listSale.map((item, i) => {
        		let img_url, price, price_sale;

        		if(item.get('images').size) {
			        let url = item.get('images').get(0);
			        img_url = url.replace(/image\//gi, 'image/50x50/');
			      }
			      price = item.get('price').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
			      price_sale = item.get('salePrice') !== null ? item.get('salePrice').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

        		return (
        			<a onClick={this.handleClick.bind(this, item.toJS())} key={i} href={`/product/${item.get('id')}`} className="list-group-item">
		            <div className="list-group-body-item">
		              <div className="img">
		                <span className="imgIcon">
		                  <img src={img_url} />
		                </span>
		              </div>
		              <div className="newsText">
		                <div className="title">{item.get('code')}</div>
		                <div className="price">
		                  <span className="price-list">{price} đ</span>
		                  <span className="price-sale">{price_sale} đ</span>
		                </div>
		              </div>
		            </div>
		          </a>
        		);
        	})}
        </div>
      </div>
    );
  }

  handleClick(sp) {
  	this.props.SanphamActions.actionSanphamID(sp);
  }
  
};
