'use strict';

import React          from 'react/addons';
import {Link}         from 'react-router';
import AltContainer   from 'alt/AltContainer';
import {prepareRoute} from '../decorators';
import BoxActions     from '../actions/BoxActions';
import SanphamActions from '../actions/SanphamActions';
import OrderActions   from '../actions/OrderActions';
/**
 * @Component
 */
import Header      from '../components/Header/Home';
// import BoxYeuThich from '../components/BoxYeuThich';
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
    this._bind('handleBoxLogin', 'hideBoxLogin');

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
    // OrderActions.getListOrder();
  }

  render() {
    return (
      <div>
        {/* Header home */}
        <Header />

        <section id="content">
          <div className="container">
            {/* Box yeu thich */}
            {/*<BoxYeuThich />*/}
          
            {/* Thumbnail */}
            <Thumbnail handleBoxLogin={this.handleBoxLogin} />
          </div>
        </section>

        {::this.renderBoxLogin()}
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
                <FormSignIn replaceWith={this.hideBoxLogin} />
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
