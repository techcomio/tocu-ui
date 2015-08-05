"use strict";

import React from 'react';
/**
 * @Component
 */
import Verify from './Verify';


export default class BoxsignIn extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

  render() {
    return (
      <div className="boxLogin">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
            <div className="centrix">
              <Verify hideBoxVerify={this.props.hideBoxVerify} >
                <div onClick={::this.hideBoxVerify} className="closeBox fa fa-times"><i class="fa fa-times"></i></div>
              </Verify>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  hideBoxVerify() {
    this.props.hideBoxVerify();
  }

};
