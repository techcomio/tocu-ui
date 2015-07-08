'use strict';

import Alt       from '../Alt';
import Axios     from 'axios';
import {Api_URL} from '../../../config-sample';


class CityActions {

  async getCity() {
  	let self = this;

    await Axios.get(`${Api_URL}/city`)
    	.then((res) => {
		    self.dispatch(res.data);
		  })
		  .catch((res) => {
		    self.actions.getCityFailed(res.data)
		  });
  }

  /**
   * tìm quận huyện theo tình thành
   * @param  {string} city [tên tỉnh/thành phố]
   * @dispatch {[quận huyện]}
   */
  getDistrict({city}) {
    let self = this;

    Axios.post(`${Api_URL}/district`, {
        city: city,
      })
      .then((res) => {
        self.dispatch(res.data);
      })
      .catch((res) => {
        self.actions.getDistrictFailed(res.data)
      });
  }

  /**
   * send lỗi cho Store
   * @param  {Error} err [Error request]
   * @dispatch {Error} [send Store]
   */
  getCityFailed(err) {
    this.dispatch(err);
  }

  /**
   * send lỗi cho Store
   * @param  {Error} err [Error request]
   * @dispatch {Error} [send Store]
   */
  getDistrictFailed(err) {
    this.dispatch(err);
  }

}

module.exports = Alt.createActions(CityActions);
