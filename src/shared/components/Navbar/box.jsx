'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link }   from 'react-router';
import { logOut } from '../../actions/auth';


export default class NavbarBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hideHeader: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 50;
    this.setState({
      hideHeader: hideHeader
    });
  }

  render() {
    const { info } = this.props;
    // const classesNavbar = classNames({
    //   "navbar": true,
    //   "navbar-default": true,
    //   "navbar-product": true,
    //   "navbar-static-top": true,
    //   "navbar-fixed-top": this.state.hideHeader,
    //   "position-top": !this.state.hideHeader,
    // });
    let type = null;

    switch(info.get('type')) {
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
      <nav className="navbar navbar-fixed-top navbar-light bg-faded navbar-center">
        <div className="text-center">
          <div className="navbar-title">
          	{info.get('name')}
          </div>
          <span className="navbar-info">
          	{info.get('postsCount')} {type}
          </span>
        </div>
	    </nav>
    );
  }

};
