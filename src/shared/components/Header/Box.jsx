"use strict";

import React       from 'react/addons';
import Router      from 'react-router';
import AuthStore   from '../../store/AuthStore';
import BoxStore    from '../../store/BoxStore';
import OrderStore  from '../../store/OrderStore';
import AuthActions from '../../actions/AuthActions';
import BoxActions  from '../../actions/BoxActions';
/**
 * @Component
 */
import AltContainer from 'alt/AltContainer';
import Header       from './Navbar/navbar';
import Navbar       from './Navbar/NavbarBox';


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.instanceOf(Router).isRequired
  },

  getInitialState() {
    return {
      auth: AuthStore.getState().auth,
      info: BoxStore.getState().info,
      count: OrderStore.getTotalSize(),
    }
  },

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    BoxStore.listen(this._onChangeBoxStore);
    OrderStore.listen(this._onChangeOrderStore);
  },

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    BoxStore.unlisten(this._onChangeBoxStore);
    OrderStore.unlisten(this._onChangeOrderStore);
  },

  _onChangeAuthStore(state) {
    this.setState({
      auth: state.auth
    });
  },

  _onChangeBoxStore(state) {
    this.setState({
      info: state.info
    });
  },

  _onChangeOrderStore(state) {
    this.setState({
      count: OrderStore.getTotalSize(),
    });
  },

  render() {
    return (
      <div className="header-product">
        <Header
          count={this.state.count}
          AuthActions={AuthActions}
          auth={this.state.auth} />

        <Navbar
          info={this.state.info}
          auth={this.state.auth}
          handleBoxLogin={this.props.handleBoxLogin}
          BoxActions={BoxActions} />

      </div>
    );
  },

});
