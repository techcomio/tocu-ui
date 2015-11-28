'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getBox } from '../actions/box';
import { prepareRoute } from '../decorators';
import { CLIENT } from '../lib/env';
import ThumbBox from '../components/Card/ThumbBox';
import Header from '../components/Header/Home';


@prepareRoute(async function ({ store, params, location }) {
  if(CLIENT) {
    return await * [
      store.dispatch(getBox())
    ];
  }
  return;
})

@connect(state => ({
  box: state.box
}))

export default class Box extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    const { box } = this.props;

    return (
      <div>
        <DocumentMeta extend />
        <Header />
        <section id="home-content" className="container">
          <ThumbBox box={box} />

          {box.get('boxsLoad') && (
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='div-loading text-center'><i className='fa fa-spinner fa-pulse'></i></div>
            </div>
          )}
        </section>
      </div>
    );
  }

}
