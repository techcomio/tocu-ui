'use strict';

import React      from 'react';
import { Link }   from 'react-router';
import classNames from 'classnames';

export default React.createClass({

	render() {
		let img_url = "/img/404.jpg";

	  if(this.props.images) {
      let url = this.props.images[0];
      img_url = url.replace(/image\//gi, 'image/100x/');
	  }

		return (
      <div onClick={this.handleClick} className='col-xs-12 col-sm-12'>
        <div >
          <Link to={`/sp/${this.props.id}`} >
            <div className="imgWrapper">
              <img className="img-rounded" data-holder-rendered="true" src={img_url} alt="images" />
            </div>
          </Link>
        </div>
      </div>
		);
	},
  
  handleClick() {
    this.props.onClick(this.props.data);
  }

});