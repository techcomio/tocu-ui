"use strict";

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
/**
 * @Component
 */
import ArticleItem from './_ArticleItem';
import AlbumItem   from './_AlbumItem';
import ProductItem from './_ProductItem';

export default class ThumbItem extends React.Component {

  render() {
    let img_url = "/img/404.jpg";
    let ListPost = this.props.latestPosts.map((post, i) => {
      /**
       * lấy link ảnh của bài post đầu tiên
       */
      if(i === 0 && post.images) {
        img_url = post.images[0];
      }
      /**
       * format number to String 250000 => "250.000"
       * @type {number}
       */
      post.price = post.price !== null ? post.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

      switch(this.props.type) {
        case "product":
          return <ProductItem key={i} {...post} />
        case "article":
          return <PostItem key={i} {...post} />
        case "photo":
          return <AlbumItem key={i} {...post} />
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

    return (
      <div className="thumbnail">
        <Link to={`/box/${this.props.id}`}>
          <h4 className="thumbnail-title">{this.props.name}</h4>
          <div className="imgWrapper">
            <img className="img-rounded" data-holder-rendered="true" src={img_url} alt="100%x200" />
            <span className="boardPinCount">{this.props.postsCount}</span>
          </div>
          <div>
            <div className="thumbnail-list-news">
              {ListPost}
            </div>
            <p><div className="btn btn-default btn-block btn-follow">Follow</div></p>
          </div>
        </Link>
      </div>
    );
  }
}

ThumbItem.propTypes = {
  name: PropTypes.string.isRequired,
  postsCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  latestPosts: PropTypes.array.isRequired,
}
