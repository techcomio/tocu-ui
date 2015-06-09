 /* @jsx React.DOM */
'use strict';

import React from 'react';
import classNames from 'classnames';


export default React.createClass({

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
	  router: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      transform: false
    }
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    var scrollTop = window.scrollY;
    var transform = scrollTop >= 70;
    this.setState({
      transform: transform
    });
  },

  render() {
    let classesNavbar = classNames({
      navbar: true,
      "navbar-default": true,
      "navbar-fixed-top": true,
      test: !this.state.transform,
    });
    let classesHeaderNameAndImg = classNames({
      fixedHeaderNameAndImage: true,
      hiden: !this.state.transform,
      show: this.state.transform,
    });

		return (
      <header>
        <div className="container-fluid">
          <div className="profileImage">
            <img src="/img/logo.png" alt="MongoDB" itemprop="image" />
          </div>
          <nav className={classesNavbar}>
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className={classesHeaderNameAndImg}>
                  <a className="navbar-brand" href="#">
                    <img alt="Brand" src="/img/logo.png" width="40" height="40" />
                  </a>
                  <p className="navbar-text pull-left">Tổ Cú</p>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="nav navbar-nav navbar-right">
                  <button type="button" className="btn btn-sm btn-default navbar-btn">Sign in</button>
                  <button type="button" className="btn btn-sm btn-primary navbar-btn">Sign up</button>
                </div>
              </div>
            </div>
          </nav>

          <div className="container-fluid profileInfo">
            <div className="aboutBar">
              <div className="about">
                <h1 className="name">Tổ Cú</h1>
                <div className="iconsLinksEtc">
                  <ul>
                    <li className="websiteWrapper">
                      <a href="#" target="_blank" >
                        <i className="fa fa-map-marker gray">&nbsp; Hà Nội</i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" >
                        <i className="fa fa-facebook-square gray">&nbsp; facebook</i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" >
                        <i className="fa fa-twitter gray">&nbsp; twitter</i>
                      </a>
                    </li>
                  </ul>
                </div>

                <p className="aboutText" itemprop="description">
                  Nơi chúng ta thỏa sức với niềm đam mê đồ cũ & handmade :x
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid infoBar">
            <div className="row">
              <div className="col-md-3 col-lg-3"></div>
              <div className="col-md-6 col-lg-6">
                <div className="row">
                  <div className="col-xs-3">
                    <a href="#" className="active">
                      <span className="value">7</span> <span className="labels">Box</span>    
                    </a>
                  </div>
                  <div className="col-xs-3">
                    <a href="#" className="">
                      <span className="value">88</span> <span className="labels">Sản phẩm</span>    
                    </a>
                  </div>
                  <div className="col-xs-3">
                    <a href="#" className="">
                      <span className="value">325</span> <span className="labels">Ảnh</span>    
                    </a>
                  </div>
                  <div className="col-xs-3">
                    <a href="#" className="">
                      <span className="value">213</span> <span className="labels">Bài Viết</span>    
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3"></div>
            </div>
          </div>
        </div>
      </header>
		)
  },
});

