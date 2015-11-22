'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { initialize, connectReduxForm } from 'redux-form';
import { getDistrict } from '../../actions/location';
import { getPhiShip } from '../../actions/order';
import { orderValidate } from '../../validation/orderValidation'


@connectReduxForm({
  form: 'order'
  , fields: ['name', 'phone', 'address', 'province', 'district']
  , validate: orderValidate
})

@connect(state => ({
  location: state.location
  , cart: state.cart
  , auth: state.auth
}))

export default class SignupForm extends React.Component {

  static propTypes = {
    asyncValidating: PropTypes.bool.isRequired
    , fields: PropTypes.object.isRequired
    , dirty: PropTypes.bool.isRequired
    , handleBlur: PropTypes.func.isRequired
    , handleChange: PropTypes.func.isRequired
    , handleSubmit: PropTypes.func.isRequired
    , resetForm: PropTypes.func.isRequired
    , invalid: PropTypes.bool.isRequired
    , pristine: PropTypes.bool.isRequired
    , valid: PropTypes.bool.isRequired
  }

  componentDidMount() {
    const { dispatch, cart, auth } = this.props;
    const shippingInfo = cart.getIn(["Cart", "shippingInfo"]);

    if(shippingInfo) {
      setTimeout(() => {
        dispatch(initialize('order', shippingInfo.toJS()));
      }, 300);
    } else {
      const {
        name,
        mobilePhone,
        province,
        district,
      } = auth.get('user').toJS();
      setTimeout(() => {
        const weight = this.getWeightCart();
        dispatch(initialize('order', {name, phone: mobilePhone, province, district}));
        dispatch(getPhiShip({province, district, weight}));
      }, 300);
    }
  }

  render() {
    const {
      fields: {name, phone, address, province, district}
      , handleSubmit
      , valid
      , cart
    } = this.props;

    let classerName = classNames({
      "form-group": true
      , "has-error": name.error && name.touched
    });

    let classerPhone = classNames({
      "form-group": true
      , "has-error": phone.error && phone.touched
    });

    let classerDiachi = classNames({
      "form-group": true
      , "has-error": address.error && address.touched
    });

    return (
      <div>
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="checkout-title text-center">Thông tin người nhận</div>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className={classerName}>
                {name.error && name.touched ? <label className="control-label">{name.error}</label> : <label />}
                <input type="text"
                      className="form-control"
                      placeholder="Họ tên"
                      {...name} />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className={classerPhone}>
                {phone.error && phone.touched ? <label className="control-label">{phone.error}</label> : <label />}
                <input type="tel"
                      pattern="^([0-9]{10,11})$"
                      className="form-control"
                      placeholder="Số điện thoại"
                      {...phone} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label />
            <div className="row">
              <div className="col-xs-6">
                <select className="form-control" {...province} onChange={this.handleCityChange.bind(this, province)} >
                  <option value="">Tỉnh Thành</option>
                  {this.props.location.get('city').map(function(city, i) {
                    return <option key={i} value={city}>{city}</option>
                  })}
                </select>
              </div>
              <div className="col-xs-6">
                <select className="form-control" {...district} onChange={this.handleDistrictChange.bind(this, district)} >
                  <option value="">Quận Huyện</option>
                  {this.props.location.get('district').map(function(dist, i) {
                    return <option key={i} value={dist.name}>{dist.name}</option>
                  })}
                </select>
              </div>
            </div>
          </div>


          <div className={classerDiachi}>
            {address.error && address.touched ? <label className="control-label">{address.error}</label> : <label />}
            <input type="text"
                  className="form-control"
                  placeholder="Địa chỉ"
                  {...address} required />
          </div>



          <div className="btn-continue">
            <button
              type="submit"
              className="btn btn-primary navbar-btn btn-block"
              onClick={handleSubmit}
              disabled={!valid || cart.get('shippingLoad')} >

              {cart.get('shippingLoad') && <i className="fa fa-spinner fa-pulse"></i>} Tiếp

            </button>
          </div>
        </form>
      </div>
    );
  }

  handleCityChange(province, e) {
    province.handleChange(e);
    const { dispatch } = this.props;
    const text = e.target.value.trim();
    dispatch(getDistrict({province: text}));
  }

  handleDistrictChange(districts, e) {
    districts.handleChange(e);
    const district = e.target.value.trim();
    const { fields: { province }, dispatch} = this.props;
    const weight = this.getWeightCart();
    dispatch(getPhiShip({province: province.value, district, weight}));
  }

  getWeightCart() {
    let total = 0
    const { cart } = this.props;

    if(cart.getIn(['Cart','lines'])) {
      cart.getIn(['Cart','lines']).forEach((product, key) => {
        if(product.get('status') === "available") {
          total += product.get('weight');
        }
      });
    }
    return total;
  }

}
