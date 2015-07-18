"use strict";

import React     from 'react';
import ThumbItem from './ThumbItem';


export default class ThumbNail extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.boxs.map((box, i) => {
          return (
            <div key={i} className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
              <ThumbItem handleBoxLogin={this.props.handleBoxLogin} userID={this.props.userID} token={this.props.token} {...box.toJS()} />
            </div>
          );
        })}
      </div>
    );
  }
  
};
