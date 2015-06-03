/* @jsx React.DOM */
"use strict";

import React from 'react';
import {Link} from 'react-router';

export default class CreditItem extends React.Component {

	render() {
    return (
      <Link to="sp" params={{id: this.props.id}} className="newsItem newCreditItem">
        <div className="newsImg">
        	<span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
        </div>
        <div className="newsText newsInfo">
          <p className="creditTitle">{this.props.text.title_SP}</p>
          <p><strong className="creditCost">{this.props.text.cost}</strong></p>
        </div>
      </Link>
    );
  }

}