'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import {prepareRoute}   from '../decorators';


export default class Album extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.HeadParams.setTitle("Album | tocu.vn");
    this.props.HeadParams.setDescription("Album | Description");
  }

	render () {
    return (
      <div>
				<p>Album! {this.props.params.id}</p>
        <Link to="/">to Home!</Link>
			</div>
    );
	}

};
