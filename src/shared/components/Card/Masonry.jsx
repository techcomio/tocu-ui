'use strict';
import React, { PropTypes } from 'react';
import { Link, Lifecycle, History } from 'react-router';
import Item from './masonry/Item';
var MasonryMixin = require('react-masonry-mixin')(React);
let InfiniteScroll = require('react-infinite-scroll')(React);


export default React.createClass({

  displayName: "BoxidContent",

  mixins: [MasonryMixin('masonryContainer', {})],

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
    const { limit, data } = this.props;
    const skip = data.getIn(['pagination', 'skip']),
      hasMore = data.getIn(['pagination', 'hasMore']);

    if(hasMore) {
      this.props.loadMore({skip: skip, limit});
    }
  },

  render() {
    const { data } = this.props;
    const childElements = data.get('product').toJS().map((post, i) => {
      return (
        <Item key={i} box={data.getIn(['product', i])} />
      );
    });
    var hasMore = data.getIn(['pagination', 'hasMore']);

    return (
      <section id="home-content">
        <div className="container">
          <div className='row row-thumbnail'>
            <div className="masonry">
              <InfiniteScroll
                ref="masonryContainer"
                loader={this.getLoaderElement()}
                pageStart={this.state.page}
                loadMore={this.loadMore}
                hasMore={hasMore}
                threshold={500}>

                {childElements}

              </InfiniteScroll >
            </div>
              {data.get('productLoad') && this.getLoaderElement()}
          </div>
        </div>
      </section>
    )
  }

});
