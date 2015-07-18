'use strict';

import Alt       from '../Alt';
import Axios     from 'axios';
import {Api_URL} from '../../../config-sample';


class ShipActions {

  /**
   * tính toán phí ship
   * @param  {string} options.city     - tên tỉnh thành
   * @param  {string} options.district - tên quận huyện
   * @param  {number} options.weight   - trọng lượng hành ship
   * @dispatch {object}                  - phí ship và phương thức thanh toán
   */
	getPhiShip({city, district, weight}) {
    let self = this;

    Axios.get(`${Api_URL}/ship`, {
      params: {
        city: city,
        district: district,
        weight: weight,
      } 
    })
    .then((res) => {
      self.dispatch(res.data);
    })
    .catch((res) => {
      console.log('catch', res);
    });
  }

}

module.exports = Alt.createActions(ShipActions);
