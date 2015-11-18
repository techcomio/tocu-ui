'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const meta = {
  title: 'Logout - Tocu'
};

export default class Logout extends React.Component {

	constructor(props) {
    super(props);
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
