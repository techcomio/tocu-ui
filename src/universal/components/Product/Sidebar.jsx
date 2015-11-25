import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router';
var Masonry = require('react-masonry-component')(React);
import { API_URL } from '../../../../config';


export default React.createClass({

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
        self.setState({
          posts: res.data
        });
      });
  },

  render: function () {
    const { Box } = this.props;
    const posts = this.state.posts.filter((item, i) => {
      return item.status === "available" ? item : null;
    })
    var childElements = posts.map(function(element, i){
      let img_url = "/img/404.jpg";
      if(element.images) {
        let url = element.images[0];
        img_url = url.replace(/image\//gi, 'image/100x/');
      }

      return (
        <div key={i} className='col-xs-4 col-sm-4'>
          <Link to={`/product/${element.id}`}>
            <div className="imgWrapper">
              <img className="img-rounded" data-holder-rendered="true" src={img_url} alt="images" />
            </div>
          </Link>
        </div>
      );
    });

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
          <Masonry
            className="masonry-sidebar" // default ''
            options={{transitionDuration: '500ms'}} // default {}
            disableImagesLoaded={false} // default false
            elementType="div" // default 'div'
            >

            {childElements}

          </Masonry>

        </div>
      </div>
    );
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
