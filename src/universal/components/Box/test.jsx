'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Map, List } from 'immutable';


export default React.createClass({

	displayName: "Test",

	mixins: [],

	getDefaultProps: function() {
		return {
			sizeImg: "230x"
		};
	},

	propTypes: {
	  data: PropTypes.instanceOf(Map).isRequired,
	  sizeImg: PropTypes.string,
	  location: PropTypes.object.isRequired
	},

	render() {
		const { data, location, sizeImg } = this.props;
		let img_url = "/img/404.jpg";
		let images = data.getIn(['images', 0]);
		let price = data.get('price') ? data.get('price').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';
		let salePrice = data.get('salePrice') ? data.get('salePrice').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : null;
		if(typeof images === 'string') {
			img_url = images.replace(/image\//gi, `image/${sizeImg}/`);
		}

		return (
      <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="thumbnail thumbnail-masonry" >
					<Link to={`/product/${data.get('id')}`} state={{ modal: true, returnTo: location.pathname }}>
	          <img className="imgWrapper" data-holder-rendered="true" src={img_url} alt="images" />
						<div className="description">
							<span className="nameBox">{data.get('description')}</span>
            </div>
						<div className="infoProduct border-top">
              <span className="title">{data.get('code')}</span>
		        </div>
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
	        </Link>
        </div>
      </div>
		);
	}

});

/*
Test.defaultProps = {
	sizeImg: "230x"
}

Test.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
  sizeImg: PropTypes.string,
  location: PropTypes.object.isRequired
}
*/
