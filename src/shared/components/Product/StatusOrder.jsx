'use strict';
import React      from 'react/addons';
import classNames from 'classnames';
import OrderStore from '../../store/OrderStore';


export default class StatusOrder extends React.Component {

  constructor(props) {
    super(props);
    this._onChangeOrderStore = this._onChangeOrderStore.bind(this);

    this.state = {
      ...OrderStore.getState(),
    };
  }

  componentDidMount() {
    OrderStore.listen(this._onChangeOrderStore);
  }

  componentWillUnmount() {
    OrderStore.unlisten(this._onChangeOrderStore);
  }

  _onChangeOrderStore(state) {
    this.setState({
      ...state,
    });
  }

  render() {
    let classes = classNames({
      "text-center": true,
      "status-check": true,
      success: this.state.createStatus.get('status') === 'success',
      warning: this.state.createStatus.get('status') === 'warning',
    });

    console.log(this.state.createStatus.toJS())
  	console.log(this.state.order.toJS())

  	return (
	  	<div className="statusOrder">
        <nav className="navbar navbar-defaul">
          <div className="navbar-header">
            <button onClick={::this.handleTrolai} type="button" className="btn btn-default navbar-btn">Trở lại</button>
          </div>
        </nav>
        <div className="product">
          <div className={classes}><i className="fa fa-check-circle-o"></i></div>
          <p className="text-center"><strong>{this.state.createStatus.get('messages')}</strong></p>
          <p className="text-center">Mã đơn hàng: #{this.state.order.get('OrderId') || this.state.order.get('id')}</p>
          <p className="text-center">Dưới đây là thông tin tài khoản của Cú</p>
          <p className="text-center">Bạn nhớ nghi tên đơn hàng trong thông tin chuyển khoản nhé!</p>
        </div>
      </div>
    );
  }

  handleTrolai() {
    this.props.Prev(3);
  }

}