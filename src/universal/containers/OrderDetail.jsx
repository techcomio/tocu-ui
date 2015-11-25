'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { prepareRoute } from '../decorators';
import Navbar from '../components/Navbar';
import { getOrderID } from '../actions/order';


const meta = {
	title: "Order detail"
};

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getOrderID({id: params.id}))
  ];
})

@connect(state => ({
  order: state.order
}))

export default class OrderDetail extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
		const { order } = this.props;
		const total = order.getIn(['orderID', 'total']) ? order.getIn(['orderID', 'total']).toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : <span>&#160;</span>;

    return (
      <div>
	      <DocumentMeta {...meta} />
				<header>
					<Navbar />
				</header>

				<section id="product-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

								<div className="cart card-order-detail">
					        <nav className="navbar navbar-light" >
					          <div className="navbar-header navbar-left">
					            <div><i className="icon icont-cart"></i></div>
					            <div><span className="title-nav-cart">Thông tin đơn hàng</span></div>
					          </div>
					        </nav>

									<div className="card-block">
										<h2 className="text-center">Người Nhận</h2>
										<div className="row">
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Họ tên:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>{order.getIn(['orderID', 'shippingInfo', 'name']) || <span>&#160;</span>}</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Số điện thoại:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>{order.getIn(['orderID', 'shippingInfo', 'phone']) || <span>&#160;</span>}</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Tỉnh thành:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>{order.getIn(['orderID', 'shippingInfo', 'province']) || <span>&#160;</span>}</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Quận huyện:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>{order.getIn(['orderID', 'shippingInfo', 'district']) || <span>&#160;</span>}</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Địa chỉ:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>{order.getIn(['orderID', 'shippingInfo', 'address']) || <span>&#160;</span>}</p>
											</div>
										</div>

										<h2 className="text-center">Tổng tiền và Thông tin ship</h2>
										<div className="row">
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Tổng tiền:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>{total} VNĐ</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Thời gian ship:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>{order.getIn(['orderID', 'shippingDays'])} ngày</p>
											</div>
										</div>

										<h2 className="text-center">Sản phẩm</h2>
											<div className="cart-table">
							          <div className="table-responsive">
							            <table className="table">
							              <thead>
							                <tr>
							                  <th className="hidden-sm-down hidden-xs-down">#</th>
							                  <th className="td-sanpham">Sản phẩm</th>
							                  <th>Giá</th>
							                </tr>
							              </thead>
							              <tbody>
															{order.getIn(['orderID', 'OrderLines']) && order.getIn(['orderID', 'OrderLines']).map(function(item, i) {
																let imgUrl = item.getIn(['product', 'imageUrl']) ? item.getIn(['product', 'imageUrl']).replace(/image\//gi, 'image/50x50/') : null;
																return <tr key={i}>
																	<th className="hidden-sm-down hidden-xs-down" scope="row">{i+1}</th>
																	<td className="td-sanpham">
											              <div className="imageIcon"><img src={imgUrl} /></div>
											              <div className="nameInfo">
											                <span className="code">{item.getIn(['product', 'code'])}</span>
											                <span className="name">{item.getIn(['product', 'boxName'])}</span>
											              </div>
											            </td>
																	<th>{this.formatNumber(item.get('amount'))} VNĐ</th>
																</tr>
															}.bind(this))}
							              </tbody>
							            </table>
							          </div>
							        </div>
						      </div>
					      </div>
				      </div>
			      </div>
		      </div>
	      </section>
      </div>
    );
  }

	formatNumber = (number) => {
		return number ? number.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : 0;
	}

}
