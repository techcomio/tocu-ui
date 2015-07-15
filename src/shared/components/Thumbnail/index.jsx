"use strict";

import React     from 'react';
import ThumbItem from './ThumbItem';


export default class ThumbNail extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.posts.map((post, i) => {
          return (
            <div key={i} className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
              <ThumbItem handleBoxLogin={this.props.handleBoxLogin} token={this.props.token} {...post.toJS()} />
            </div>
          );
        })}
      </div>
    );
  }
  
};
