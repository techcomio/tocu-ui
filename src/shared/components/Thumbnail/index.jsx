/* @jsx React.DOM */
"use strict";

import React from 'react';

import PostItem   from './PostItem';
import AlbumItem  from './AlbumItem';
import CreditItem from './CreditItem';


class ThumbItem extends React.Component {

  render() {
      let ListPost = this.props['list-posts'].map((post, i) => {
        switch(this.props.type) {
          case "SP":
            return <CreditItem key={i} {...post} />
          case "post":
            return <PostItem key={i} {...post} />
          case "IMG":
            return <AlbumItem key={i} {...post} />
        }
      });

    return (
      <div className="thumbnail">
        <h4 className="thumbnail-title">{this.props.title}</h4>
        <div className="imgWrapper">
          <img className="img-rounded" data-holder-rendered="true" src={this.props['list-posts'][0].img_url} alt="100%x200" />
          <span className="boardPinCount">{this.props.postCount}</span>
        </div>
        <div>
          <div className="thumbnail-list-news">
            {ListPost}
            {ListPost.length < 2 && (
              <div className="newsItem newCreditItem">
                <div className="newsImg"><span className="imgIcon imgIcon-list"></span></div>
                <div className="newsText" style={{cursor: 'default'}}></div>
              </div>
            )}
          </div>
          <p><div className="btn btn-default btn-block btn-follow">Follow</div></p>
        </div>
      </div>
    );
  }
  
}

class ThumbNail extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.posts.map((post, i) => {
          return (
            <div key={i} className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
              <ThumbItem {...post} />
            </div>
          );
        })}
      </div>
    );
  }
  
};

export default ThumbNail;
