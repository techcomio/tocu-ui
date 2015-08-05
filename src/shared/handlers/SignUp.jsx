'use strict';

import React          from 'react/addons';
import Router, {Link} from 'react-router';
import Validator      from 'validatorjs';
import CityActions    from '../actions/CityActions';
import {prepareRoute} from '../decorators';
/**
 * @Component
 */
import FormSignUp   from '../components/Form/SignUp';


@prepareRoute(async function ({ params }) {
  return await * [
    CityActions.getCity(),
  ];
})

export default class SignUp extends React.Component {

  static contextTypes = {
    router: React.PropTypes.instanceOf(Router).isRequired,
  }

  static onEnter(next, transition) {
    console.log('onEnter SignUp')
  }

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
          <FormSignUp />
        </div>
      </div>
    );
  }

};
