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
