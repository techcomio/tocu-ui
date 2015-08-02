 /* @jsx React.DOM */
'use strict';

import React          from 'react/addons';
import { Link }       from 'react-router';
import classNames     from 'classnames';
/**
 * @Component
 */
import Navbar      from './navbar';
import InfoBar     from './infoBar';
import ProfileInfo from './profileInfo';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      transform: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    var scrollTop = window.scrollY;
    var transform = scrollTop >= 70;
    this.setState({
      transform: transform
    });
  }

  render() {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-default": true,
      "navbar-home": true,
      "navbar-fixed-top": true,
      "test": !this.state.transform,
    });

    return (
      <header>
        <div className="container-fluid">
          <div className="profileImage">
            <img src="/img/logo.png" alt="MongoDB" />
          </div>
          <nav className={classesNavbar}>
            <Navbar 
              AuthActions={this.props.AuthActions}
              auth={this.props.auth}
              transform={this.state.transform} />
          </nav>

          <ProfileInfo />

          <InfoBar
            countSanpham={this.props.countSanpham}
            countBox={this.props.countBox} />

        </div>
      </header>
    );
  }
  
};

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
