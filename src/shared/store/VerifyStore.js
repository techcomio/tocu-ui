'use strict'

import Alt              from '../Alt';
import Immutable, {Map} from 'immutable';
import VerifyActions    from '../actions/VerifyActions';


class VerifyStore {

  constructor() {
    this.bindActions(VerifyActions);  // getVerify, getVerifyFaild, getCode, getCodeFaild
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.codeFaild = new Map({});
    this.verifyFaild = new Map({});
    this.verifyState = false;
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.codeFaild)) {
      this.codeFaild = Immutable.fromJS(this.codeFaild);
    }
    if (!Immutable.Map.isMap(this.verifyFaild)) {
      this.verifyFaild = Immutable.fromJS(this.verifyFaild);
    }
  }

  onGetCode(data) {
    console.log('onGetCode', data)
    this.codeFaild = new Map({});
  }

  onGetVerify(data) {
    console.log('onGetVerify', data);
    this.verifyState = true;
    this.verifyFaild = new Map({});
    this.codeFaild = new Map({});
  }

  onGetCodeFaild(err) {
    console.log('onGetCodeFaild', err);
    this.codeFaild = new Map(err);
    this.verifyFaild = new Map({});
  }

  onGetVerifyFaild(err) {
    console.log('onGetVerifyFaild', err);
    this.verifyFaild = new Map(err);
    this.verifyState = false;
  }
  
}


module.exports = Alt.createStore(VerifyStore, 'VerifyStore');
