'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareOnUpdate } from '../decorators';
import { getBoxIdInfo, getBoxId, getBoxIdPage } from '../actions/box';
import BoxidContent from '../components/Card/BoxId';
import Header from '../components/Header/Box';
import { SERVER } from '../lib/env';
import NotFound from './NotFound';


const limit = 15;

@prepareOnUpdate(['id'], async function ({ store, params, location }) {
  if(SERVER) {
    return await * [
      store.dispatch(getBoxIdInfo(params))
    ];
  } else {
    return await * [
      store.dispatch(getBoxIdInfo(params))
      , store.dispatch(getBoxId({id: params.id, skip: 0, limit}))
    ];
  }
})

@connect(state => ({
  box: state.box
}), dispatch => ({
  getBoxIdPage: (data) => dispatch(getBoxIdPage(data))
}))

export default class BoxID extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    const { box, location } = this.props;
    const { params: { id } } = this.props;
    const title = box.getIn(['boxIdInfo', 'name']);
    const description = box.getIn(['boxIdInfo', 'name']);
    const image = '';
    const meta = {
      title,
      description,
      meta: {
        charSet: 'utf-8',
        property: {
          'og:type': 'article',
          'og:title': title,
          'og:image': image,
          'og:locale': 'vi_VN',
          'og:site_name': 'Tổ Cú',
          'og:description': description,
          'fb:app_id': '933500330050669',
          'fb:admins': '100003135566240'
        }
      }
    };

    return (
      <div>
        <DocumentMeta {...meta} />
        <Header />

        {title ? <BoxidContent location={location} boxId={id} box={box} limit={limit} getBoxIdPage={this.props.getBoxIdPage} /> : null}
      </div>
    );
  }

}
