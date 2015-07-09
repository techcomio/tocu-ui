'use strict';

import React        from 'react';
import Axios        from 'axios';
import {Api_URL} from '../../../config-sample';
import {Link}       from 'react-router';
import MasonryMixin from 'react-masonry-mixin';
let InfiniteScroll = require('react-infinite-scroll')(React);
import BoxStore     from '../store/BoxStore';
import BoxActions   from '../actions/BoxActions';
/**
 * @Component
 */
import HeaderProduct from '../components/productDetail/HeaderProduct';
import BoxItem from '../components/productDetail/BoxItem';


export default React.createClass({

  mixins: [MasonryMixin('masonryContainer', {transitionDuration: 0})],

  getInitialState: function () {
    return {
      page: 1,
      hasMore: true,
      skip: 0,
      limit: 15,
      posts: [],
    };
  },

  componentWillMount () {
    this.props.HeadParams.setTitle("Sanpham | tocu.vn");
    this.props.HeadParams.setDescription("Sanpham | Description");
  },

  getLoaderElement: function () {
    // return null;

    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='thumbnail article text-center'>Loading <i className='fa fa-cog fa-spin'></i></div>
      </div>
    );
  },

  onChangeBoxStore(state) {
    let hasMore = (state.posts.size >= this.state.limit * this.state.page)
    let page = this.state.page + 1;
    let skip = this.state.skip += this.state.limit
    this.setState({
      posts: state.posts,
      hasMore: hasMore,
      page: page,
      skip: skip,
    });
  },

  handleLoad(data) {
    console.log('handleLoad')
    let hasMore = (data.length >= this.state.limit * this.state.page)
    let page = this.state.page + 1;
    let skip = this.state.skip += this.state.limit
    this.setState({
      posts: this.state.posts.concat(data),
      hasMore: hasMore,
      page: page,
      skip: skip,
    });
  },

  loadMore: function (page) {
    const {
      params: { id }
    } = this.props;

    var self = this;
    setTimeout(function() {
      self.loadActions(id, self.state.skip, self.state.limit);
    }, 1000);
  },

  loadActions(id, skip, limit) {
    let self = this;

    Axios.get(`${Api_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
      .then((res) => {
        self.handleLoad(res.data);
      })
      .catch((res) => {

      });
  },

  getArticlesToRender() {
    return this.state.posts.map((post, i) => {
      return (
        <BoxItem key={i} {...post} />
      );
    });
  },

  render () {
    return (
      <div>
        <HeaderProduct />

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
  }

});
