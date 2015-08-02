
// var React = require('react');
import React      from 'react/addons';
var ReactAsync   = require('react-async');
var MasonryMixin = require('react-masonry-mixin');

import Axios       from 'axios';
import { Link }    from 'react-router';
import { Api_URL } from '../../../../config-sample';
 
var masonryOptions = {
  transitionDuration: 0
};
 
var Sidebar = React.createClass({
 
  mixins: [MasonryMixin('masonryContainer', masonryOptions)],

  getInitialState() {
    return {
      page: 0,
      hasMore: true,
      skip: 0,
      limit: 15,
      posts: [],
    }
  },

  componentDidMount() {
    let self = this,
      boxId = this.props.boxId;

    Axios.get(`${Api_URL}/product/box/${boxId}?skip=${0}&limit=${15}`)
      .then((res) => {
        self.setState({
          posts: self.state.posts.concat(res.data),
        });
      });
  },


  render: function () {
    return (
      <div className="col-md-12 col-lg-12">
        <div className="thumbnail sidebar">
          {/* navbar sidebar */}
          <nav className="navbar navbar-default navbar-static-top">
            <div className="nav navbar-nav navbar-text">
              <div className='icon-img'>
                {this.renderIcon()}
              </div>
              <div className="titleBox">
                <span>{this.props.name}</span>
              </div>
            </div>
          </nav>

          {/* Gird item */}
          <div className="masonry-sidebar">
            <div ref="masonryContainer">
              {this.state.posts.map(function(element, i){
                let img_url = "/img/404.jpg";
                if(element.images) {
                  let url = element.images[0];
                  img_url = url.replace(/image\//gi, 'image/100x/');
                }

                return (
                  <div onClick={this.handleViewSP.bind(null, element)} key={i} className='col-xs-4 col-sm-4'>
                    <Link to={`/product/${element.id}`}>
                      <div className="imgWrapper">
                        <img className="img-rounded" data-holder-rendered="true" src={img_url} alt="images" />
                      </div>
                    </Link>
                  </div>
                );
              }.bind(this))}
            </div>
          </div>
        </div>
      </div>
    );
  },

  handleViewSP(sp) {
    this.props.SanphamActions.actionSanphamID(sp);
  },

  renderIcon() {
    switch(this.props.type) {
      case "product":
        return <span className="imgIcon imgIcon-list imgIcon-store" />;
      case "article":
        return <span className="imgIcon imgIcon-list imgIcon-bg-blue" />;
      case "photo":
        return <span className="imgIcon imgIcon-list imgIcon-bg-yellow" />;
    }
  }

});
 
module.exports = Sidebar;
