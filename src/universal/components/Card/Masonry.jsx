'use strict';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, Lifecycle, History } from 'react-router';
import Item from './masonry/Item';
let Masonry = require('react-masonry-component')(React);
let InfiniteScroll = require('react-infinite-scroll2')(React, ReactDOM);


export default React.createClass({

  displayName: "MasonryContent",

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
    const { data, location } = this.props;
    const childElements = data.get('product').toJS().map((post, i) => {
      return (
        <Item key={i} box={post} location={location} />
      );
    });
    var hasMore = data.getIn(['pagination', 'hasMore']);

    return (
      <section id="home-content">
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
                disableImagesLoaded={false} >
                {childElements}
              </Masonry>

              {data.get('productLoad') && this.getLoaderElement()}
            </InfiniteScroll>
          </div>
        </div>
      </section>
    )
  }

});
