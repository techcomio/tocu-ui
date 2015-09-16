'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';


export default class ProductItem extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }

  render() {
    let images = null;
    if(this.props.i !== 0 && this.props.images) {
      const url = this.props.images[0];
      const img_url = url.replace(/image\//gi, 'image/50x50/');
      images = <img src={img_url} />
    }

    return (
      <div className="list-item">
        <div className="item">
          <div className="newsItem newCreditItem">
            <div className="newsImg">
              <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store">
                {images}
              </span>
            </div>
            <div className="newsText newsInfo">
              <p className="creditTitle">{this.props.code}</p>
              <p>
                <strong className="creditCost">{this.props.price} đ</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

};
