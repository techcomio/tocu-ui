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

  /**
   * actions view san pham ID
   * @param  {object} sanpham - san pham nguoi dung click view
   * @dispatch {object}
   */
  actionSanphamID(sanpham) {
  	this.dispatch(sanpham);
  }

  
  like({itemId, token, type, userID}) {
    let self = this;

    Axios.post(`${Api_URL}/like`, {
      type: type,
      itemId: itemId,
      UserId: userID,
    })
    .then((res) => {
      self.dispatch(res.data);
    })
    .catch((res) => {
      self.actions.likeFailed(res.data);
    });
  }

  likeFailed(err) {
    console.log('likeFailed', err);
  }

  count() {
    let self = this;
    Axios.get(`${Api_URL}/product/count`)
      .then((res) => {
        self.dispatch(res.data);
      })
  }

}

module.exports = Alt.createActions(SanphamActions);
