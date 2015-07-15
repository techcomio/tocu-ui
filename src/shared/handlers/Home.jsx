'use strict';

import React          from 'react';
import {Link}         from 'react-router';
import AltContainer   from 'alt/AltContainer';
import {prepareRoute} from '../decorators';
import AppStore       from '../store/AppStore';
import AuthStore      from '../store/AuthStore';
import AppActions     from '../actions/AppActions';
import AuthActions    from '../actions/AuthActions';
/**
 * @Component
 */
import Header     from '../components/Header';
import FormSignIn from '../components/Form/SignIn';
import Thumbnail  from '../components/Thumbnail';


@prepareRoute(async function ({ params }) {
  return await * [
    AppActions.getData(),
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
          stores={[AuthStore]}
          inject={{
            auth: function(props) {
              return AuthStore.getState().auth
            }
          }} >

          <Header actions={AuthActions} />
        </AltContainer>

        <section id="content">
          <div className="container">
          
            {/* Thumbnail */}
            <AltContainer 
              stores={[AppStore, AuthStore]}
              inject={{
                posts: function (props) {
                  return AppStore.getState().posts
                },
                token: function(props) {
                  return AuthStore.getState().auth.toJS().token
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
