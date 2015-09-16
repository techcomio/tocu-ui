'use strict';
import React from 'react/addons';
import Axios from 'axios';
import { Link } from 'react-router';
var ReactAsync = require('react-async');
var MasonryMixin = require('react-masonry-mixin')(React);
import { API_URL } from '../../../../config';


var masonryOptions = {
  transitionDuration: 0
};

export default React.createClass({

  mixins: [MasonryMixin('masonryContainer', {})],

  getInitialState() {
    return {
      posts: [],
    }
  },

  componentDidMount() {
    const self = this,
      boxId = this.props.Box.get('id');

    Axios.get(`${API_URL}/product/box/${boxId}?skip=${0}&limit=${15}`)
      .then((res) => {
        this.setState({
          posts: res.data
        });
      }.bind(this));
  },

  render: function () {
    const { Box } = this.props;
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
                <span>{Box.get('name')}</span>
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
                    <a to={`/product/${element.id}`}>
                      <div className="imgWrapper">
                        <img className="img-rounded" data-holder-rendered="true" src={img_url} alt="images" />
                      </div>
                    </a>
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
    this.props.getProdID(sp);
  },

  renderIcon() {
    switch(this.props.Box.get('type')) {
      case "product":
        return <span className="imgIcon imgIcon-list imgIcon-store" />;
      case "article":
        return <span className="imgIcon imgIcon-list imgIcon-bg-blue" />;
      case "photo":
        return <span className="imgIcon imgIcon-list imgIcon-bg-yellow" />;
    }
  }

});
