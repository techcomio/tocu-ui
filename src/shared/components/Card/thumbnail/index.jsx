'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Immutable from 'immutable';
import ArticleItem from './ArticleItem';
import AlbumItem   from './AlbumItem';
import ProductItem from './ProductItem';


export default class Thumbnail extends React.Component {

  static propTypes = {
    box: PropTypes.instanceOf(Immutable.Map).isRequired
    , auth: PropTypes.instanceOf(Immutable.Map).isRequired
  }

  render() {
    const { box } = this.props;
    let img_url = "http://api.tocu.vn/image/220x220/404.jpg";
    let type = "";
    let ListPost = box.get('latestPosts').toJS().map((post, i) => {
      /**
       * lấy link ảnh của bài post đầu tiên
       */
      if(i === 0 && post.images) {
        let url = post.images[0];
        img_url = url.replace(/image\//gi, 'image/220x220/');
      }
      /**
       * format number to String 250000 => "250.000"
       * @type {number}
       */
      post.price = post.price !== null ? post.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

      switch(box.get('type')) {
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
        <div key={i} className="list-item emtry">
          <div className="item">
            <div className="newsItem newCreditItem">
              <div className="newsImg">
                <span className="imgIcon imgIcon-list"></span>
              </div>
              <div className="newsText newsInfo">
                <p className="creditTitle"></p>
                <p>
                  <strong className="creditCost"></strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    };

    switch(box.get('type')) {
      case "product":
        type = "Sản phẩm";
        break;
      case "article":
        type = "Bài viết";
        break;
      case "photo":
        type = "Ảnh";
    }

    return (
      <div className="thumbnail">
        <Link to={`/box/${box.get('id')}`}>
          <div className="img-Wrapper">
            <img className="img-max-height" data-holder-rendered="true" src={img_url} alt="images" />
            <div className="divshowdow"></div>
          </div>
          <div className="thumbnail-list-news">
            <div className="list-news">
              {ListPost}
            </div>
          </div>
          <div className="thumbnail-info">
            <div className="infoItem">
              <span className="titleItem">{box.get('name')}</span>
              <span className="countItem">{box.get('postsCount')} {type}</span>
            </div>
            <div className="socialItem">
              <span className="SmallIcon likeSmallIcon"></span>
              <span className="socialMetaCount">{box.get('likesCount')}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

};
