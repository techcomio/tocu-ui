'use strict';

import React          from 'react';
import Router, {Link} from 'react-router';
import Validator      from 'validatorjs';
import AuthStore      from '../store/AuthStore';
import AuthActions    from '../actions/AuthActions';
import CityStore      from '../store/CityStore';
import CityActions    from '../actions/CityActions';
import {prepareRoute} from '../decorators';
/**
 * @Component
 */
import AltContainer from 'alt/AltContainer';
import FormSignUp   from '../components/Form/SignUp';


@prepareRoute(async function ({ params }) {
  return await * [
    CityActions.getCity(),
  ];
})

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.HeadParams.setTitle("SignUp | tocu.vn");
    this.props.HeadParams.setDescription("SignUp | Description");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        
          <AltContainer
            params={this.props.params}
            component={FormSignUp}
            stores={[CityStore, AuthStore]}
            actions={{CityActions, AuthActions}}
            inject={{
              city: function (props) {
                return CityStore.getState().city
              },
              district: function(props) {
                return CityStore.getState().district
              },
              failedMessage: function(props) {
                return AuthStore.getState().failedCreateMessage
              },
              createUseState: function(props) {
                return AuthStore.getState().createUseState
              }
            }} />

        </div>
      </div>
    );
  }

};

SignUp.onEnter = async function(next, transition) {
  console.log('onEnter SignUp')
};

SignUp.contextTypes = {
  router: React.PropTypes.instanceOf(Router).isRequired,
};