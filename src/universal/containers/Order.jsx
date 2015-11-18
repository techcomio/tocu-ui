'use strict';
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { prepareRoute } from '../decorators';
import Navbar from '../components/Navbar';
import { getOrder } from '../actions/order';


const title = 'Order';

const meta = {
  title,
};

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getOrder())
  ];
})

@connect(state => ({
  order: state.order
}))

export default class Order extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    const { order, location } = this.props;

		return (
			<div>
				<DocumentMeta {...meta} />
				<header>
					<Navbar />
				</header>

        <div id="cart-content" className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="cart">
                <nav className="navbar navbar-light">
                  <div className="navbar-header navbar-left">
                    <div><i className="icon icont-cart"></i></div>
                    <div><span className="title-nav-cart">Đơn hàng đã đặt</span></div>
                  </div>
                </nav>

                <div className="cart-table">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Người nhận</th>
                          <th>Ngày đặt hàng</th>
                          <th className="acenter">Tổng đơn hàng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.getIn(['order']).map((item, i) => {
                          let id = item.get('id');
                          let total = item.get('total') ? item.get('total').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : null;
                          return (
                            <tr key={id} onClick={this.Redirect.bind(this, id)} style={{cursor: 'pointer'}}>
                              <th scope="row">#{id}</th>
                              <td>{item.getIn(['shippingInfo', 'name'])}</td>
                              <td>{moment(item.getIn(['createdAt'])).format('DD/MM/YYYY')}</td>
                              <td className="acenter">{total}đ</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
			</div>
		)
	}

  Redirect(id, e) {
    const { history } = this.props;
    history.pushState(null, `/order/${id}`);
  }

}
