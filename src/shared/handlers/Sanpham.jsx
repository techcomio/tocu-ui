/* @jsx React.DOM */
'use strict';

import React from 'react';

export default class Sanpham extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle("Sanpham | tocu.vn");
    this.props.headParams.setDescription("set Description");
  }

	render() {
		return (
			<div className="container">
				Sanpham {this.props.params.id} 
			</div>
		);
	}

}
