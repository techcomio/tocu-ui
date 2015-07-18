'use strict';

import React       from 'react';
import Validator   from 'validatorjs';
import classNames  from 'classnames';
import ShipStore   from '../../store/ShipStore';
import ShipActions from '../../actions/ShipActions';
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
    this._bind('handleClickHuy', 'handleClickDatMua', '_onChangeSelectCity', '_shipOnChange', '_ChangeDisable', '_ChangeVanchuyen', 'test');

    this.state = {
      disabled: true,
      cost: 0,
      shippingMethod: '',
      hinhthucVC: '',
    }
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  componentDidMount() {
    ShipStore.listen(this._shipOnChange);
  }

  componentWillUnmount() {
    ShipStore.unlisten(this._shipOnChange);
  }

  _shipOnChange(state) {
    this.setState(state.phiship.toJS());
  }

  render() {
    let classProductOrder = classNames({
      productOrder: true,
      show: this.props.current === 2,
    });
    let img_url;
    if(this.props.images) {
      let url = this.props.images[0];
      img_url = url.replace(/image\//gi, 'image/192x130/');
    }

    let price = this.props.price !== null ? this.props.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

    return (
      <div className={classProductOrder}>
        <nav className="navbar navbar-defaul">
          <div className="navbar-header">
            <button onClick={this.handleClickHuy} type="button" className="btn btn-default navbar-btn">Hủy</button>
          </div>
          <div className="nav navbar-nav navbar-right">
            <button onClick={this.handleClickDatMua} type="button" className="btn btn-primary navbar-btn">Đặt Mua</button>
          </div>
        </nav>
        <div className="product">
          <div className="infoOrder">
            <img src={img_url} alt="img" className="img-rounded" />
            <h3>{this.props.name}</h3>
            <span>{price}đ + 55.000đ(ship) = 255.000đ</span>
          </div>
          <div className="infoNguoiNhan">
            <div className="title-border">
              <p>Thông tin người nhận</p>
            </div>
            <p className="text-center">Điền đầy đủ thông tin người nhận hàng</p>
            <FormNguoiNhan
              ref="formNguoiNhan"
              city={this.props.city}
              weight={this.props.weight}
              district={this.props.district}
              onChangeTest={this.test}
              onChangeSelectCity={this._onChangeSelectCity}
              onChangeDisable={this._ChangeDisable} />

            <div className="title-border">
              <p>Hình thức vận chuyển</p>
            </div>
            <div className="form-inline">
              <HinhthucVanchuyen
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
                hinhthucVC={this.state.hinhthucVC} />
            </div>

          </div>
        </div>
      </div>
    );
  }

  _onChangeSelectCity(citySelect) {
    this.props.CityActions.getDistrict({city: citySelect});
  }

  handleClickHuy() {
    this.props.Prev();
  }

  handleClickDatMua() {
    this.props.Next();
  }

  _ChangeDisable(value) {
    console.log('_ChangeDisable', value);
    this.setState({
      disabled: value,
    });
  }

  _ChangeVanchuyen (value, checked) {
    if(checked) {
      this.setState({
        hinhthucVC: value,
      });
    } else {
      this.setState({
        hinhthucVC: '',
      });
    }
  }

  test() {
    this.setState({
      hinhthucVC: ''
    });
  }

};
