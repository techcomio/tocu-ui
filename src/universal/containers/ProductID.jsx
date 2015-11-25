'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { NotifsComponent } from 'redux-notif';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareOnUpdate } from '../decorators';
import { getProductID } from '../actions/product';
import { get as getSale } from '../actions/sale';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Sidebar from '../components/Product/Sidebar';
import Sale from '../components/Sale';
import BoxRequireAuth from '../components/BoxRequireAuth';


@prepareOnUpdate(['id'], async function ({ store, params, location }) {
  return await * [
    store.dispatch(getProductID(params))
    , store.dispatch(getSale())
  ];
})

@connect(state => ({
  product: state.product
}))

export default class BoxID extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    const { product, dispatch } = this.props;
    const Box = product.getIn(['productId', 'Box']);
    const { params: { id } } = this.props;
    const title = product.getIn(['productId', 'boxName']);
    const description = product.getIn(['productId', 'boxName']);
    const image = '';
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

    return (
      <div>
        <DocumentMeta {...meta} />
        <NotifsComponent left bottom />
        <header>
          {/* Navbar */}
          <Navbar />
        </header>

        <section id="product-content">
          {product.get('productIdLoad') ? (
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='div-loading text-center'><i className='fa fa-spinner fa-pulse'></i></div>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <Product />

                  {/* 6 box auto */}
                </div>

                <div className="col-lg-3">
                  <div className='row row-sidebar'>
                    {Box && <Sidebar Box={Box} />}

                    <div className="col-md-12 col-lg-12">
                      <Sale />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) }
        </section>

        <BoxRequireAuth />
      </div>
    );
  }

}
