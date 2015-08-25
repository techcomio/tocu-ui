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

export default React.createClass({

  mixins: [ Navigation ],

  componentWillMount() {
    // this.props.HeadParams.setTitle("Checkout | tocu.vn");
    // this.props.HeadParams.setDescription("Checkout | Description");
  },

	render() {
    return (
      <div>
        <div className="ship-address">
          <div className="row">
            <h4 className="ship-address-title">Phương thức thanh toán</h4>
            <div className="col-sm-12 col-md-12">
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" value="option1" />
                  Chuyển khoản nội địa
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-continue">
          <button type="button" className="btn btn-primary navbar-btn btn-block">Tiếp</button>
        </div>
      </div>
    );
	},

});
