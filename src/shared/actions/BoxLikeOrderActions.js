'use strict';

import Alt        from '../Alt';
import Axios      from 'axios';
import {Api_URL} from '../../../config-sample';


class BoxLikeOrderActions {

  getListLike({id}) {
    Axios.get(`${Axios}/`)
      .then((res) => {
        console.log(res);
      })
  }

}

module.exports = Alt.createActions(BoxLikeOrderActions);
