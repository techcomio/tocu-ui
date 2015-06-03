/* @jsx React.DOM */
"use strict";

import React from 'react';
import {Link} from 'react-router';

export default class AlbumItem extends React.Component {

  render() {
    return (
      <Link to="album" params={{id: this.props.id}} className="newsItem newCreditItem">
        <div className="newsImg"><span className="imgIcon imgIcon-list imgIcon-bg-yellow"></span></div>
        <div className="newsText">{this.props.text}</div>
      </Link>
    );
  }

}