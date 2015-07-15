"use strict";

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import BoxActions    from '../../actions/BoxActions';
/**
 * @Component
 */
import ArticleItem from './_ArticleItem';
import AlbumItem   from './_AlbumItem';
import ProductItem from './_ProductItem';

export default class ThumbItem extends React.Component {

  constructor (props) {
    super(props)

    this._bind('boxLogin', 'handleLike');

  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  render() {
    let img_url = "/img/404.jpg";
    let type = "";
    let ListPost = this.props.latestPosts.map((post, i) => {
      /**
       * lấy link ảnh của bài post đầu tiên
       */
      if(i === 0 && post.images) {
        let url = post.images[0];
        img_url = url.replace(/image\//gi, 'image/192x130/');
      }
      /**
       * format number to String 250000 => "250.000"
       * @type {number}
       */
      post.price = post.price !== null ? post.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

      switch(this.props.type) {
        case "product":
          return <ProductItem key={i} i={i} {...post} />
        case "article":
          return <PostItem key={i} i={i} {...post} />
        case "photo":
          return <AlbumItem key={i} i={i} {...post} />
      }
    });

    /**
     * for nếu ListPost ít hơn 2 bài post thì thêm @Component trắng
     * @param  {number} count ListPost
     * @return {Component}     @Component trắng
     */
    for (let i = ListPost.length; i < 2; i++) {
      ListPost.push(
        <div key={i} className="newsItem newCreditItem">
          <div className="newsImg"><span className="imgIcon imgIcon-list"></span></div>
          <div className="newsText" style={{cursor: 'default'}}></div>
        </div>
      )
    };    

    switch(this.props.type) {
      case "product":
        type = "SP";
        break;
      case "article":
        type = "Ảnh";
        break;
      case "photo":
        type = "Ảnh";
    }

    return (
      <div className="thumbnail">
        <Link to={`/box/${this.props.id}`}>
          <h4 className="thumbnail-title">{this.props.name}</h4>
          <div className="imgWrapper">
            <img className="img-max-height img-rounded" data-holder-rendered="true" src={img_url} alt="images" />
            <span className="boardPinCount">{this.props.postsCount} {type}</span>
          </div>
          <div>
            <div className="thumbnail-list-news">
              {ListPost}
            </div>
            <p>
              <div onClick={this.handleLike} className="btn btn-default btn-block btn-follow">{this.props.likesCount} likes </div>
            </p>
          </div>
        </Link>
      </div>
    );
  }

  boxLogin(cb) {
    if(!this.props.token) {
      this.props.handleBoxLogin();
    } else {
      cb();
    }
  }

  handleLike(e) {
    e.preventDefault();
    this.boxLogin(function() {
      BoxActions.like({id: this.props.id, token: this.props.token});
    }.bind(this));
  }
}

ThumbItem.propTypes = {
  name: PropTypes.string.isRequired,
  postsCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  latestPosts: PropTypes.array.isRequired,
}
