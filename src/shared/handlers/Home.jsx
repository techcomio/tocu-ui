'use strict';

import React          from 'react/addons';
import {Link}         from 'react-router';
import AltContainer   from 'alt/AltContainer';
import {prepareRoute} from '../decorators';
import BoxStore       from '../store/BoxStore';
import AuthStore      from '../store/AuthStore';
import SanphamStore   from '../store/SanphamStore';
import OrderStore     from '../store/OrderStore';
import BoxActions     from '../actions/BoxActions';
import AuthActions    from '../actions/AuthActions';
import SanphamActions from '../actions/SanphamActions';
import OrderActions   from '../actions/OrderActions';
/**
 * @Component
 */
import Header      from '../components/Header';
import BoxYeuThich from '../components/BoxYeuThich';
import FormSignIn  from '../components/Form/SignIn';
import Thumbnail   from '../components/Thumbnail';


@prepareRoute(async function ({ params }) {
  return await * [
    BoxActions.getBoxs(),
    SanphamActions.count(),
  ];
})

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this._bind('renderBoxLogin', 'handleBoxLogin', 'hideBoxLogin');

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

  componentDidMount() {
    OrderActions.getListOrder();
  }

  render() {
    return (
      <div>
        {/* Header home */}
        <AltContainer
          stores={[BoxStore, AuthStore, SanphamStore]}
          actions={{AuthActions}}
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

          <Header />
        </AltContainer>

        <section id="content">
          <div className="container">

            {/* Box yeu thich */}
            <AltContainer
              stores={[OrderStore]}
              actions={{OrderActions}}
              inject={{
                listOrder: () => {
                  return OrderStore.getState().listOrder
                },
              }} >

              <BoxYeuThich />
            </AltContainer>
          
            {/* Thumbnail */}
            <AltContainer 
              stores={[BoxStore, AuthStore]}
              inject={{
                boxs: function (props) {
                  return BoxStore.getState().boxs
                },
                auth: function(props) {
                  return AuthStore.getState().auth;
                }
              }} >
              <Thumbnail handleBoxLogin={this.handleBoxLogin} />
            </AltContainer>
          </div>
        </section>


        {this.renderBoxLogin()}
      </div>
    );
  }

  renderBoxLogin() {
    if(this.state.boxLogin) {
      return (
        <div id="boxLogin">
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
              <div className="centrix">
                <AltContainer
                  stores={[AuthStore]}
                  actions={{AuthActions}}
                  inject={{
                    loginState: function(props) {
                      return AuthStore.getState().loginState
                    }
                  }} >
                  
                  <FormSignIn replaceWith={this.hideBoxLogin} />
                </AltContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  handleBoxLogin() {
    this.setState({
      boxLogin: true,
    });
  }

  hideBoxLogin() {
    this.setState({
      boxLogin: false,
    });
  }

};

Home.onEnter = function(next, transition) {
  // transition.to('/sigup');
}
