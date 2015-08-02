'use strict';

import React       from 'react/addons';
import Validator   from 'validatorjs';
import classNames  from 'classnames';
import ShipStore   from '../../store/ShipStore';
/**
 * @Component
 */
import InputValidation   from '../Form/inputValidation';
import SelectValidation  from '../Form/selectValidation';
import FormNguoiNhan     from './formNguoiNhan';
import HinhthucVanchuyen from './hinhthucVanchuyen';
import HinhthucThanhtoan from './hinhthucThanhtoan';


export default class FormOrder extends React.Component {

  constructor(props) {
    super(props);
    this._bind('handleClickHuy', 'handleClickDatMua', 'handleScroll', '_onChangeSelectCity', '_shipOnChange', '_ChangeDisable', '_ChangeVanchuyen', 'resetHinhthucVC', '_ChangeThanhtoan');

    this.state = {
      disabled: true,
      disabledHinhthucTT: true,
      cost: 0,
      amount: 0,
      shippingMethod: '',
      hinhthucVC: null,
      hideHeader: false,
      disabledBtnDatHang: true,
    }
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  componentDidMount() {
    ShipStore.listen(this._shipOnChange);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    ShipStore.unlisten(this._shipOnChange);
    window.removeEventListener('scroll', this.handleScroll);
  }

  _shipOnChange(state) {
    this.setState({
      disabled: false,
      ...state.phiship.toJS()
    });

    let vc = this.refs.hinhthucVC.getCheckbox();
    if(vc) {
      this._ChangeVanchuyen(vc, true);
      this.setBtnDatHang();
    } else {
      this._ChangeVanchuyen(null, null);
      this.setState({
        disabledBtnDatHang: true,
      });
    }
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

    let img_url, price, cost, amount;
    if(this.props.product.get('images').get(0)) {
      let url = this.props.product.get('images').get(0);
      img_url = url.replace(/image\//gi, 'image/100x100/');
    }
    
    if(this.props.product.get('price')) {
      price = this.props.product.get('price').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
      this.state.amount = this.props.product.get('price') + this.state.cost;
      amount = this.state.amount.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
    }
    cost = this.state.cost.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');

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
          <div className="infoOrder">
            <div className="infoOrder-body">
              <div className="infoOrder-img">
                <img src={img_url} alt="img" className="img-rounded" />
              </div>
              <div className="infoOrder-text">
                <h3>{this.props.product.get('boxName')} - {this.props.product.get('code')}</h3>
                <span>{price}đ (giá) + {cost}đ (ship) = {amount}đ</span>
              </div>
            </div>
          </div>
          <div className="infoNguoiNhan">
            <div className="title-border">
              <p>Thông tin người nhận</p>
            </div>
            <p className="text-center">Điền đầy đủ thông tin người nhận hàng</p>
            <FormNguoiNhan
              ref="formNguoiNhan"
              city={this.props.city}
              district={this.props.district}
              product={this.props.product}
              onChangeTest={this.resetHinhthucVC}
              onChangeSelectCity={this._onChangeSelectCity}
              onChangeDisable={this._ChangeDisable} />

            <div className="title-border">
              <p>Hình thức vận chuyển</p>
            </div>
            <div className="form-inline">
              <HinhthucVanchuyen
                ref="hinhthucVC"
                onChange={this._ChangeVanchuyen}
                cost={this.state.cost}
                disabled={this.state.disabled}
                shippingMethod={this.state.shippingMethod}
              />
            </div>

            <div className="title-border">
              <p>Hình thức thanh toán</p>
            </div>
            <div className="form-inline">
              <HinhthucThanhtoan
                ref="hinhthucTT"
                onChange={this._ChangeThanhtoan}
                disabled={this.state.disabledHinhthucTT}
                hinhthucVC={this.state.hinhthucVC} />
            </div>

          </div>
        </div>
      </div>
    );
  }

  _onChangeSelectCity(citySelect) {
    this.props.CityActions.getDistrict({city: citySelect});
    this.setState({
      shippingMethod: '',
    });
  }

  handleClickHuy() {
    this.props.Prev(2);
  }

  setBtnDatHang() {
    if(!this.state.disabled && this.refs.hinhthucVC.getCheckbox() && this.refs.hinhthucTT.getCheckbox()) {
      this.setState({
        disabledBtnDatHang: false,
      });
    } else {
       this.setState({
        disabledBtnDatHang: true,
      });
    }
  }

  setBtnDatHangs() {
    if(!this.state.disabled && this.refs.hinhthucVC.getCheckbox() && this.refs.hinhthucTT.getTest()) {
      this.setState({
        disabledBtnDatHang: false,
      });
    } else {
       this.setState({
        disabledBtnDatHang: true,
      });
    }
  }

  handleClickDatMua() {
    console.log('handleClickDatMua');
    console.log(this.refs.formNguoiNhan.getValue())
    console.log(this.state.shippingMethod)
    console.log(this.refs.hinhthucTT.getCheckbox())
    
    let data = {
      store: 'ol',
      shippingInfo: this.refs.formNguoiNhan.getValue(),
      shippingMethod: this.state.shippingMethod === "COD" ? "cod" : "delivery",
      shippingCost: this.state.cost,
      paymentMethod: this.refs.hinhthucTT.getCheckbox(),
      total: this.props.product.get('price'),
      percentageDiscount: 0,
      amount: this.state.amount,
      totalWeight: this.props.product.get('weight'),
      noteBySaleman: null,
      OrderLines: [{
        product: {
          id: this.props.product.get('id'),
          onlineStore: true,
        },
        quantity: 1,
        unitPrice: this.props.product.get('price'),
        amount: this.props.product.get('price'),
        weight: this.props.product.get('weight'),
      }],
    };

    this.props.OrderActions.createOrder({...data});
    this.props.Next();
  }

  _ChangeDisable(value) {
    this.setState({
      disabled: value,
    });    
  }

  _ChangeVanchuyen (value, checked) {
    if(checked) {
      this.setState({
        hinhthucVC: value,
        disabledHinhthucTT: false,
      });
    } else {
      this.setState({
        hinhthucVC: null,
        disabledHinhthucTT: true,
      });
    }
    this.setBtnDatHangs();
  }

  _ChangeThanhtoan() {
    this.setBtnDatHang();
  }

  resetHinhthucVC() {
    this.setState({
      hinhthucVC: null
    });
  }

};
