/* @jsx React.DOM */
"use strict";

import React  from 'react/addons';
import {Link} from 'react-router';

export default class CreditItem extends React.Component {

  render() {
    return (
      <Link to={`/posts/${this.props.id}`} className="newsItem newCreditItem">
        <div className="newsImg"><span className="imgIcon imgIcon-list imgIcon-bg-blue"></span></div>
        <div className="newsText">{this.props.text}</div>
      </Link>
    );
  }
  
}