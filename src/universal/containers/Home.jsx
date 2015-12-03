'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import { getBox } from '../actions/box';
import { count as countBox } from '../actions/box';
import { count } from '../actions/product';
import Header from '../components/Header/Home';


const title = 'Tổ Cú';
const description = 'Nơi chúng ta thỏa sức với niềm đam mê đồ cũ & handmade :x';
const image = 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/971923_344220582347382_1541115560_n.jpg?oh=72a2ea7973d5e121698d01649f3001a9&oe=5665CDFF&__gda__=1451456542_53e748908dee4269c6330ca5503dc12f';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:url': 'http://tocu.vn',
      'og:type': 'website', // article
      'og:title': title,
      'og:image': image,
      'og:locale': 'vi_VN',
      'og:site_name': 'Tổ Cú',
      'og:description': description,
      'fb:app_id': '933500330050669',
      'fb:admins': ['100003135566240', '1010730268950231', '100000398020186'],
    }
  }
};

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(countBox())
    , store.dispatch(count())
  ];
})

export default class Home extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DocumentMeta {...meta} />

        {this.props.children}
      </div>
    );
  }

}
