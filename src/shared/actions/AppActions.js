import { Actions } from 'flummox';
import httpRequest from './../utils/HttpRequest';
import { Api_Url } from '../utils/config';


export default class StargazerActions extends Actions {
	
  constructor(flux) {
    super();

    this.flux = flux;
  }

  async dataActions() {
    return await httpRequest
      .get(`http://tocu-tranduchieu.c9.io/data`)
      .exec()
      .then((val) => (val.body))
      .catch((err) => (err));
  }

}
