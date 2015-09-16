'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const meta = {
  title: 'Logout - Tocu'
  , description: 'Logout Tocu.vn'
};

export default class Logout extends React.Component {

	constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <DocumentMeta {...meta} />
        Logout
      </div>
    );
  }

}
