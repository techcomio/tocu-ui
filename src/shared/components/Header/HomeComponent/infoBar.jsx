'use strict';
import React from 'react';
import { Link } from 'react-router';


export default class InfoBar extends React.Component {

  render() {
    const { boxCount, productCount } = this.props;

    return (
    	<div className="container-fluid infoBar">
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="row">
              <div className="col-xs-3">
                <Link to="/" activeClassName="active" >
                  <span className="value">{boxCount}</span> <span className="labels">Box</span>
                </Link>
              </div>
              <div className="col-xs-3">
                <Link to="/product" activeClassName="active" >
                  <span className="value">{productCount}</span> <span className="labels">Sản phẩm</span>
                </Link>
              </div>
              <div className="col-xs-3">
                <Link to="/album" activeClassName="active" >
                  <span className="value">0</span> <span className="labels">Ảnh</span>
                </Link>
              </div>
              <div className="col-xs-3">
                <Link to="/post" activeClassName="active" >
                  <span className="value">0</span> <span className="labels">Bài Viết</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
        </div>
      </div>
    );
  }

};
