'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { prepareRoute } from '../decorators';
import Navbar from '../components/Checkout/Navbar';
import Sidebar from '../components/Checkout/Sidebar';
import OrderForm from '../components/Form/OrderForm';
import { GetFinally } from '../actions/order';
import { findDOMNode } from 'react-dom';

const meta = {
  title: 'Tocu'
};

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(GetFinally(location.query))
  ];
})

@connect(state => ({
  order: state.order
}))

export default class CheckoutFinally extends React.Component {

  constructor (props) {
    super(props)
  }

  static contextTypes = {
  	history: PropTypes.object.isRequired,
  }

  render () {
		const { location: { query }, order } = this.props;

    if(order.getIn(['finallyLoad'])) {
      return (
        <div className="container">
          <DocumentMeta {...meta} />

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7 col-centered">
              <div className="finally" >
                <h4 className="text-center"></h4>
                <div className="status text-center"><i className="fa fa-spinner fa-pulse"></i></div>
                <p className='finally-text text-center'></p>
                <p className='finally-text-link text-center'><Link to="/">về trang chủ</Link></p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if(order.getIn(['finally', 'id'])) {
      return (
        <div className="container">
          <DocumentMeta {...meta} />

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7 col-centered">
              <div className="finally" >
                <h4 className="text-center">Đặt hàng thành công!</h4>
                <div className="status text-center"><i className="fa fa-check-circle-o"></i></div>
                <p className='finally-text text-center'>đơn hàng số #{order.getIn(['finally', 'id'])} đã được xác nhận.</p>
                <p className='finally-text-link text-center'><Link to="/">về trang chủ.</Link></p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <DocumentMeta {...meta} />

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7 col-centered">
            <div className="finally" >
              <h4 className="text-center">Đặt hàng thất bại!</h4>
              <div className="status text-center"><i className="fa fa-times-circle-o"></i></div>
              <p className='finally-text text-center'>thanh toán không thành công.</p>
              <p className='finally-text-link text-center'><Link to="/">về trang chủ</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

};
