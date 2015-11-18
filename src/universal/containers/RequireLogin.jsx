'use strict';
import React, { PropTypes } from 'react';
import Router from 'react-router';


export default class RequireLogin extends React.Component {

  static onEnter(store) {
    return (nextState, replaceState) => {
      const { auth } = store.getState();
      const { query } = nextState.location;
      if (auth.getIn(['user', 'access_token'])) {
        // nếu đã đăng nhập, vậy ko nên có mặt ở đây!
        if(query && query.NextPath) {
          replaceState(null, query.NextPath);
        } else {
          replaceState(null, '/');
        }
      }
    };
  }

  render() {
    return this.props.children;
  }

}
