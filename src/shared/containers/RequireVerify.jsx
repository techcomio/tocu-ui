'use strict';
import React, { PropTypes } from 'react';
import Router from 'react-router';


export default class RequireVerify extends React.Component {

  static onEnter(store) {
    return (nextState, replaceState) => {
      const { auth } = store.getState();
      const { query } = nextState.location;
      if (auth.getIn(['user', 'isVerifyMobilePhone']) || !auth.getIn(['user', 'access_token'])) {
        // nếu đã xác nhận Hoặc chưa đăng nhập, vậy ko nên có mặt ở đây!
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
