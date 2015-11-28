'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import { getProduct, getProductPage } from '../actions/product';
import Masonry from '../components/Card/Masonry';
import Header from '../components/Header/Home';


const title = 'Bài viết | Tổ Cú';

const meta = {
  title,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:title': title
    }
  }
};

export default class Product extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <DocumentMeta {...meta} extend />
        <Header />
      </div>
    );
  }

}
