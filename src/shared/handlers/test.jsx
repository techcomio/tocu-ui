'use strict';

import React         from 'react';
import FluxComponent from 'flummox/component';
import MixinAuth from './mixinAuth';

export default React.createClass({
	mixins: [MixinAuth],
	render() {
		return (
			<div>test</div>
		);
	}
});