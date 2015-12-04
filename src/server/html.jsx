'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';


export default class Html extends React.Component {

  static propTypes = {
    state: PropTypes.string.isRequired,
    markup: PropTypes.string.isRequired
  }

  render() {
    const {state, markup} = this.props;
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
          {DocumentMeta.renderAsReact()}
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32 64x64 128x128 256x256" />
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
        </head>
        <body>

          <div id="content" dangerouslySetInnerHTML={{__html: markup}}></div>
          <div id="fb-root"></div>

          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${state};`}} />
          <script src="/js/bundle.js"></script>
          <script src="/js/script.js"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId      : '933500330050669',
                xfbml      : true,
                version    : 'v2.5'
              });
            };

            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "//connect.facebook.net/vi_VN/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));`}} />
          <script dangerouslySetInnerHTML={{__html: `
            (function(d,s,id){var z=d.createElement(s);z.type="text/javascript";z.id=id;z.async=true;z.src="//static.zotabox.com/7/6/76ca0d3a9ae58730cc1116a256dbbc46/widgets.js";var sz=d.getElementsByTagName(s)[0];sz.parentNode.insertBefore(z,sz)}(document,"script","zb-embed-code"));`}} />
        </body>
      </html>
    );
  }

}
