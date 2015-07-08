'use strict';

import React        from 'react';
import {Link, State}       from 'react-router';
import MasonryMixin from 'react-masonry-mixin';
let InfiniteScroll = require('react-infinite-scroll')(React);
import BoxStore       from '../../store/BoxStore';
import BoxActions     from '../../actions/BoxActions';

export default React.createClass({

  mixins: [MasonryMixin('masonryContainer', {transitionDuration: 0})],

  getInitialState: function () {
    return {
      page: 1,
      hasMore: true,
      skip: 0,
      posts: BoxStore.getState().posts,
    };
  },

  getLoaderElement: function () {
    return null;

    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='thumbnail article text-center'>Loading <i className='fa fa-cog fa-spin'></i></div>
      </div>
    );
  },

  componentDidMount() {
    BoxStore.listen(this.onChangeBoxStore);
  },

  componentWillUnmount() {
    BoxStore.unlisten(this.onChangeBoxStore);
  },

  onChangeBoxStore(state) {

  // console.log(state.posts.size, this.state.skip)
    let page = this.state.page + 1;
    let hasMore = (state.posts.size >= 1 * this.state.page)
    console.log(hasMore)
    this.setState({
      posts: state.posts.toJS(),
      page: page,
      hasMore: hasMore,
      skip: this.state.skip += 1
    });
    // console.log('onChangeBoxStore')
  },


  loadMore: function (page) {
    var self = this;
    if(this.state.hasMore) {
      console.log({id: 1, skip: self.state.skip, limit: 1})
      BoxActions.getBoxID({id: 1, skip: self.state.skip, limit: 1});
    }
  },

  getArticlesToRender() {
    return this.state.posts.map((page, i) => {
      return (
        <div key={i} className='col-xs-6 col-sm-4 col-md-3 col-lg-3'>
          <div className="thumbnail" >
            <Link to="spID" params={{id: i}} >
              <div className="imgWrapper">
                <img className="img-rounded" data-holder-rendered="true" src="/img/404.jpg" alt="100%x200" />
              </div>
              <div className="infoSanpham">
                <span className="titleSanpham">Title</span>
                <span className="price">
                  <span className="price-list">153.000 VNĐ</span>
                  <span className="price-sale">123.000 VNĐ</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  },

	render () {
    return (
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
    );
	}

});
