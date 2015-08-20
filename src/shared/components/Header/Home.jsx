 /* @jsx React.DOM */
'use strict';

import React        from 'react/addons';
import { Link }     from 'react-router';
import classNames   from 'classnames';
import BoxStore     from '../../store/BoxStore';
import AuthStore    from '../../store/AuthStore';
import CartStore from '../../store/CartStore';
import SanphamStore from '../../store/SanphamStore';
import AuthActions from '../../actions/AuthActions';
/**
 * @Component
 */
import Navbar      from './Navbar/navbar';
import InfoBar     from './Home/infoBar';
import ProfileInfo from './Home/profileInfo';


export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      auth: AuthStore.getState().auth,
      countSanpham: SanphamStore.getState().count,
      box: BoxStore.getState().boxs,
      count: CartStore.getCountCart(),
    }
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    BoxStore.listen(this._onChangeBoxStore);
    SanphamStore.listen(this._onChangeSanphamStore);
    CartStore.listen(this._onChangeCartStore);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    BoxStore.unlisten(this._onChangeBoxStore);
    SanphamStore.unlisten(this._onChangeSanphamStore);
    CartStore.unlisten(this._onChangeCartStore);
  }

  _onChangeAuthStore = (state) => {
    this.setState({
      auth: state.auth
    });
  }

  _onChangeSanphamStore = (state) => {
    this.setState({
      countSanpham: state.count
    });
  }

  _onChangeBoxStore = (state) => {
    this.setState({
      box: state.boxs
    });
  }

  _onChangeCartStore = (state) => {
    this.setState({
      count: CartStore.getCountCart()
    });
  }

  render() {
    return (
      <header>
        <div className="container-fluid">
          <Navbar
            count={this.state.count}
            AuthActions={AuthActions}
            auth={this.state.auth} />

          <ProfileInfo />

          <InfoBar
            countSanpham={this.state.countSanpham}
            Box={this.state.box} />

        </div>
      </header>
    );
  }
  
};
