'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import Navbar from '../components/Navbar';

const meta = {
	title: "Order detail"
};

export default class OrderDetail extends React.Component {

  render() {
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
												<p>Trần Đức Hiếu</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Số điện thoại:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>0989414662</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Tỉnh thành:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>Hà Nội</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Quận huyện:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>Cầu Giấy</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Địa chỉ:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>P804, CT2A, KĐT Nghĩa Đô, ngõ 106 Hoàng Quốc Việt</p>
											</div>
										</div>

										<h2 className="text-center">Thông tin ship</h2>
										<div className="row">
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Phí ship:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>30.000 VNĐ</p>
											</div>
											<div className="col-xs-4 col-sm-3 col-md-2">
												<p>Thời gian:</p>
											</div>
											<div className="col-xs-8 col-sm-9 col-md-10">
												<p>3 ngày</p>
											</div>
										</div>

										<h2 className="text-center">Sản phẩm vừa mua</h2>
											<div className="cart-table">
							          <div className="table-responsive">
							            <table className="table">
							              <thead>
							                <tr>
							                  <th className="hidden-sm-down hidden-xs-down">#</th>
							                  <th className="td-sanpham">Sản phẩm</th>
							                  <th>Giá</th>
							                  <th className="hidden-sm-down hidden-xs-down acenter">SL</th>
							                  <th className="hidden-sm-down hidden-xs-down aright">Thành tiền</th>
							                </tr>
							              </thead>
							              <tbody>
							              </tbody>
							              <tfoot>
							                <tr className="padT20">
							                  <td className="hidden-sm-down hidden-xs-down" scope="row"></td>
							                  <td className="hidden-sm-down hidden-xs-down"></td>
							                  <td className="hidden-sm-down hidden-xs-down"></td>
							                  <td colSpan="1">Trước giảm giá:</td>
							                  <td className="aright" colSpan="1">đ</td>
							                </tr>
							                <tr className="total">
							                  <td className="hidden-sm-down hidden-xs-down" scope="row"></td>
							                  <td className="hidden-sm-down hidden-xs-down"></td>
							                  <td className="hidden-sm-down hidden-xs-down"></td>
							                  <td colSpan="1">Tổng:</td>
							                  <td className="aright" colSpan="1">đ</td>
							                </tr>
							              </tfoot>
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

}
