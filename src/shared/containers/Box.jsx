'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getBox } from '../actions/box';
import { prepareRoute } from '../decorators';
import ThumbBox from '../components/Card/ThumbBox';
import Header from '../components/Header/Home';


const title = 'Tocu';
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

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getBox())
  ];
})

@connect(state => ({
  box: state.box
}))

export default class Box extends React.Component {

	constructor(props, context) {
    super(props, context);
  }

  render() {
    const { box } = this.props;

    return (
      <div>
        <Header />
        <section id="home-content" className="container">
          <ThumbBox />

          {box.get('boxsLoad') && (
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='div-loading text-center'><i className='fa fa-spinner fa-pulse'></i></div>
            </div>
          )}
        </section>
    </div>
    );
  }

}
