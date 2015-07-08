"use strict";

import React  from 'react';


export default class CreditItem extends React.Component {

	render() {
    return (
      <div className="newsItem newCreditItem">
        <div className="newsImg">
        	<span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
        </div>
        <div className="newsText newsInfo">
          <p className="creditTitle">{this.props.name}</p>
          <p><strong className="creditCost">{this.props.price} đ</strong></p>
        </div>
      </div>
    );
  }

}

CreditItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
}
