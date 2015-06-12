import { Actions } from 'flummox';
import httpRequest from './../utils/HttpRequest';
import { Api_Url } from '../utils/config';


export default class StargazerActions extends Actions {
	
  constructor(flux) {
    super();

    this.flux = flux;
  }

  async TestActions() {
    return await httpRequest
      .get(`http://localhost:8080/data`)
      .exec()
      .then((val) => (val.body))
      .catch((err) => (err));
  }

}
