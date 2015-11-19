'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Thumbnail from './thumbnail';


@connect(state => ({
  boxs: state.box
  , user: state.auth.get('user')
}))

export default class ThumbBox extends React.Component {

  render() {
    const { boxs, user } = this.props;

    return (
      <div className="row row-thumbnail">
        {boxs.get('boxs').map((box, i) => (
          <div key={i} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <Thumbnail auth={user} box={box} />
          </div>
        ))}
      </div>
    );
  }

};
