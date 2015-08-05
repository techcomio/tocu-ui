"use strict";

import React from 'react';
/**
 * @Component
 */
import SignIn from './SignIn';


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
              <SignIn replaceWith={this.props.hideBoxLogin} nextPath={this.props.location.pathname} >
                <div onClick={::this.hideBoxLogin} className="closeBox fa fa-times"><i class="fa fa-times"></i></div>
              </SignIn>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  hideBoxLogin() {
    this.props.hideBoxLogin();
  }

};
