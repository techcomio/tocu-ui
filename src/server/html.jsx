'use strict';

import React      from 'react/addons';
import HeadParams from '../shared/lib/HeadParams';


export default React.createClass({
  propTypes: {
    _markup: React.PropTypes.string,
    HeadParams: React.PropTypes.instanceOf(HeadParams),
  },
	render: function() {
		return (
			<html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
          <title>{this.props.HeadParams.title}</title>
          <meta name="description" content={this.props.HeadParams.description} />
          <meta name="keywords" content={this.props.HeadParams.keywords} />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32 64x64 128x128 256x256" />
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
        </head>
        <body>
        
          <div dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          
          <script src="/js/commons.bundle.js"></script>
          <script src="/js/bundle.js"></script>
          <script src="/js/script.js"></script>
        </body>
      </html>
    );
  }
});
