'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import ProfileInfo from './home/profileInfo';
import InfoBar from './home/infoBar';


@connect(state => ({
  user: state.auth.get('user')
  , boxCount: state.box.get('boxCount')
  , productCount: state.product.get('productCount')
}))

export default class HeaderHome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      transform: false
    }
  }

  render() {
    const { user, boxCount, productCount } = this.props;

    return (
      <header>
        <Navbar />

        <ProfileInfo />

        <InfoBar boxCount={boxCount}
                productCount={productCount}/>
      </header>
    );
  }


};
