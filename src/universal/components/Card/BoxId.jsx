'use strict';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import BoxItem from '../Box/BoxItem';
let Masonry = require('react-masonry-component')(React);
let InfiniteScroll = require('react-infinite-scroll2')(React, ReactDOM);


export default React.createClass({

  displayName: "BoxidContent",

  getInitialState: function () {
    return {
      page: 0,
      hasMore: true,
      skip: 15,
      limit: 15,
    };
  },

  getLoaderElement: function () {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='div-loading text-center'><i className='fa fa-spinner fa-pulse'></i></div>
      </div>
    );
  },

  loadMore: function (page) {
    const { boxId, limit, box } = this.props;
    const skip = box.getIn(['pagination', 'skip']),
      hasMore = box.getIn(['pagination', 'hasMore']);

    if(hasMore) {
      this.props.getBoxIdPage({id: boxId, skip: skip, limit});
    }
  },

  render() {
    const { box, location } = this.props;
    const childElements = box.get('boxsId').toJS().map((post, i) => {
      return (
        <BoxItem key={i} location={location} box={box.getIn(['boxsId', i])} />
      );
    });
    var hasMore = box.getIn(['pagination', 'hasMore']);

    return (
      <section id="box-content">
        <div className="container">
          <div className='row row-thumbnail'>
          <InfiniteScroll
            loader={this.getLoaderElement()}
            pageStart={this.state.page}
            loadMore={this.loadMore}
            hasMore={hasMore}
            threshold={500}>

            <Masonry
              className="masonry" // default ''
              elementType="div" // default 'div'
              options={{transitionDuration: 0}} // default {}
              disableImagesLoaded={true} >

              {childElements}
            </Masonry>
            {box.get('boxsIdLoad') && this.getLoaderElement()}
          </InfiniteScroll>

          </div>
        </div>
      </section>
    )
  }

});
