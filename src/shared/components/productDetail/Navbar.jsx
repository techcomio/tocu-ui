'use strict';

import React      from 'react';
import { Link }   from 'react-router';
import classNames from 'classnames';

export default React.createClass({
 	
 	propTypes: {
	  name: React.PropTypes.string,
	  likesCount: React.PropTypes.number
	},

	getInitialState() {
    return {};
  },

	render() {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-default": true,
      "navbar-product": true,
      "navbar-fixed-top": true,
      headerHiden: this.props.hideHeader,
    }),
    type = null;
    
    switch(this.props.info.type) {
      case "product":
        type = "Sản phẩm";
        break;
      case "article":
        type = "Bài viết";
        break;
      case "photo":
        type = "Ảnh";
        break;
    }

    /*
      <button onClick={this.handleLikeBox} type="button" className="btn btn-default navbar-btn"><i className="fa fa-heart gray">&nbsp;</i> Thích</button>
     */

		return (
      <div className="container-fluid">
	    	<nav className={classesNavbar}>
          <div className="infoListProduct text-center">
            <div className="btn-group">
              <button onClick={this.handleLikeBox} type="button" className="btn btn-default navbar-btn"><i className="fa fa-heart gray">&nbsp;</i> Thích</button>
              <button type="button" className="btn btn-default count-like navbar-btn"><span>{this.props.info.likesCount}</span></button>
            </div>
	          <div className="nameinfoListProduct">
	          	{this.props.info.name}
	          </div>
	          <span className="countListProduct">
	          	{this.props.info.postsCount} {type}
	          </span>
          </div>
		    </nav>
      </div>
		);
	},

	handleLikeBox() {
		let itemID = this.props.info.id,
			token = this.props.auth.token,
			userID = this.props.auth.id;
			
		// actions like box
		this.props.likeBox({itemID: itemID, token: token, userID: userID});
	},

});