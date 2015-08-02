'use strict';
import React      from 'react/addons';
import classNames from 'classnames';


export default class StatusOrder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let classes = classNames({
      "text-center": true,
      "status-check": true,
      success: this.props.status.get('status') === 'success',
      warning: this.props.status.get('status') === 'warning',
    });

    console.log(this.props.status.toJS())
  	console.log(this.props.order.toJS())

  	return (
	  	<div className="statusOrder">
        <nav className="navbar navbar-defaul">
          <div className="navbar-header">
            <button onClick={::this.handleTrolai} type="button" className="btn btn-default navbar-btn">Trở lại</button>
          </div>
        </nav>
        <div className="product">
          <div className={classes}><i className="fa fa-check-circle-o"></i></div>
          <p className="text-center"><strong>{this.props.status.get('messages')}</strong></p>
          <p className="text-center">số đơn hàng: #{this.props.order.get('OrderId') || this.props.order.get('id')}</p>
          <p className="text-center">dưới đây là thông tin tài khoản của Cú</p>
          <p className="text-center">Bạn nhớ nghi tên đơn hàng trong thông tin chuyển khoản nhé!</p>
        </div>
      </div>
    );
  }

  handleTrolai() {
    this.props.Prev(3);
  }

}