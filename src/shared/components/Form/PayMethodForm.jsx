'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import { initialize, connectReduxForm } from 'redux-form';
import { getDistrict } from '../../actions/location';
import { getPhiShip } from '../../actions/order';
import { paymethodValidation } from '../../validation/paymethodValidation'


@connectReduxForm({
  form: 'paymethod'
  , fields: ['shipping']
  , validate: paymethodValidation
})

@connect(state => ({
  cart: state.cart
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
    const paymentMethod = cart.getIn(["Cart", "paymentMethod"]);

    if(paymentMethod) {
      dispatch(initialize('paymethod', {shipping: paymentMethod}));
    }
  }

  render() {
    const {
      fields: { shipping }
      , handleSubmit
      , valid
      , cart
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="checkout-title text-center">Phương thức thanh toán</div>

        <div className="radio">
          <label>
            <input
              type="radio"
              name="shippingRadios"
              {...shipping}
              value="atmCard" defaultChecked />
            Chuyển khoản nội địa
          </label>
        </div>

        <div className="btn-continue">
          <button
            type="submit"
            className="btn btn-primary navbar-btn btn-block"
            onClick={handleSubmit}
            disabled={!valid || cart.get('paymentLoad')} >

            {cart.get('paymentLoad') && <i className="fa fa-spinner fa-pulse"></i>} Tiếp

          </button>
        </div>
      </form>
    );
  }

}
