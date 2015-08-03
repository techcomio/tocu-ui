"use strict";

import React, {PropTypes} from 'react/addons';
import {Link}             from 'react-router';
import Immutable          from 'immutable';
import BoxActions         from '../../actions/BoxActions';
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
    let img_url = "http://api.tocu.vn/image/220x220/404.jpg";
    let type = "";
    let ListPost = this.props.box.get('latestPosts').toJS().map((post, i) => {
      /**
       * lấy link ảnh của bài post đầu tiên
       */
      let backgroundImage = true;
      if(i === 0 && post.images) {
        let url = post.images[0];
        img_url = url.replace(/image\//gi, 'image/220x220/');
        backgroundImage = false;
      }
      /**
       * format number to String 250000 => "250.000"
       * @type {number}
       */
      post.price = post.price !== null ? post.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

      switch(this.props.box.get('type')) {
        case "product":
          return <ProductItem key={i} i={i} {...post} backgroundImage={backgroundImage} />
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

    switch(this.props.box.get('type')) {
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
        <Link to={`/box/${this.props.box.get('id')}`}>
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
              <span className="titleItem">{this.props.box.get('name')}</span>
              <span className="countItem">{this.props.box.get('postsCount')} {type}</span>
            </div>
            <div className="socialItem">
              <span className="SmallIcon likeSmallIcon"></span>
              <span className="socialMetaCount">{this.props.box.get('likesCount')}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  boxLogin(cb) {
    if(!this.props.auth.get('access_token')) {
      this.props.handleBoxLogin();
    } else {
      cb();
    }
  }

  handleLike(e) {
    e.preventDefault();
    this.boxLogin(function() {
      BoxActions.like({itemID: this.props.box.get('id'), token: this.props.auth.get('access_token'), userID: this.props.auth.get('id')});
    }.bind(this));
  }
}

ThumbItem.propTypes = {
  box: PropTypes.instanceOf(Immutable.Map).isRequired,
  auth: PropTypes.instanceOf(Immutable.Map).isRequired,
}
