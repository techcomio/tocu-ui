'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getBox } from '../actions/box';
import { prepareRoute } from '../decorators';
import ThumbBox from '../components/Card/ThumbBox';
import Header from '../components/Header/Home';


const title = 'Tocu';

const meta = {
  title,
};

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getBox())
  ];
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
        <DocumentMeta {...meta} extend />
        <Header />
        <section id="home-content" className="container">
          <ThumbBox />

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
