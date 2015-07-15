'use strict';

import Alt        from '../Alt';
import Axios      from 'axios';
import {Api_URL} from '../../../config-sample';


class BoxActions {

	/**
	 * request lấy các bài posts trong
	 * @param {number} id [id box]
	 * @param {number} skip
	 * @param {number} limit
	 * @dispatch {Array} [bài posts]
	 */
  async getBoxID({id, skip, limit}) {
  	let self = this;
		
		await Axios.get(`${Api_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
    	.then((res) => {
    		/**
    		 * send data cho Store
    		 */
		    self.dispatch(res.data);
		  })
		  .catch((res) => {
		  	/**
		  	 * send lỗi cho func dataError
		  	 * @param  {Error} [Error request]
		  	 */
		    self.actions.getBoxIDFailed(res.data)
		  });		  
  }

  like({id, token}) {
  	console.log('like Actions', id)
  }


 	/**
 	 * send lỗi cho Store
 	 * @param  {Error} err [Error request]
 	 * @dispatch {Error} [send Store]
 	 */
  getBoxIDFailed(err) {
    this.dispatch(err);
  }

  

}

module.exports = Alt.createActions(BoxActions);
