'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import { getBoxId } from '../actions/box';
import BoxidContent from '../components/BoxId';
import Header from '../components/Header/Box';


@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getBoxId(params)),
  ];
})

@connect(state => ({
  box: state.box
}))

export default class BoxID extends React.Component {

	constructor(props, context) {
    super(props, context);
  }

  render() {
    const { box } = this.props;
    const { params: { id } } = this.props;
    const title = box.getIn(['boxId', 'name']);
    const description = box.getIn(['boxId', 'name']);
    const image = '';
    const meta = {
      title,
      description,
      meta: {
        charSet: 'utf-8',
        property: {
          'og:site_name': title,
          'og:image': image,
          'og:locale': 'vi_VN',
          'og:title': title,
          'og:description': description,
          'twitter:card': 'summary',
          'twitter:site': '@ngthorg',
          'twitter:creator': '@ngthorg',
          'twitter:title': title,
          'twitter:description': description,
          'twitter:image': image,
          'twitter:image:width': '200',
          'twitter:image:height': '200'
        }
      }
    };
    return (
      <div>
        <DocumentMeta {...meta} />
        <Header />

        <BoxidContent boxId={id} />
      </div>
    );
  }

}
