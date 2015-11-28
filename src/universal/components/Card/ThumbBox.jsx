'use strict';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Thumbnail from './thumbnail';


export default class ThumbBox extends React.Component {

  static propTypes = {
    box: ImmutablePropTypes.shape({
      boxs: ImmutablePropTypes.list.isRequired
    }).isRequired
  }

  render() {
    const { box } = this.props;

    return (
      <div className="row row-thumbnail">
        {box.get('boxs').map((item, i) => (
          <div key={i} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <Thumbnail box={item} />
          </div>
        ))}
      </div>
    );
  }

}
