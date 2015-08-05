'use strict';

import React       from 'react/addons';
import {Link}      from 'react-router';
import Validator   from 'validatorjs';
import AuthStore   from '../store/AuthStore';
import AuthActions from '../actions/AuthActions';
/**
 * @Component
 */
import FormSignIn   from '../components/Form/SignIn';


export default class SignIn extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  static onEnter(next, transition) {
    let {test} = this.context;
    console.log('onEnter SignIn')
    console.log(test)
  }

  componentWillMount () {
    this.props.HeadParams.setTitle("SignIn | tocu.vn");
    this.props.HeadParams.setDescription("SignIn tocu.vn");
  }

  render() {
    return (
      <div className="container">
        <div className="row row-form">
          <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
            <FormSignIn />
          </div>
        </div>
      </div>
    );
  }

};
