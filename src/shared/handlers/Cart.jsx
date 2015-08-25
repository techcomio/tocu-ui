'use strict';
import React from 'react/addons';
import {prepareRoute} from '../decorators';
import CityActions from '../actions/CityActions';
/**
 * @Component
 */
import Header from '../components/Header';
import BoxSignIn from '../components/Form/BoxSignIn';
import FormOrder from '../components/FormOrder/test';


@prepareRoute(async function ({ params }) {
  return await * [
    CityActions.getCity(),
  ];
})

export default class Application extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      boxLogin: false,
      current: 1,
    };
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
            {this.renderBody()}
            </div>
          </div>
        </div>
        {this.renderBoxLogin()}
      </div>
    );
  }

  renderBody = () => {
    if(this.props.location.pathname === "/cart") {
      return (
        <FormOrder
          handleBoxLogin={this.handleBoxLogin} />
      );
    }

    if(this.props.location.pathname !== "/cart") {
      return this.props.children;
    }
    return <div />
  }

  renderBoxLogin = () => {
    if(this.state.boxLogin) {
      return (
        <BoxSignIn hideBoxLogin={this.hideBoxLogin} location={this.props.location} />
      );
    }
  }

  handleBoxLogin = () => {
    this.setState({
      boxLogin: true,
    });
  }

  hideBoxLogin = () => {
    this.setState({
      boxLogin: false,
    });
  }

};
