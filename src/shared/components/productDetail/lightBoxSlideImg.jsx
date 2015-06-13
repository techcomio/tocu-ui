/* @jsx React.DOM */
"use strict";

import React from 'react';
import classNames from 'classnames';


export default class lightBoxSlideImg extends React.Component {

  constructor(props) {
    super(props);

    this.HideLightBox = this.HideLightBox.bind(this);

  }

  render() {
    let classes = classNames({
      lightBoxSlideImg: true,
      show: this.props.showLightBox,
    });

    return (
      <div className={classes} onClick={this.HideLightBox}>
        {this.props.current}
      </div>
    );
  }

  HideLightBox() {
    this.props.HideLightBox();
  }

};
