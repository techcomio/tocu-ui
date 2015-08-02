"use strict";

import React     from 'react/addons';
import ThumbItem from './ThumbItem';


export default class ThumbNail extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.boxs.map((box, i) => {
          return (
            <div key={i} className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
              <ThumbItem handleBoxLogin={this.props.handleBoxLogin} auth={this.props.auth} box={box} />
            </div>
          );
        })}
      </div>
    );
  }
  
};
