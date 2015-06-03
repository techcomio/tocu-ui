import { Actions } from 'flummox';
import httpRequest from './../utils/HttpRequest';
import { Api_Url } from '../utils/config';


export default class StargazerActions extends Actions {

  async TestAction() {
    return await httpRequest
      .get(`${Api_Url}/data`)
      .exec()
      .then((val) => (val.body));
  }

}
