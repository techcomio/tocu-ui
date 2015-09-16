'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import NavbarBox from '../Navbar/box';


@connect(state => ({
  boxId: state.box.get('boxId')
}))

export default class HeaderBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { boxId } = this.props;

    return (
      <header>
        <Navbar />

        <NavbarBox info={boxId} />
      </header>
    );
  }


};
