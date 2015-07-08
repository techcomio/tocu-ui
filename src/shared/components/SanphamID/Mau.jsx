"use strict";

import React from 'react';


export default class Mau extends React.Component {

  render() {
    return (
      <ul>
        <li className="border-bottom-2"><strong>Mẫu: </strong> {this.props.name}</li>
        <li>Cao: <strong>{this.props.height} cm</strong></li>
        <li>Nặng: <strong>{this.props.weight} kg</strong></li>
        <li>Vòng 1: <strong>{this.props.bust} cm</strong></li>
        <li>Vòng 2: <strong>{this.props.waist} cm</strong></li>
        <li>Vòng 3: <strong>{this.props.hip} cm</strong></li>
      </ul>
    );
  }
  
};

Mau.propTypes = {
  name: React.PropTypes.string,
  height: React.PropTypes.number,
  weight: React.PropTypes.number,
  bust: React.PropTypes.number,
  waist: React.PropTypes.number,
  hip: React.PropTypes.number,
};