/* @jsx React.DOM */
"use strict";

import React         from 'react';
import FluxComponent from 'flummox/component';

/* @jsx */
import Header    from '../components/Header';
import Thumbnail from '../components/Thumbnail';


export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.AppActions = props.flux.getActions('appActions');

    this.state = {};
  }

  static async routerWillRunOnServer(state, flux) {
    let AppActions = flux.getActions('appActions');
    return await AppActions.dataActions();
  }

  componentWillMount() {
    this.props.headParams.setTitle("HomeTest | tocu.vn");
    this.props.headParams.setDescription("home Description");
  }

  componentDidMount() {
    this.AppActions.dataActions();
  }

  render() {
    return (
      <div >
        <FluxComponent>
          <Header />
        </FluxComponent>

        <section id="content">
          <div className="container">
            <FluxComponent connectToStores={{
                appStore: store => ({ posts: store.getData() }), 
              }} >
              <Thumbnail />
            </FluxComponent>
          </div>
        </section>
      </div>
    );
  }
  
};

Home.contextTypes = {
  flux: React.PropTypes.object.isRequired,
  router: React.PropTypes.func.isRequired,
};
