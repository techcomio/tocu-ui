/* @jsx React.DOM */
'use strict';

import React from 'react';
var HeadParams = require('../shared/lib/HeadParams');

export default React.createClass({
  propTypes: {
    headParams: React.PropTypes.instanceOf(HeadParams),
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    keywords: React.PropTypes.string,
    markup: React.PropTypes.string
  },
	render: function() {
		return (
			<html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
          <title>{this.props.headParams.title}</title>
          <meta name="description" content={this.props.headParams.description} />
          <meta name="keywords" content={this.props.headParams.keywords} />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32 64x64 128x128 256x256" />
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
        </head>
        <body>
        
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>

          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          
          <script src="/js/commons.bundle.js"></script>
          <script src="/js/bundle.js"></script>
          <script src="/js/app.js"></script>
        </body>
      </html>
    );
  }
});
