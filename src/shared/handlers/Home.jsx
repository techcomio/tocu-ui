'use strict';

import React          from 'react';
import {Link}         from 'react-router';
import AltContainer   from 'alt/AltContainer';
import {prepareRoute} from '../decorators';
import BoxStore       from '../store/BoxStore';
import AuthStore      from '../store/AuthStore';
import SanphamStore   from '../store/SanphamStore';
import BoxActions     from '../actions/BoxActions';
import AuthActions    from '../actions/AuthActions';
import SanphamActions from '../actions/SanphamActions';
/**
 * @Component
 */
import Header     from '../components/Header';
import FormSignIn from '../components/Form/SignIn';
import Thumbnail  from '../components/Thumbnail';


@prepareRoute(async function ({ params }) {
  return await * [
    BoxActions.getBoxs(),
    SanphamActions.count(),
  ];
})

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this._bind('handleBoxLogin');

    this.state = {
      boxLogin: false,
    };
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  componentWillMount() {
    this.props.HeadParams.setTitle("Home | tocu.vn");
    this.props.HeadParams.setDescription("Home | Description");
  }

  render() {
    return (
      <div>
        {/* Header home */}
        <AltContainer
          stores={[BoxStore, AuthStore, SanphamStore]}
          inject={{
            auth: function(props) {
              return AuthStore.getState().auth
            },
            countSanpham: function(props) {
              return SanphamStore.getState().count
            },
            countBox: function(props) {
              return BoxStore.getState().boxs.size
            },
          }} >

          <Header actions={AuthActions} />
        </AltContainer>

        <section id="content">
          <div className="container">

            {/* Box yeu thich */}
            <div className="row">
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                <div className="thumbnail">
                  <a className="" href="/box/1" >
                    <h4 className="thumbnail-title">Sơ mi xô Nhật Hàn</h4>
                    <div className="imgWrapper">
                      <img className="img-max-height img-rounded" src="http://api.tocu.vn/image/192x130/93a197c1e33eeb10ad5d-2-7.jpg" alt="images" />
                      <span className="boardPinCount">4 SP</span>
                    </div>
                    <div>
                      <div className="thumbnail-list-news">
                        <div className="newsItem newCreditItem">
                          <div className="newsImg">
                            <span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
                          </div>
                          <div className="newsText newsInfo">
                            <p className="creditTitle">SM2</p>
                            <p>
                              <strong className="creditCost">150.000 đ</strong>
                            </p>
                          </div>
                        </div>
                        <div className="newsItem newCreditItem">
                          <div className="newsImg">
                            <span className="imgIcon imgIcon-list imgIcon-bg-red">
                              <img src="http://api.tocu.vn/image/50x50/0cf60858dd9553a692d3-1-1.jpg" />
                            </span>
                          </div>
                          <div className="newsText newsInfo">
                            <p className="creditTitle">SM1</p>
                            <p>
                              <strong className="creditCost">130.000 đ</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-default btn-block btn-follow">
                        <span>1 likes</span>
                      </div>
                      <p></p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="block-related">
                  <span>
                    <span className="img">img</span>
                  </span>
                </div>
              </div>
            </div>
          
            {/* Thumbnail */}
            <AltContainer 
              stores={[BoxStore, AuthStore]}
              inject={{
                boxs: function (props) {
                  return BoxStore.getState().boxs
                },
                token: function(props) {
                  return AuthStore.getState().auth.toJS().token
                },
                userID: function(props) {
                  return AuthStore.getState().auth.toJS().id
                },
              }} >
              <Thumbnail handleBoxLogin={this.handleBoxLogin} />
            </AltContainer>
          </div>
        </section>


        {this.state.boxLogin && (
          <div id="boxLogin">
            <div className="row">
              <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
                <div className="centrix">
                  <AltContainer
                    component={FormSignIn}
                    stores={[AuthStore]}
                    actions={{AuthActions}}
                    inject={{
                      loginState: function(props) {
                        return AuthStore.getState().loginState
                      }
                    }}
                   />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  handleBoxLogin() {
    this.setState({
      boxLogin: true,
    });
  }

};

Home.onEnter = function(next, transition) {
  // transition.to('/sigup');
}
