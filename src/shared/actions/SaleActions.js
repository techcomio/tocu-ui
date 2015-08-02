'use strict';

import Alt       from '../Alt';
import Axios     from 'axios';
import {Api_URL} from '../../../config-sample';


class SaleActions {

	async getProductSale() {
  	let self = this;

    await Axios.get(`${Api_URL}/product`, {
	    	params: {
	    		filters: `salePrice!=null`,
	    		limit: 5
	    	}
	    })
    	.then((res) => {
		    self.dispatch(res.data);
		  });
  }
  
}

module.exports = Alt.createActions(SaleActions);
