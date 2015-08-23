'use strict';
import React from 'react/addons';
import { Navigation } from 'react-router';
import classNames from 'classnames';
import CityStore from '../store/CityStore';
import CartStore from '../store/CartStore';
import ShipStore from '../store/ShipStore';
import CityActions from '../actions/CityActions';
/**
 * @Component
 */
import NavbarCartShip from '../components/Header/Navbar/NavbarCartShip';
import FormNguoiNhan from '../components/FormOrder/formNguoiNhan';


export default React.createClass({

  mixins: [ Navigation ],

  getInitialState() {
    return {
      disabled: true
      , city: CityStore.getState().city
      , district: CityStore.getState().district
      , listCart: CartStore.getState().listCart
      , cartId: CartStore.getState().cartId
      , totalCart: CartStore.getTotalCart()
      , weightCart: CartStore.getWeightCart()
      , phiship: ShipStore.getState().phiship
    }
  },

  componentDidMount() {
    CityStore.listen(this._onChangeCityStore);
    CartStore.listen(this._onChangeCartStore);
    ShipStore.listen(this._onChangeShipStore);
  },

  componentWillUnmount() {
    CityStore.unlisten(this._onChangeCityStore);
    CartStore.unlisten(this._onChangeCartStore);
    ShipStore.unlisten(this._onChangeShipStore);
  },

  _onChangeCityStore(state) {
    this.setState({
      city: CityStore.getState().city
      , district: CityStore.getState().district
    });
  },

  _onChangeCartStore(state) {
    this.setState({
      listCart: CartStore.getState().listCart
      , cartId: CartStore.getState().cartId
      , totalCart: CartStore.getTotalCart()
      , weightCart: CartStore.getWeightCart()
    });
  },

  _onChangeShipStore(state) {
    this.setState({
      phiship: ShipStore.getState().phiship
    });
  },

  componentWillMount() {
    this.props.HeadParams.setTitle("Checkout | tocu.vn");
    this.props.HeadParams.setDescription("Checkout | Description");
  },

	render () {
    return (
      <div className="cart">
        <NavbarCartShip
          disabled={this.state.disabled}
          next={this._next}
          prev={this._prev} />

        <div className="cart-checkout">
          <div className="sidebar">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      GIỎ HÀNG <i className="fa fa-angle-down pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div aria-expanded="true" id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    <ul className="list-group">
                      {this.renderListCart()}
                    </ul>
                    <div className="panel-footer">
                      <div className="panel-table">
                        <div className="panel-key">Tổng:</div>
                        <div className="panel-val">{this.formatNumber(this.state.totalCart)}đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="" role="button" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      VẬN CHUYỂN <i className="fa fa-angle-down pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div aria-expanded="true" id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body panel-vanchuyen">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="panel-list">
                          <div className="panel-key">Phí:</div>
                          <div className="panel-val">{this.formatNumber(this.state.phiship.get('cost'))}đ</div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="panel-list">
                          <div className="panel-key">Thời gian:</div>
                          <div className="panel-val">3 ngày</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-checkout">
            <FormNguoiNhan
              ref="formNguoiNhan"
              city={this.state.city}
              district={this.state.district}
              weight={this.state.weightCart}
              onChangeSelectCity={this._onChangeSelectCity}
              onChangeDisable={this._ChangeDisable} />
          </div>
        </div>
      </div>
    );
	},

  renderListCart() {
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
        "list-group-item": true
        , disabled: cart.get('status') !== "available"
      });

      return (
        <li key={i} className={classer}>
          <div className="list-group-body-item">
            <div className="img">
              <span className="imgIcon">
                <img src={imgUrl} />
              </span>
            </div>
            <div className="newsText">
              <div className="title">{cart.get('code')}</div>
              <div className="price">
                <span className="price-list">{salePrice || price}đ</span>
              </div>
            </div>
          </div>
        </li>
      );
    });
  },

  formatNumber(number) {
    if(typeof number === "number") {
      return number.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
    } else {
      return 0;
    }
  },

  _next(e) {
    console.log('_next');
    console.log(this.refs.formNguoiNhan.getValue())
  },

  _prev(e) {

  },

  _onChangeSelectCity(citySelect) {
    CityActions.getDistrict({city: citySelect});
    this.setState({
      shippingMethod: '',
    });
  },

  _ChangeDisable(value) {
    this.setState({
      disabled: value,
    });
  }

});
