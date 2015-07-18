'use strict'

import Alt         from '../Alt';
import CityActions from '../actions/CityActions';
import Immutable   from 'immutable';


class CityStore {

  constructor() {
    this.bindActions(CityActions);  // getCity, getDistrict, getCityFailed, getDistrictFailed

		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.city = Immutable.List()
    this.district = Immutable.List()
  }

  bootstrap() {
    if (!Immutable.List.isList(this.city)) {
      this.city = Immutable.fromJS(this.city);
    }
    if (!Immutable.List.isList(this.district)) {
      this.district = Immutable.fromJS(this.district);
    }
  }

  onGetCity(data) {
    this.city = this.city.merge(Array.from(data));
  }

  onGetDistrict(data) {
    this.district = Immutable.List(data);
  }

  onGetCityFailed(err) {
    console.log('onGetCityFailed');
  }

  onGetDistrictFailed(err) {
    // console.log(err);
    console.log('onGetDistrictFailed');
  }

}


module.exports = Alt.createStore(CityStore, 'CityStore');
