'use strict';

import React          from 'react/addons';
import Router, {Link} from 'react-router';
import Validator      from 'validatorjs';
import AuthStore      from '../store/AuthStore';
import AuthActions    from '../actions/AuthActions';
import CityStore      from '../store/CityStore';
import CityActions    from '../actions/CityActions';
import VerifyStore    from '../store/VerifyStore';
import VerifyActions  from '../actions/VerifyActions';
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
    this.props.HeadParams.setDescription("SignUp tocu.vn");
  }

  render() {
    return (
      <div className="container">
        <div className="row row-form">
        
          <AltContainer
            params={this.props.params}
            component={FormSignUp}
            stores={[CityStore, AuthStore, VerifyStore]}
            actions={{CityActions, AuthActions, VerifyActions}}
            inject={{
              city: () => {
                return CityStore.getState().city
              },
              district: () => {
                return CityStore.getState().district
              },
              failedMessage: () => {
                return AuthStore.getState().failedCreateMessage
              },
              createUseState: () => {
                return AuthStore.getState().createUseState
              },
              auth: () => {
                return AuthStore.getState().auth
              },
              codeFaild: () => {
                return VerifyStore.getState().codeFaild
              },
              verifyFaild: () => {
                return VerifyStore.getState().verifyFaild
              },
              verifyState: () => {
                return VerifyStore.getState().verifyState
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