'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var request = require('superagent');
import SanphamActions from '../actions/SanphamActions';

// addons
var InfiniteScroll = require('react-infinite-scroll')(React);
var MasonryMixin   = require('react-masonry-mixin');
var PackeryMixin   = require('react-packery-mixin');

// options
var masonryOptions = {};

// sub-components
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

module.exports = React.createClass({
  displayName: 'ArticleBox',

  mixins: [ReactAsync.Mixin, PackeryMixin('masonryContainer', {})],

  componentWillMount () {
    this.props.HeadParams.setTitle("Box | tocu.vn");
    this.props.HeadParams.setDescription("Box | Description");
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.category !== this.props.category) {
      this.setState({
        page: 0,
        articles: [],
        hasMore: true,
        skip: 0,
        limit: 15,
      });
  }
  },

  fetchNextArticles: function (id, skip, limit, callback) {
    request.get(`http://api.tocu.vn/product/box/${id}?skip=${skip}&limit=${limit}`)
      .end(callback);
  },

  getInitialStateAsync: function (callback) {
    callback(null, {
      page: 0,
      articles: [],
      hasMore: true,
      skip: 0,
      limit: 15,
    });
  },

  includeLoadedArticles: function (page, articles) {
    this.setState({
      page: page + 1,
      articles: createUniqueArray(this.state.articles.concat(articles), 'id'),
      hasMore: articles.length === this.state.limit
    });
  },

  loadMoreArticles: function (page) {
    const {
      params: { id }
    } = this.props;
    let self = this,
    skip = this.state.skip,
    limit = this.state.limit;

    this.fetchNextArticles(id, skip, limit, function (err, articles) {
      if (err) return console.log(err);
      this.includeLoadedArticles(page, articles.body);
    }.bind(this));
  },

  getLoaderElement: function () {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='thumbnail article text-center'>Loading <i className='fa fa-cog fa-spin'></i></div>
      </div>
    );
  },

  getArticlesToRender: function () {
    if(!this.state.articles) return null;

    return this.state.articles.map(function (article, i) {
      return (
        <BoxItem onClick={this.handleViewSP} data={article} key={i} {...article} />
      );
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <HeaderProduct />
        
        <section id="productDetail">
          <div className="container">
            <div className='row'>
              <div className="masonry">
                <InfiniteScroll 
                  ref='masonryContainer'
                  pageStart={this.state.page - 1}
                  loader={this.getLoaderElement()}
                  loadMore={this.loadMoreArticles}
                  hasMore={this.state.hasMore} threshold={1000}>
                    {this.getArticlesToRender()}
                </InfiniteScroll>
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