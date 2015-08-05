"use strict";

import React     from 'react/addons';
import BoxStore  from '../../store/BoxStore';
import AuthStore from '../../store/AuthStore';
/**
 * @Component
 */
import ThumbItem from './ThumbItem';


export default class ThumbNail extends React.Component {

  constructor(props) {
    super(props);
    this._onChangeAuthStore = this._onChangeAuthStore.bind(this);
    this._onChangeBoxStore = this._onChangeBoxStore.bind(this);

    this.state = {
      boxs: BoxStore.getState().boxs,
      auth: AuthStore.getState().auth,
    };
  }

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    BoxStore.listen(this._onChangeBoxStore);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    BoxStore.unlisten(this._onChangeBoxStore);
  }

  _onChangeAuthStore(state) {
    this.setState({
      auth: state.auth,
    });
  }

  _onChangeBoxStore(state) {
    this.setState({
      boxs: state.boxs,
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.boxs.map((box, i) => {
          return (
            <div key={i} className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
              <ThumbItem handleBoxLogin={this.props.handleBoxLogin} auth={this.state.auth} box={box} />
            </div>
          );
        })}
      </div>
    );
  }
  
};
