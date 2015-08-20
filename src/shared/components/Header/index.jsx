 /* @jsx React.DOM */
'use strict';

import React from 'react/addons';
import { Link } from 'react-router';
import classNames from 'classnames';
import AuthStore from '../../store/AuthStore';
import CartStore from '../../store/CartStore';
import AuthActions from '../../actions/AuthActions';
/**
 * @Component
 */
import Navbar from './Navbar/navbar';


export default class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      auth: AuthStore.getState().auth,
      count: CartStore.getCountCart(),
    }
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    CartStore.listen(this._onChangeCartStore);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    CartStore.unlisten(this._onChangeCartStore);
  }

  _onChangeAuthStore = (state) => {
    this.setState({
      auth: state.auth,
    });
  }

  _onChangeCartStore = (state) => {
    this.setState({
      count: CartStore.getCountCart(),
    });
  }

  render() {
    console.log(this.state);
    return (
      <Navbar
        count={this.state.count}
        AuthActions={AuthActions}
        auth={this.state.auth} />
    );
  }

};
