'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import VerifyActions      from '../actions/VerifyActions';


class VerifyStore {

  constructor() {
    this.bindActions(VerifyActions);  // getVerify, getVerifyFaild, getCode, getCodeFaild
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.verify = new Map({});
    this.verifyFaild = new Map({});
    this.verifyState = false;
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.verify)) {
      this.verify = Immutable.fromJS(this.verify);
    }
    if (!Immutable.Map.isMap(this.verifyFaild)) {
      this.verifyFaild = Immutable.fromJS(this.verifyFaild);
    }
  }

  onGetCode(data) {
    console.log('onGetCode', data)
    this.verify = this.verify.merge(data);
  }

  onGetVerify(data) {
    this.verifyState = true;
  }

  onGetCodeFaild(err) {
    console.log('onGetCodeFaild', err);
    this.verifyFaild = this.verifyFaild.merge(err);
  }

  onGetVerifyFaild(err) {
    console.log('onGetVerifyFaild', err);
    this.verifyFaild = this.verifyFaild.merge(err);
  }
  
}


module.exports = Alt.createStore(VerifyStore, 'VerifyStore');
