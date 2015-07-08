'use strict';

import React          from 'react';
import {Link}         from 'react-router';
import AltContainer   from 'alt/AltContainer';
import {prepareRoute} from '../decorators';
import AppStore       from '../store/AppStore';
import AppActions     from '../actions/AppActions';
/**
 * @Component
 */
import Header    from '../components/Header';
import Thumbnail from '../components/Thumbnail';


@prepareRoute(async function ({ params }) {
  return await * [
    AppActions.getData(),
  ];
})

export default class Home extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.HeadParams.setTitle("Home | tocu.vn");
    this.props.HeadParams.setDescription("Home | Description");
  }

  render() {
    return (
      <div>
        {/* Header home */}
        <Header />

        <section id="content">
          <div className="container">
          
            {/* Thumbnail */}
            <AltContainer 
              component={Thumbnail}
              stores={[AppStore]}
              inject={{
                posts: function (props) {
                  return AppStore.getState().posts
                }
              }} />

          </div>
        </section>
      </div>
    );
  }

};

Home.onEnter = function(next, transition) {
  // transition.to('/sigup');
}
