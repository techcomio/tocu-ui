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


const title = 'Album';
const description = 'Nơi chúng ta thỏa sức với niềm đam mê đồ cũ & handmade :x';
const image = 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/971923_344220582347382_1541115560_n.jpg?oh=72a2ea7973d5e121698d01649f3001a9&oe=5665CDFF&__gda__=1451456542_53e748908dee4269c6330ca5503dc12f';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:image': image,
      'og:locale': 'vi_VN',
      'og:title': title,
      'og:description': description,
      'twitter:card': 'summary',
      'twitter:site': '@ngthorg',
      'twitter:creator': '@ngthorg',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:image:width': '200',
      'twitter:image:height': '200'
    }
  }
};

export default class Album extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <DocumentMeta {...meta} />
        <Header />
      </div>
    );
  }

}
