'use strict';

import React from 'react/addons';

export default class Application extends React.Component {

  render() {
    const { children } = this.props;
    
    return this.props.children;
  }

};

Application.contextTypes = {
	router: React.PropTypes.object.isRequired,
}
