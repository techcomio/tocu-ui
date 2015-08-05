'use strict';

import Alt        from '../Alt';
import Axios      from 'axios';
import {Api_URL} from '../../../config-sample';


class BoxActions {

	/**
	 * request lấy các boxs
	 * @dispatch {Array} [boxs]
	 */
  async getBoxs() {
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
		  	 * send lỗi cho func boxsFailed
		  	 * @param  {Error} [Error request]
		  	 */
		    self.actions.boxsFailed(res.data)
		  });
  }

	/**
	 * request lấy thông tin Box
	 * @param {number} id [id box]
	 * @param {number} skip
	 * @param {number} limit
	 * @dispatch {Array} [bài posts]
	 */
  getBoxID({id}) {
  	let self = this;
		
		Axios.get(`${Api_URL}/box/${id}`)
    	.then((res) => {
    		/**
    		 * send data cho Store
    		 */
		    self.dispatch(res.data);
		  })
		  .catch((res) => {
		  	/**
		  	 * send lỗi cho func getBoxIDFailed
		  	 * @param  {Error} [Error request]
		  	 */
		    self.actions.getBoxIDFailed(res.data)
		  });		  
  }

  /**
   * like box
   * @param  {number} options.itemID - id box
   * @param  {string} options.token  - token
   * @param  {number} options.userID - id user
   * @dispatch {number}                
   */
  like({itemID, token}) {
  	let self = this;

  	Axios.post(`${Api_URL}/like`, { type: "box", itemId: itemID }, {
      headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
    })
    .then((res) => {
      self.dispatch(itemID);
    })
    .catch((res) => {
      self.actions.likeFailed(res.data);
    });
  }

 	/**
 	 * send lỗi cho Store
 	 * @param  {Error} err [Error request]
 	 * @dispatch {Error} [send Store]
 	 */
  boxsFailed(err) {
    this.dispatch(err);
  }

 	/**
 	 * send lỗi cho Store
 	 * @param  {Error} err [Error request]
 	 * @dispatch {Error} [send Store]
 	 */
  getBoxIDFailed(err) {
    this.dispatch(err);
  }

  likeFailed(err) {
  	console.log('like box Failed', err);
  }

}

module.exports = Alt.createActions(BoxActions);
