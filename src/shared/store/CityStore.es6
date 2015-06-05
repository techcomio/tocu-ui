import { Store } from 'flummox';

export default class AppStore extends Store { 
	constructor(flux) {
    super();

    let cityActions = flux.getActions('cityActions');
    this.register(cityActions.getCityActions, this.handleGetCity);
    this.register(cityActions.getDistrictActions, this.handleGetDistrict);

    this.state = {};
  }
  
  handleGetCity(city) {
    this.state.city = city;
    this.emit('change');
  }

  handleGetDistrict(district) {
  	this.state.district = district;
    this.emit('change');
  }

  getCity() {
    return this.state.city || null;
  }

  getDistrict() {
    return this.state.district || null;
  }

}
