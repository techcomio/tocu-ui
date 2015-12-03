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
import { CLIENT } from '../lib/env';


@prepareOnUpdate(['id'], async function ({ store, params, location }) {
  if(CLIENT && window.FB) {
    setTimeout(function() {
      window.FB.XFBML.parse();
    }, 400);
  }
  return await * [
    store.dispatch(getProductID(params))
    , store.dispatch(getSale())
  ];
})

@connect(state => ({
  product: state.product
}))

export default class ProductID extends React.Component {

	constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(window.FB) {
      setTimeout(function() {
        window.FB.XFBML.parse();
      }, 400);
    }
  }

  render() {
    const { product, dispatch, params } = this.props;
    const ProductId = product.getIn(['productId']);
    const { params: { id } } = this.props;
    const title = product.getIn(['productId', 'boxName']);
    const description = product.getIn(['productId', 'boxName']);
    const image = '';
    const href = `http://tocu.vn/product/${params.id}`;
    const meta = {
      title,
      description,
      meta: {
        charSet: 'utf-8',
        property: {
          'og:type': 'article',
          'og:title': title,
          'og:image': image,
          'og:locale': 'vi_VN',
          'og:site_name': 'Tổ Cú',
          'og:description': description,
          'fb:app_id': '933500330050669',
          'fb:admins': '100003135566240'
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
                  <Product href={href} />

                  {/* facebook comments plugin */}
                  <div className="productDetail" style={{padding: '10px'}}>
                    <div className="fb-comments"
                      data-href={href}
                      data-width="100%"
                      data-mobile="Auto-detected"
                      data-colorscheme="light"
                      data-numposts="5" />
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className='row row-sidebar'>
                    {ProductId && <Sidebar ProductId={ProductId} />}

                    <div className="col-md-12 col-lg-12">
                      <Sale />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          </section>
        <BoxRequireAuth />
      </div>
    );
  }

}
