"use strict";
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class AlbumItem extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired
    , text: PropTypes.string.isRequired
  }

  render() {
    return (
      <Link to={`/posts/${this.props.id}`} className="newsItem newCreditItem">
        <div className="newsImg"><span className="imgIcon imgIcon-list imgIcon-bg-blue"></span></div>
        <div className="newsText">{this.props.text}</div>
      </Link>
    );
  }

}
