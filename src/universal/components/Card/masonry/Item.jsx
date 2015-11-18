'use strict';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


export default  class Item extends React.Component {
	render() {
		const { box } = this.props;
		let img_url = "/img/404.jpg";
		let price = box.price ? box.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';
		let salePrice = box.salePrice ? box.salePrice.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : null;
		if(box.images && box.images[0]) {
			img_url = box.images[0].replace(/image\//gi, 'image/230x/');
		}
		return (
      <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="thumbnail thumbnail-masonry" >
          <Link to={`/product/${box.id}`} state={{ modal: true, returnTo: location.pathname }} >
            <img className="imgWrapper" data-holder-rendered="true" src={img_url} alt="images" />
            <div className="infoProduct">
              <span className="title">{box.code}</span>
							{salePrice ? (
								<span className="price">
									<span className="price-list">{price} VNĐ</span>
	                <span className="price-sale">{salePrice} VNĐ</span>
	              </span>
							) : (
								<span className="price">
									<span>{price} VNĐ</span>
	              </span>
							)}
            </div>
          </Link>
          <div className="infoBox border-top">
            <Link to={`/box/${box.BoxId}`} className="nameBox">{box.boxName}</Link>
          </div>
        </div>
      </div>
		);
	}

}
