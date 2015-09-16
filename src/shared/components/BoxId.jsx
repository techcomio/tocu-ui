'use strict';
import React, { PropTypes } from 'react';
import Axios from 'axios';
import ReactAsync from 'react-async';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { API_URL } from '../../../config';
import BoxItem from './Box/BoxItem';
let MasonryMixin = require('react-masonry-mixin')(React);
let InfiniteScroll = require('react-infinite-scroll')(React);


var createUniqueArray = (function () {
  return function (inputArray, sorter) {
    var arrResult = {};
    var nonDuplicatedArray = [];
    var i, n;

    for (i = 0, n = inputArray.length; i < n; i++) {
      var item = inputArray[i];

      if (sorter) {
        arrResult[item[sorter]] = item;
      } else {
        arrResult[item] = item;
      }
    }

    i = 0;

    for (var item in arrResult) {
      nonDuplicatedArray[i++] = arrResult[item];
    }

    return nonDuplicatedArray;
  };
})();

export default React.createClass({

  displayName: "BoxidContent",

  mixins: [ReactAsync.Mixin, MasonryMixin('masonryContainer', {})],

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.category !== this.props.category) {
      this.setState({
        page: 0,
        posts: [],
        hasMore: true,
        boxLogin: false,
        skip: 0,
        limit: 15,
      });
    }
  },

  getInitialStateAsync: function (callback) {
    callback(null, {
      page: 0,
      posts: [],
      hasMore: true,
      boxLogin: false,
      skip: 0,
      limit: 15,
    });
  },

  getLoaderElement: function () {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='div-loading text-center'><i className='fa fa-spinner fa-pulse'></i></div>
      </div>
    );
  },

  handleLoad(data, page) {
    let limit = this.state.limit;
    let hasMore = data.length == limit;
    let skip = this.state.skip += limit

    this.setState({
      posts: createUniqueArray(this.state.posts.concat(data), 'id'),
      page: page + 1,
      skip: skip,
      hasMore: hasMore,
    });

    // this.hasMore(hasMore);
  },

  hasMore(hasMore) {
    this.setState({
      hasMore: hasMore,
    });
  },

  loadMore: function (page) {
    const { boxId } = this.props;

    let self = this,
    skip = this.state.skip,
    limit = this.state.limit;
    if(this.state.hasMore) {
      this.loadActions(boxId, skip, limit, function(data) {
        self.handleLoad(data, page);
      });
    }
  },

  loadActions(id, skip, limit, cb) {
    Axios.get(`${API_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
      .then((res) => {
        cb(res.data);
      });
  },

  getArticlesToRender() {
    if(!this.state.posts) return null;

    return this.state.posts.map((post, i) => {
      return (
        <BoxItem data={post} key={i} {...post} />
      );
    }.bind(this));
  },

  render () {
    return (
      <section id="box-content">
        <div className="container">
          <div className='row row-thumbnail'>
            <div className="masonry">
              <InfiniteScroll
                ref="masonryContainer"
                loader={this.getLoaderElement()}
                pageStart={this.state.page - 1}
                loadMore={this.loadMore}
                hasMore={this.state.hasMore}
                threshold={500}>

                {this.getArticlesToRender()}

              </InfiniteScroll >
            </div>
          </div>
        </div>
      </section>
    );
  }

});
