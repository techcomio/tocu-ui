'use strict';

import Alt       from '../Alt';
import Axios     from 'axios';
import {Api_URL} from '../../../config-sample';


class VerifyActions {

	getCode() {
		let self = this;

		Axios.get(`${Api_URL}/user/verify`, {
		  headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
		})
		.then((res) => {
			self.dispatch(res.data);
		})
		.catch((res) => {
			self.actions.getCodeFaild(res.data);
		});
	}

	getVerify(code) {
		let self = this;

		Axios.get(`${Api_URL}/user/verify/${code}`, {
		  headers: { 'Authorization': `Bearer ${localStorage.access_token}` }
		})
		.then((res) => {
			self.dispatch(res.data);
		})
		.catch((res) => {
			self.actions.getVerifyFaild(res.data);
		});
	}

	getCodeFaild(err) {
		this.dispatch(err)
	}

	getVerifyFaild(err) {
		this.dispatch(err)
	}

}

module.exports = Alt.createActions(VerifyActions);
