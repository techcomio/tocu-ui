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
  , fields: ['name', 'mobilePhone', 'diachi', 'city', 'district']
  , validate: orderValidate
})

@connect(state => ({
  location: state.location
  , cart: state.cart
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
    const { dispatch, cart } = this.props;
    const shippingInfo = cart.getIn(["Cart", "shippingInfo"]).toJS();

    if(shippingInfo) {
      dispatch(initialize('order', shippingInfo));
    }
  }

  render() {
    const {
      fields: {name, mobilePhone, diachi, city, district}
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
      , "has-error": mobilePhone.error && mobilePhone.touched
    });

    let classerDiachi = classNames({
      "form-group": true
      , "has-error": diachi.error && diachi.touched
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
                {mobilePhone.error && mobilePhone.touched ? <label className="control-label">{mobilePhone.error}</label> : <label />}
                <input type="tel"
                      pattern="^([0-9]{10,11})$"
                      className="form-control"
                      placeholder="Số điện thoại"
                      {...mobilePhone} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label />
            <div className="row">
              <div className="col-xs-6">
                <select className="form-control" {...city} onChange={this.handleCityChange.bind(this, city)} >
                  <option value="">Tỉnh Thành</option>
                  {this.props.location.get('city').map(function(city, i) {
                    return <option key={i} value={city}>{city}</option>
                  })}
                </select>
              </div>
              <div className="col-xs-6">
                <select className="form-control" {...district} onChange={this.handleDistrictChange.bind(this, district)} >
                  <option value="">Quận Huyện</option>
                  {this.props.location.get('district').map(function(district, i) {
                    return <option key={i} value={district.name}>{district.name}</option>
                  })}
                </select>
              </div>
            </div>
          </div>


          <div className={classerDiachi}>
            {diachi.error && diachi.touched ? <label className="control-label">{diachi.error}</label> : <label />}
            <input type="text"
                  className="form-control"
                  placeholder="Địa chỉ"
                  {...diachi} required />
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

  handleCityChange(city, e) {
    city.handleChange(e);
    const { dispatch } = this.props;
    const text = e.target.value.trim();
    dispatch(getDistrict({city: text}));
  }

  handleDistrictChange(districts, e) {
    districts.handleChange(e);
    const district = e.target.value.trim();
    const { fields: { city }, dispatch} = this.props;
    const weight = this.getWeightCart();
    dispatch(getPhiShip({city: city.value, district, weight}));
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
