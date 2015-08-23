'use strict';
import React      from 'react/addons';
import {Link}     from 'react-router';
import classNames from 'classnames';


export default class NavbarCart extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      hideHeader: false,
      NavbarWidth: null,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 80;
    this.setState({
      hideHeader: hideHeader,
      NavbarWidth: offsetWidth,
    });
  }
  
  render () {
    let classesNavbar = classNames({
      "navbar": true,
      "navbar-defaul": true,
      "sticky": this.state.hideHeader,
    });

    return (
      <div ref="navbar">
        <nav className={classesNavbar} style={{width: this.state.NavbarWidth}}>
          <div className="navbar-header">
            <div><i className="icon icont-cart"></i></div>
            <div><span className="title-nav-cart">Thông tin vận chuyển</span></div>
          </div>
          <div className="nav navbar-nav navbar-right">
            <button onClick={this._onClickHoantat} disabled={this.props.disabled} type="button" className="btn btn-primary navbar-btn">Tiếp</button>
          </div>
        </nav>
      </div>
    );
  }

  _onClickHoantat = (e) => {
    console.log('_onClickTiep');
    this.props.next();
  }

};
