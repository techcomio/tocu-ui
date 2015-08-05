'use strict';

import React, {PropTypes} from 'react/addons';
import Router             from 'react-router';


export default function prepareRoute(prepareFn) {

  return DecoratedComponent => class PrepareRouteDecorator extends React.Component {

    static contextTypes = {
      router: PropTypes.instanceOf(Router).isRequired
    }

    static prepareRoute = prepareFn
    
    componentDidMount() {
      const {
        props: { params, location }
      } = this;

      prepareFn({ params, location });
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }

  };

}
