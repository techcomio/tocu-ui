'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import NavbarBox from '../Navbar/box';


@connect(state => ({
  boxIdInfo: state.box.get('boxIdInfo')
}))

export default class HeaderBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { boxIdInfo } = this.props;

    return (
      <header>
        <Navbar />

        <NavbarBox info={boxIdInfo} />
      </header>
    );
  }


};
