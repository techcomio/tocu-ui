'use strict';

import React, {PropTypes} from 'react';
import Router             from 'react-router';


export default function prepareRoute(prepareFn) {

  return DecoratedComponent => React.createClass({

    contextTypes: {
      router: PropTypes.instanceOf(Router).isRequired
    },

    statics: {
      prepareRoute: prepareFn
    },

    componentDidMount() {
      const {
        props: { params, location }
      } = this;

      prepareFn({ params, location });
    },

    render() {
      /**
       * [contextTypes description]
       * DecoratedComponent setting this.context.router
       * @type {Object}
       */
      DecoratedComponent.contextTypes = {
        router: PropTypes.instanceOf(Router).isRequired,
      }
      
      return <DecoratedComponent {...this.props} />
    },

  });

}
