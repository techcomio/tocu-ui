'use strict';

import React    from 'react';
import {Router} from 'react-router';
import routes   from '../routes';


export default class AppRouter extends React.Component {

  render() {
    return (
      <Router {...this.props}>
        {routes}
      </Router>
    );
  }

}

AppRouter.propTypes = {
  history: React.PropTypes.object.isRequired,
  HeadParams: React.PropTypes.object.isRequired,
}
