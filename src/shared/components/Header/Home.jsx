 /* @jsx React.DOM */
'use strict';

import React        from 'react/addons';
import { Link }     from 'react-router';
import classNames   from 'classnames';
import BoxStore     from '../../store/BoxStore';
import AuthStore    from '../../store/AuthStore';
import OrderStore  from '../../store/OrderStore';
import SanphamStore from '../../store/SanphamStore';
import AuthActions  from '../../actions/AuthActions';
/**
 * @Component
 */
import Navbar      from './Navbar/navbar';
import InfoBar     from './Home/infoBar';
import ProfileInfo from './Home/profileInfo';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this._onChangeAuthStore = this._onChangeAuthStore.bind(this);
    this._onChangeSanphamStore = this._onChangeSanphamStore.bind(this);
    this._onChangeBoxStore = this._onChangeBoxStore.bind(this);
    this._onChangeOrderStore = this._onChangeOrderStore.bind(this);

    this.state = {
      auth: AuthStore.getState().auth,
      countSanpham: SanphamStore.getState().count,
      box: BoxStore.getState().boxs,
      count: OrderStore.getTotalSize(),
    }
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    BoxStore.listen(this._onChangeBoxStore);
    SanphamStore.listen(this._onChangeSanphamStore);
    OrderStore.listen(this._onChangeOrderStore);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    BoxStore.unlisten(this._onChangeBoxStore);
    SanphamStore.unlisten(this._onChangeSanphamStore);
    OrderStore.unlisten(this._onChangeOrderStore);
  }

  _onChangeAuthStore(state) {
    this.setState({
      auth: state.auth,
    });
  }

  _onChangeSanphamStore(state) {
    this.setState({
      countSanpham: state.count,
    });
  }

  _onChangeBoxStore(state) {
    this.setState({
      box: state.boxs,
    });
  }

  _onChangeOrderStore(state) {
    this.setState({
      count: OrderStore.getTotalSize(),
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
