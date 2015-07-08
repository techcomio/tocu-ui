'use strict';

import React       from 'react';
import {Link}      from 'react-router';
import Validator   from 'validatorjs';
import AuthStore   from '../store/AuthStore';
import AuthActions from '../actions/AuthActions';
/**
 * @Component
 */
import AltContainer from 'alt/AltContainer';
import FormSignIn   from '../components/Form/SignIn';


export default class SignIn extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.HeadParams.setTitle("SignIn | tocu.vn");
    this.props.HeadParams.setDescription("SignIn | Description");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >

            <AltContainer
              component={FormSignIn}
              stores={[AuthStore]}
              actions={{AuthActions}}
              inject={{
                loginState: function(props) {
                  return AuthStore.getState().loginState
                }
              }}
             />

          </div>
        </div>
      </div>
    );
  }

};

SignIn.onEnter = async function(next, transition) {
  // console.log('onEnter SignIn')
}

SignIn.contextTypes = {
  router: React.PropTypes.object.isRequired,
}