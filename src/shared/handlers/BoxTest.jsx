'use strict';

import React          from 'react';
import Axios          from 'axios';
import ReactAsync     from 'react-async';
import {Link}         from 'react-router';
import {Api_URL}      from '../../../config-sample';
import BoxStore       from '../store/BoxStore';
import AuthStore      from '../store/AuthStore';
import BoxActions     from '../actions/BoxActions';
import SanphamActions from '../actions/SanphamActions';
import MasonryMixin   from 'react-masonry-mixin';
import PackeryMixin   from 'react-packery-mixin';
let InfiniteScroll   = require('react-infinite-scroll')(React);
/**
 * @Component
 */
import AltContainer  from 'alt/AltContainer';
import HeaderProduct from '../components/productDetail/HeaderProduct';
import BoxItem       from '../components/productDetail/BoxItem';

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

  displayName: "Box",

  mixins: [ReactAsync.Mixin, MasonryMixin('masonryContainer', {})],

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.category !== this.props.category) {
      this.setState({
        page: 0,
        posts: [],
        hasMore: true,
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
      skip: 0,
      limit: 15,
    });
  },

  componentWillMount () {
    this.props.HeadParams.setTitle("Box | tocu.vn");
    this.props.HeadParams.setDescription("Box | Description");
    const {params: { id }} = this.props;

    BoxActions.getBoxID({id: id});
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
      // hasMore: hasMore,
    });

    this.hasMore(hasMore)
  },

  hasMore(hasMore) {
    this.setState({
      hasMore: hasMore,
    });
  },

  loadMore: function (page) {
    const {
      params: { id }
    } = this.props;

    let self = this,
    skip = this.state.skip,
    limit = this.state.limit;
    if(this.state.hasMore) {
      this.loadActions(id, skip, limit, function(data) {
        self.handleLoad(data, page);
      });
    }
  },

  loadActions(id, skip, limit, cb) {
    Axios.get(`${Api_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
      .then((res) => {
        cb(res.data);
      });
  },

  getArticlesToRender() {
    if(!this.state.posts) return null;

    return this.state.posts.map((post, i) => {
      return (
        <BoxItem onClick={this.handleViewSP} data={post} key={i} {...post} />
      );
    }.bind(this));
  },

  render () {
    return (
      <div>
        <AltContainer
          component={HeaderProduct}
          stores={[BoxStore, AuthStore]}
          actions={{BoxActions}}
          inject={{
            info: function(props) {
              return BoxStore.getState().info.toJS();
            },
            auth: function(props) {
              return AuthStore.getState().auth.toJS();
            }
          }}
         />

        <section id="productDetail">
          <div className="container">
            <div className='row'>
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
      </div>
    );
  },

  handleViewSP(sp) {
    SanphamActions.actionSanphamID(sp);
  }

});
