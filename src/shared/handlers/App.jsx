'use strict';

import React from 'react/addons';

export default class Application extends React.Component {

	static contextTypes = {
		router: React.PropTypes.object.isRequired,
	}

  render() {
    const { children } = this.props;
    
    return this.props.children;
  }

};
