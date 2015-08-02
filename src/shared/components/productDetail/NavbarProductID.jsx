'use strict';

import React      from 'react/addons';
import {Link}     from 'react-router';
import classNames from 'classnames';


export default class NavbarProductID extends React.Component {

  constructor (props) {
    super(props)
    this._bind('Like', 'Share', 'Cart', 'handleScroll');

    this.state = {
      hideHeader: false,
    };
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    /*if(this.props.auth.get('access_token')) {
      this.props.OrderActions.checkOrder({ id: this.props.product.get('id') });
    }*/
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    var scrollTop = window.scrollY;
    var hideHeader = scrollTop >= 33;
    this.setState({
      hideHeader: hideHeader
    });
  }
  
  render () {
    let classesNavbar = classNames({
      "navbar-product-detail": true,
      "sticky": this.state.hideHeader
    });
    
    return (
      <div className={classesNavbar} >
        <nav className="navbar navbar-defaul">
          <div className="navbar-header">
            <div className="btn-group">
              <button onClick={this.Like} type="button" className="btn btn-default navbar-btn"><i className="fa fa-heart gray">&nbsp;</i> Thích</button>
              <button type="button" className="btn btn-default count-like navbar-btn"><span>{this.props.product.get('likesCount')}</span></button>
            </div>
            <button onClick={this.Share} type="button" className="btn btn-default navbar-btn"><i className="fa fa-facebook-square gray">&nbsp; </i>Chia sẻ</button>
          </div>
          <div className="nav navbar-nav navbar-right">
            {this.renderBtn()}
          </div>
        </nav>
      </div>
    );
	}

  renderBtn() {
    switch(this.props.product.get('status')) {
      case "available":
        return <button onClick={this.Cart} type="button" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart gray">&nbsp; </i> Mua</button>
      case "suspended":
        return <button onClick={this.Cart} type="button" className="btn btn-warning navbar-btn"><i className="fa fa-clock-o gray">&nbsp; </i> Mua</button>
      default:
        return <button onClick={this.Cart} type="button" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart gray">&nbsp; </i> Mua</button>
    }
    console.log(this.props.product.toJS())
  }

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
  }

  Like() {
    this.boxLogin(function() {
      let token  = this.props.auth.get('access_token');
      let type   = this.props.product.get('Box').get('type')
      let itemId = this.props.product.get('id');

      this.props.SanphamActions.like({itemId: itemId, token: token, type: type});
    }.bind(this));
  }

  Share() {
    this.boxLogin(function() {
      console.log('Share');
    });
  }

  Cart() {
    this.boxLogin(function() {
      if(this.props.listOrder.size < 1) {
        this.props.Next(2);
      } else {
        this.props.Next();
      }
    }.bind(this));
  }

};

NavbarProductID.propTypes = {
  hideNavbar: React.PropTypes.bool,
  countLike: React.PropTypes.number,
};