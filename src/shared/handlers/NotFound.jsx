/* @jsx React.DOM */
"use strict";

import React from 'react';

export default class Err extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "page NotFound",
      description: 'tocu page 404 NotFound'
    };
  }

  render() {
    return (
    	<html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description} />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32 64x64 128x128 256x256" />
        </head>
        <body>
          <div>
		        <img src="/img/404.jpg" style={{width: "100%", height: "100%" }} />
		      </div>
        </body>
      </html>
    );
  }
  
};
