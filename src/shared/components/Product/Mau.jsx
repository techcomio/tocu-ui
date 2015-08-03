"use strict";

import React, { PropTypes } from 'react/addons';
import Immutable            from 'immutable';


export default class Mau extends React.Component {

  render() {
    if(this.props.model) {
      return (
        <ul>
          <li className="border-bottom-2"><strong>Mẫu: </strong></li>
          <li>Cao: <strong>{this.props.model.get('height')} cm</strong></li>
          <li>Nặng: <strong>{this.props.model.get('weight')} kg</strong></li>
          <li>Vòng 1: <strong>{this.props.model.get('bust')} cm</strong></li>
          <li>Vòng 2: <strong>{this.props.model.get('waist')} cm</strong></li>
          <li>Vòng 3: <strong>{this.props.model.get('hip')} cm</strong></li>
        </ul>
      );
    } else {
       return (
        <ul>
          <li className="border-bottom-2"><strong>Mẫu: </strong></li>
          <li>Cao: <strong> cm</strong></li>
          <li>Nặng: <strong> kg</strong></li>
          <li>Vòng 1: <strong> cm</strong></li>
          <li>Vòng 2: <strong> cm</strong></li>
          <li>Vòng 3: <strong> cm</strong></li>
        </ul>
      );
    }
  }
  
};

Mau.propTypes = {
  product: PropTypes.instanceOf(Immutable.Map),
};