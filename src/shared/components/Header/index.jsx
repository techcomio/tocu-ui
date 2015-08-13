 /* @jsx React.DOM */
'use strict';

import React       from 'react/addons';
import { Link }    from 'react-router';
import classNames  from 'classnames';
import AuthStore   from '../../store/AuthStore';
import OrderStore  from '../../store/OrderStore';
import AuthActions from '../../actions/AuthActions';
/**
 * @Component
 */
import Navbar from './Navbar/navbar';


export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this._onChangeAuthStore = this._onChangeAuthStore.bind(this);
    this._onChangeOrderStore = this._onChangeOrderStore.bind(this);

    this.state = {
      auth: AuthStore.getState().auth,
      listOrders: OrderStore.getState().listOrders,
      totalCart: OrderStore.getTotalCart(),
      totalCartSale: OrderStore.getTotalCartSale(),
      count: OrderStore.getTotalSize(),
    }
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    OrderStore.listen(this._onChangeOrderStore);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    OrderStore.unlisten(this._onChangeOrderStore);
  }

  _onChangeAuthStore(state) {
    this.setState({
      auth: state.auth,
    });
  }

  _onChangeOrderStore(state) {
    this.setState({
      listOrders: state.listOrders,
      totalCart: OrderStore.getTotalCart(),
      totalCartSale: OrderStore.getTotalCartSale(),
      count: OrderStore.getTotalSize(),
    });
  }

  render() {
    console.log(this.state);
    return (
      <Navbar
        count={this.state.count}
        totalCart={this.state.totalCart}
        AuthActions={AuthActions}
        auth={this.state.auth} />
    );
  }

};
