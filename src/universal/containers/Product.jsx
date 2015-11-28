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
import { CLIENT } from '../lib/env';


const title = 'Sản phẩm | Tổ Cú';
const description = 'Nơi chúng ta thỏa sức với niềm đam mê đồ cũ & handmade :x';
const meta = {
  title,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:title': title,
    }
  }
};
const limit = 15;

@prepareRoute(async function ({ store, params, location }) {
  if(CLIENT) {
    return await * [
      store.dispatch(getProduct({skip: 0, limit}))
    ];
  }
})

@connect(state => ({
  product: state.product
}), dispatch => ({
  getProductPage: (data) => dispatch(getProductPage(data))
}))

export default class Product extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    const { product, location } = this.props;
    return (
      <div>
        <DocumentMeta {...meta} extend />
        <Header />
        <Masonry data={product} limit={limit} loadMore={this.props.getProductPage} location={location} />
      </div>
    );
  }

}
