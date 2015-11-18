'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const title = 'Test';

const meta = {
  title
};

// @connect(state => ({
//   test : state.test
// }), dispatch => ({
//   hihi: () => dispatch(CounterActions.demo())
// }), (state, actions, props) => {
//   return {};
// })

@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(getBox())
  ];
})

// @connect(state => ({
//   auth: state.auth
// }))
@connect(state => {

  const { box } = state;

  var test = box.get('boxs').filter(obj => obj.get('type') === 'product');

  return {
    auth: state.auth
    , box: test
  }
})

export default class Test extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    let { auth, box, dispatch } = this.props;
    // const Acti = bindActionCreators(CounterActions, dispatch);
    // console.log(box)
    return (
      <div>
        Test
      </div>
    );
  }

}
