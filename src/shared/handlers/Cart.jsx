'use strict';
import React from 'react/addons';
import {prepareRoute} from '../decorators';
/**
 * @Component
 */
import Header    from '../components/Header';
import FormOrder from '../components/FormOrder/test';


export default class Application extends React.Component {

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-9">
              <FormOrder />
            </div>
            <div className="col-md-3 col-lg-3">
            </div>
          </div>
        </div>
      </div>
    );
  }

};
