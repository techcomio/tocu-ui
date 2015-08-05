'use strict';

import Alt        from '../Alt';
import Axios      from 'axios';
import {Api_URL} from '../../../config-sample';


class AppActions {

	/**
	 * request lấy các bài posts
	 * @dispatch {Array} [bài posts]
	 */
  async getData() {
  	let self = this;

		await Axios.get(`${Api_URL}/box`)
    	.then((res) => {
    		/**
    		 * send data cho Store
    		 */
		    self.dispatch(res.data);
		  })
		  .catch((res) => {
		  	/**
		  	 * send lỗi cho func dataFailed
		  	 * @param  {Error} [Error request]
		  	 */
		    self.actions.dataFailed(res.data)
		  });
  }

 	/**
 	 * send lỗi cho Store
 	 * @param  {Error} err [Error request]
 	 * @dispatch {Error} [send Store]
 	 */
  dataFailed(err) {
    this.dispatch(err);
  }

}

module.exports = Alt.createActions(AppActions);
