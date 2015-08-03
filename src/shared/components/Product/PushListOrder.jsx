'use strict';

import React      from 'react/addons';
import Validator  from 'validatorjs';
import classNames from 'classnames';
import moment     from 'moment';

export default class PushListOrder extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.renderListOrder = this.renderListOrder.bind(this);
    this.handleClickHuy = this.handleClickHuy.bind(this);
    this.handleClickDatMua = this.handleClickDatMua.bind(this);

    this.state = {
      disabledBtnDatHang: true,
      selectOrder: false,
    };
  }

  componentDidMount() {
    this.props.OrderActions.getListOrder();
    this.props.OrderActions.pushOrder({});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 33;
    this.setState({
      hideHeader: hideHeader
    });
  }

  render() {
    let classNavbarOrder = classNames({
      "navbar-product-detail": true,
      sticky: this.state.hideHeader,
    });

    return (
      <div className="productOrder">
        <div className={classNavbarOrder}>
          <nav className="navbar navbar-defaul">
            <div className="navbar-header">
              <button onClick={this.handleClickHuy} type="button" className="btn btn-default navbar-btn">Hủy</button>
            </div>
            <div className="nav navbar-nav navbar-right">
              <button onClick={this.handleClickDatMua} type="button" className="btn btn-primary navbar-btn" disabled={this.state.disabledBtnDatHang}>Hoàn tất</button>
            </div>
          </nav>
        </div>
        <div className="product">
          <div className="listOrder">
            <div className="text-center title">Bạn đang có đơn hàng chờ vận chuyển</div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                {this.renderListOrder()}
                <div className="radio">
                  <label>
                    <input onClick={this.selectOrderNull.bind(this)} type="radio" name="optionsRadios" value="option2" /> Tạo đơn hàng mới (nếu bạn muốn chuyển đến địa chỉ khác)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderListOrder() {
    return this.props.listOrder.map((item, i) => {
      var day = moment(item.get('updatedAt')).locale('vi').format("hh:mm dddd, DD/MM/YYYY")
      return (
        <div key={i} className="radio">
          <label>
            <input onClick={this.selectOrder.bind(this, item.toJS())} type="radio" name="optionsRadios" value="option1" /> Thêm vào đơn hàng #{item.get('id')} đã tạo lúc {day}
          </label>
        </div>
      );
    });
  }

  selectOrder(item, e) {
    this.props.OrderActions.pushOrder(item);
    this.setState({
      selectOrder: true,
      disabledBtnDatHang: false
    });
  }

  selectOrderNull(e) {
    this.props.OrderActions.pushOrder({});
    this.setState({
      selectOrder: false,
      disabledBtnDatHang: false,
    })
  }

  handleClickHuy() {
    this.props.Prev();
  }

  handleClickDatMua() {
    if(!this.props.itemPushOrder.size) {
      this.props.Next(1);
    } else {
      let data = {
        OrderId: this.props.itemPushOrder.get('id'),
        product: {
          id: this.props.product.get('id'),
          onlineStore: true,
        },
        unitPrice: this.props.product.get('price'),
        quantity: 1,
        amount: this.props.product.get('salePrice') ? this.props.product.get('salePrice') : this.props.product.get('price'),
        weight: this.props.product.get('weight'),
      }

      this.props.OrderActions.addOrder({...data});
      this.props.Next(2);
      
    /*{
        "OrderId": 4,
        "product": {
            "id": 7,
            "onlineStore": true
        },
        "unitPrice": 200000,
        "quantity": 1,
        "amount": 200000,
        "weight": 500
      }*/
    }
  }

};
