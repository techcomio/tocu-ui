'use strict';

import React from 'react/addons';
import classNames from 'classnames';
import CartStore from '../../store/CartStore';
import AuthStore from '../../store/AuthStore';
import CityStore from '../../store/CityStore';
import ShipStore from '../../store/ShipStore';
import CartActions from '../../actions/CartActions';
import CityActions from '../../actions/CityActions';
/**
 * @Component
 */
import NavbarCart from '../Header/Navbar/NavbarCart';
import NavbarCartShip from '../Header/Navbar/NavbarCartShip';
import FormNguoiNhan     from './formNguoiNhan';


export default class FormOrder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hideHeader: false
      , status: CartStore.getState().status
      , cartId: CartStore.getState().cartId
      , listCart: CartStore.getState().listCart
      , totalCart: CartStore.getTotalCart()
      , weightCart: CartStore.getWeightCart()
      , totalCartSale: CartStore.getTotalCartSale()
      , current: 1
      , auth: AuthStore.getState().auth
      , city: CityStore.getState().city
      , district: CityStore.getState().district
      , phiship: ShipStore.getState().phiship
    }
  }

  componentDidMount() {
    CartStore.listen(this._onChangeCartStore);
    AuthStore.listen(this._onChangeAuthStore);
    CityStore.listen(this._onChangeCityStore);
    ShipStore.listen(this._onChangeShipStore);
  }

  componentWillUnmount() {
    CartStore.unlisten(this._onChangeCartStore);
    AuthStore.unlisten(this._onChangeAuthStore);
    CityStore.unZlisten(this._onChangeCityStore);
    ShipStore.unZlisten(this._onChangeShipStore);
  }

  _onChangeCartStore = (state) => {
    this.setState({
      listCart: CartStore.getState().listCart
      , status: CartStore.getState().status
      , cartId: CartStore.getState().cartId
      , totalCart: CartStore.getTotalCart()
      , weightCart: CartStore.getWeightCart()
      , totalCartSale: CartStore.getTotalCartSale()
    });
  }

  _onChangeAuthStore = (state) => {
    this.setState({
      auth: state.auth
    });
  }

  _onChangeCityStore = (state) => {
    this.setState({
      city: CityStore.getState().city
      , district: CityStore.getState().district
    });
  }

  _onChangeShipStore = (state) => {
    this.setState({
      phiship: ShipStore.getState().phiship
    });
  }

  render() {
    let classNavbarOrder = classNames({
      "navbar-product-detail": true
      , sticky: this.state.hideHeader
    });

    if(this.state.current === 1) {
      return (
        <div className="cart">
          {/* NavbarCart */}
          <NavbarCart
            CartActions={CartActions}
            auth={this.state.auth}
            cartId={this.state.cartId}
            status={this.state.status}
            handleBoxLogin={this.props.handleBoxLogin}
            next={this._next}
            prev={this._prev} />

          <div className="cart-table">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="hidden-sm hidden-xs">#</th>
                    <th className="td-sanpham">Sản phẩm</th>
                    <th>Giá</th>
                    <th className="hidden-sm hidden-xs acenter">SL</th>
                    <th className="hidden-sm hidden-xs aright">Thành tiền</th>
                    <th className="delete">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderItem()}
                </tbody>
                <tfoot>
                  <tr className="padT20">
                    <td className="hidden-sm hidden-xs"></td>
                    <td className="hidden-sm hidden-xs"></td>
                    <td className="hidden-sm hidden-xs"></td>
                    <td colSpan="1">Trước giảm giá:</td>
                    <td className="aright" colSpan="1">{this.formatNumber(this.state.totalCart)}đ</td>
                    <td colSpan="1">&nbsp;</td>
                  </tr>
                  <tr className="total">
                    <td className="hidden-sm hidden-xs"></td>
                    <td className="hidden-sm hidden-xs"></td>
                    <td className="hidden-sm hidden-xs"></td>
                    <td colSpan="1">Tổng:</td>
                    <td className="aright" colSpan="1">{this.formatNumber(this.state.totalCartSale)}đ</td>
                    <td colSpan="1">&nbsp;</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )
    }

    if(this.state.current === 2) {
      return (
        <div className="cart">
          <NavbarCartShip
            next={this._next}
            prev={this._prev} />
          <div className="cart-form-ship">
            <FormNguoiNhan
              ref="formNguoiNhan"
              city={this.state.city}
              district={this.state.district}
              product={this.state.product}
              onChangeTest={this.resetHinhthucVC}
              onChangeSelectCity={this._onChangeSelectCity}
              onChangeDisable={this._ChangeDisable} />
          </div>
        </div>
      );
    }

    return <div />;
  }

  renderItem = () => {
    return this.state.listCart.map((cart, i) => {
      let url = cart.get('imageUrl');
      let imgUrl = url.replace(/image\//gi, 'image/50x50/');

      let price = null;
      let salePrice = null;
      if(cart.get('price')) {
        price = this.formatNumber(cart.get('price'));
      }
      if(cart.get('salePrice')) {
        salePrice = this.formatNumber(cart.get('salePrice'));
      }

      let classer = classNames({
        disabled: cart.get('status') !== "available"
      });

      return (
        <tr key={i} className={classer}>
          <th className="hidden-sm hidden-xs" scope="row">{i+1}</th>
          <td>
            <div className="imageIcon"><img src={imgUrl} /></div>
            <div className="nameInfo">
              <span className="code">{cart.get('code')}</span>
              <span className="name">{cart.get('boxName')}</span>
            </div>
          </td>
          <td>{this.renderPrice(cart, price, salePrice)}</td>
          <td className="hidden-sm hidden-xs acenter"><div>1</div></td>
          <td className="hidden-sm hidden-xs aright"><div>{salePrice || price}đ</div></td>
          <td className="delete"><div><i onClick={this._onClickDestroy.bind(this, cart.get('id'))} className="destroy"></i></div></td>
        </tr>
      );
    });
  }

  formatNumber = (number) => {
    return number.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
  }

  renderPrice = (cart, price, salePrice) => {
    if(cart.get('salePrice')) {
      return (
        <div>
          <span className="sale">{price}đ</span>
          <span>{salePrice}đ</span>
        </div>
      )
    } else {
      return (
        <div>
          <span>{price}đ</span>
        </div>
      );
    }
  }

  _onChangeSelectCity = (citySelect) => {
    CityActions.getDistrict({city: citySelect});
    this.setState({
      shippingMethod: '',
    });
  }

  _ChangeDisable = (value) => {
    this.setState({
      disabled: value,
    });
  }

  resetHinhthucVC = () => {
    this.setState({
      hinhthucVC: null
    });
  }

  _onClickDestroy = (pId) => {
    CartActions.destroyCart(this.state.cartId, pId);
  }

  _next = () => {
    this.setState({
      current: this.state.current + 1,
    });
  }

  _prev = () => {
    this.setState({
      current: this.state.current - 1,
    });
  }

}
