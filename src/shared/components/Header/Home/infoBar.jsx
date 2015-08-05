'use strict';

import React    from 'react/addons';
import { Link } from 'react-router';


export default class InfoBar extends React.Component {

  render() {
    return (
    	<div className="container-fluid infoBar">
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="row">
              <div className="col-xs-3">
                <a href="#" className="active">
                  <span className="value">{this.props.Box.size}</span> <span className="labels">Box</span>    
                </a>
              </div>
              <div className="col-xs-3">
                <a href="#" className="">
                  <span className="value">{this.props.countSanpham}</span> <span className="labels">Sản phẩm</span>    
                </a>
              </div>
              <div className="col-xs-3">
                <a href="#" className="">
                  <span className="value">0</span> <span className="labels">Ảnh</span>    
                </a>
              </div>
              <div className="col-xs-3">
                <a href="#" className="">
                  <span className="value">0</span> <span className="labels">Bài Viết</span>    
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
        </div>
      </div>
    );
  }

};
