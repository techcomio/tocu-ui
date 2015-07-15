'use strict';

import React      from 'react';
import { Link }   from 'react-router';
import classNames from 'classnames';

export default React.createClass({
 	
 	propTypes: {

	},

	render() {
		let img_url = "/img/404.jpg";
	  let price = this.props.price !== null ? this.props.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

	  if(this.props.images) {
      let url = this.props.images[0];
      img_url = url.replace(/image\//gi, 'image/230x/');
	  }

		return (
      <div onClick={this.handleClick} className='col-xs-6 col-sm-4 col-md-3 col-lg-3'>
        <div className="thumbnail" >
          <Link to={`/sp/${this.props.id}`} >
            <div className="imgWrapper">
              <img className="img-rounded" data-holder-rendered="true" src={img_url} alt="images" />
            </div>
            <div className="infoSanpham">
              <span className="titleSanpham">{this.props.name}</span>
              <span className="price">
                {/*<span className="price-list">153.000 VNĐ</span>*/}
                <span className="price-sale">{price} VNĐ</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
		);
	},
  handleClick() {
    this.props.onClick(this.props.data);
  }
});