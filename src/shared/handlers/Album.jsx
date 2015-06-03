/* @jsx React.DOM */
'use strict';

import React from 'react';

export default class Album extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle("Album | tocu.vn");
    this.props.headParams.setDescription("set Description");
  }

	render() {
		return (
			<div className="container">
				Album {this.props.params.id} 
			</div>
		);
	}

}
