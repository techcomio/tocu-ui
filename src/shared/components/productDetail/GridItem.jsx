'use strict';

import React      from 'react';
import { Link }   from 'react-router';
import classNames from 'classnames';

export default React.createClass({
 	
 	propTypes: {
	  to: React.PropTypes.string.isRequired,
	  id: React.PropTypes.number.isRequired,
	  title: React.PropTypes.string.isRequired,
	  img_url: React.PropTypes.string.isRequired,
	},

	render() {
		let price = '';
		if(this.props.priceSale) {
			price = (
				<span className="price">
	        <span className="price-list">153.000 VNĐ</span>
	        <span className="price-sale">123.000 VNĐ</span>
	      </span>
			);
		} else {
			price = (
				<span className="price">
	        <span className="price-sale">153.000 VNĐ</span>
	      </span>
			)
		}

		return (
      <div key={i} className='col-xs-6 col-sm-4 col-md-3 col-lg-3'>
        <div className="thumbnail" >
          <Link to={`/sp/${i}`} >
            <div className="imgWrapper">
              <img className="img-rounded" data-holder-rendered="true" src="/img/404.jpg" alt="100%x200" />
            </div>
            <div className="infoSanpham">
              <span className="titleSanpham">Title</span>
              {price}
            </div>
          </Link>
        </div>
      </div>
		);
	}
});