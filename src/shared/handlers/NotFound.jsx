"use strict";

import React from 'react';


export default class NotFound extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src="/img/404.jpg" style={{width: "100%", height: "100%" }} />
      </div>
    );
  }

};
