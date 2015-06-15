import { Actions } from 'flummox';
import httpRequest from './../utils/HttpRequest';
import { Api_Url } from '../utils/config';


export default class StargazerActions extends Actions {

  async getCityActions() {
    return await httpRequest
      .get(`${Api_Url}/city`)
      .exec()
      .then((val) => (val.body));
  }

  async getDistrictActions(citySelect) {
    return await httpRequest
      .post(`${Api_Url}/district`)
      .send(citySelect)
      .exec()
      .then((val) => (val.body));
  }

}
