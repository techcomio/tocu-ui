'use strict';

import React        from 'react';
import {Link}       from 'react-router';
import MasonryMixin from 'react-masonry-mixin';
let InfiniteScroll = require('react-infinite-scroll')(React);
/**
 * @Component
 */
import HeaderProduct from '../components/productDetail/HeaderProduct';


export default React.createClass({

  mixins: [MasonryMixin('masonryContainer', {transitionDuration: 0})],

  getInitialState: function () {
    return {
      page: 0,
      hasMore: true,
      items: [0, 1, 2, 3, 4, 5]
    };
  },

  componentWillMount () {
    this.props.HeadParams.setTitle("Sanpham | tocu.vn");
    this.props.HeadParams.setDescription("Sanpham | Description");
  },

  getLoaderElement: function () {
    return null;

    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='thumbnail article text-center'>Loading <i className='fa fa-cog fa-spin'></i></div>
      </div>
    );
  },

  Test() {
    var self = this;
    self.setState({
      page: page + 1,
      items: self.state.items.concat([0, 1, 2, 3, 4, 5]),
      hasMore: (page < 10)
    });
  },

  loadMore: function (page) {
    var self = this;
    console.log(this.props)
  },

  getArticlesToRender() {
    return this.state.items.map((page, i) => {
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
