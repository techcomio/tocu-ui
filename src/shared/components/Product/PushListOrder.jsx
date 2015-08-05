'use strict';

import React        from 'react/addons';
import Validator    from 'validatorjs';
import classNames   from 'classnames';
import moment       from 'moment';
import OrderStore   from '../../store/OrderStore';
import SanphamStore from '../../store/SanphamStore';
import OrderActions from '../../actions/OrderActions';


export default class PushListOrder extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.renderListOrder = this.renderListOrder.bind(this);
    this.handleClickHuy = this.handleClickHuy.bind(this);
    this.handleClickDatMua = this.handleClickDatMua.bind(this);
    this._onChangeOrderStore = this._onChangeOrderStore.bind(this);
    this._onChangeSanphamStore = this._onChangeSanphamStore.bind(this);

    this.state = {
      disabledBtnDatHang: true,
      selectOrder: false,
      listOrder: OrderStore.getState().listOrder,
      itemPushOrder: OrderStore.getState().itemPushOrder,
      product: SanphamStore.getState().product,
    };
  }

  componentDidMount() {
    OrderActions.getListOrder();
    OrderActions.pushOrder({});
    window.addEventListener('scroll', this.handleScroll);
    OrderStore.listen(this._onChangeOrderStore);
    SanphamStore.listen(this._onChangeSanphamStore);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    OrderStore.unlisten(this._onChangeOrderStore);
    SanphamStore.unlisten(this._onChangeSanphamStore);
  }

  handleScroll(e) {
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 33;
    this.setState({
      hideHeader: hideHeader
    });
  }

  _onChangeOrderStore(state) {
    this.setState({
      listOrder: state.listOrder,
      itemPushOrder: state.itemPushOrder,
    });
  }

  _onChangeSanphamStore(state) {
    this.setState({
      product: state.product,
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
    return this.state.listOrder.map((item, i) => {
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
    OrderActions.pushOrder(item);
    this.setState({
      selectOrder: true,
      disabledBtnDatHang: false
    });
  }

  selectOrderNull(e) {
    OrderActions.pushOrder({});
    this.setState({
      selectOrder: false,
      disabledBtnDatHang: false,
    })
  }

  handleClickHuy() {
    this.props.Prev();
  }

  handleClickDatMua() {
    if(!this.state.itemPushOrder.size) {
      this.props.Next(1);
    } else {
      let data = {
        OrderId: this.state.itemPushOrder.get('id'),
        product: {
          id: this.state.product.get('id'),
          onlineStore: true,
        },
        unitPrice: this.state.product.get('price'),
        quantity: 1,
        amount: this.state.product.get('salePrice') ? this.state.product.get('salePrice') : this.state.product.get('price'),
        weight: this.state.product.get('weight'),
      }

      OrderActions.addOrder({...data});
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
