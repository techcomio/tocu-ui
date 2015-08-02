'use strict';

import React      from 'react/addons';
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
    
    switch(this.props.info.get('type')) {
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

		return (
      <div className="container-fluid">
	    	<nav className={classesNavbar}>
          <div className="infoListProduct text-center">
            <div className="btn-group">
              <button onClick={this.handleLikeBox} type="button" className="btn btn-default navbar-btn"><i className="fa fa-heart gray"></i></button>
              <button type="button" className="btn btn-default count-like navbar-btn"><span>{this.props.info.get('likesCount')}</span></button>
            </div>
	          <div className="nameinfoListProduct">
	          	{this.props.info.get('name')}
	          </div>
	          <span className="countListProduct">
	          	{this.props.info.get('postsCount')} {type}
	          </span>
          </div>
		    </nav>
      </div>
		);
	},

  boxLogin(cb) {
    if(!this.props.auth.get('access_token')) {
      this.props.handleBoxLogin('token');
    } else {
      if(!this.props.auth.get('isVerifyMobilePhone')) {
        this.props.handleBoxLogin('verify');
        return;
      }
      cb();
    }
  },

	handleLikeBox() {
    console.log('handleLikeBox')
    let self = this;
    this.boxLogin(() => {
  		let itemID = this.props.info.get('id'),
  			token = this.props.auth.get('access_token');

  		// actions like box
  		self.props.BoxActions.like({itemID: itemID, token: token});
    })
	},

});