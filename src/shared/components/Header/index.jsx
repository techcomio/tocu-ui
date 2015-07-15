 /* @jsx React.DOM */
'use strict';

import React          from 'react';
import { Link }       from 'react-router';
import classNames     from 'classnames';
import {prepareRoute} from '../../decorators';
import AuthStore      from '../../store/AuthStore';
import AuthActions    from '../../actions/AuthActions';
/**
 * @Component
 */
import Navbar      from './navbar';
import InfoBar     from './infoBar';
import ProfileInfo from './profileInfo';

@prepareRoute(async function() {
  return await * [

  ];
})

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this._bind('handleScroll')

    this.state = {
      transform: false
    };
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
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
            <img src="/img/logo.png" alt="MongoDB" />
          </div>
          <nav className={classesNavbar}>
            <Navbar 
              Logout={AuthActions.Logout}
              auth={this.props.auth}
              transform={this.state.transform} />
          </nav>

          <ProfileInfo />

          <InfoBar />

        </div>
      </header>
    );
  }
  
};

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
