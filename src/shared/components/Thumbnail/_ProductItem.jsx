"use strict";

import React  from 'react';


export default class ProductItem extends React.Component {

	render() {
    let images = null;
    if(this.props.i !== 0 && this.props.images) {
      let url = this.props.images[0];
      let img_url = url.replace(/image\//gi, 'image/50x50/');
      images = <img src={img_url} />
    }

    return (
      <div className="newsItem newCreditItem">
        <div className="newsImg">
        	<span className="imgIcon imgIcon-list imgIcon-bg-red">
            {images}
          </span>
        </div>
        <div className="newsText newsInfo">
          <p className="creditTitle">{this.props.code}</p>
          <p><strong className="creditCost">{this.props.price} đ</strong></p>
        </div>
      </div>
    );
  }

}

ProductItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  code: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
}
