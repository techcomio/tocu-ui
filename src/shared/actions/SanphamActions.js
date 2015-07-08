'use strict';

import Alt       from '../Alt';
import Axios     from 'axios';
import {Api_URL} from '../../../config-sample';


class SanphamActions {

	/**
	 * lấy thông tin sản phẩm
	 * @param  {number} id [id sản phẩm]
	 * @dispatch {object}    thông tin sản phẩm
	 */
  async getSanphamID({id}) {
  	let self = this;

		await Axios.get(`${Api_URL}/product/${id}`)
    	.then((res) => {
    		/**
    		 * send data cho Store
    		 */
		    self.dispatch(res.data);
		  })
		  .catch((res) => {
		  	/**
		  	 * send lỗi cho func getIdFailed
		  	 * @param  {Error} [Error request]
		  	 */
		    self.actions.getIdFailed(res.data)
		  });
  }

 	/**
 	 * send lỗi cho Store
 	 * @param  {Error} err [Error request]
 	 * @dispatch {Error} [send Store]
 	 */
  getIdFailed(err) {
    this.dispatch(err);
  }

}

module.exports = Alt.createActions(SanphamActions);
