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
      city: CityStore.getState().city
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
      <FormNguoiNhan
        ref="formNguoiNhan"
        city={this.state.city}
        district={this.state.district}
        weight={this.state.weightCart}
        next={this._next}
        onChangeSelectCity={this._onChangeSelectCity} />
    );
	},

  _next(e) {
    console.log('_next');
    console.log(this.refs.formNguoiNhan.getValue())
    this.transitionTo('/checkout-ship-method');
  },

  _onChangeSelectCity(citySelect) {
    CityActions.getDistrict({city: citySelect});
    this.setState({
      shippingMethod: '',
    });
  },

});
