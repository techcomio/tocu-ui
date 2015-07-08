'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import {prepareRoute}   from '../decorators';


export default class Posts extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.HeadParams.setTitle("Posts | tocu.vn");
    this.props.HeadParams.setDescription("Posts | Description");
  }

	render () {
    return (
      <div>
				<p>Posts! {this.props.params.id}</p>
        <Link to="/">to Home!</Link>
			</div>
    );
	}

};
