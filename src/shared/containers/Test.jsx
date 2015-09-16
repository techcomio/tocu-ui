'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const title = 'Test';
const description = 'All the modern best practices in one example.';
const image = 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/971923_344220582347382_1541115560_n.jpg?oh=72a2ea7973d5e121698d01649f3001a9&oe=5665CDFF&__gda__=1451456542_53e748908dee4269c6330ca5503dc12f';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:image': image,
      'og:locale': 'en_US',
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

// @connect(state => ({
//   test : state.test
// }), dispatch => ({
//   hihi: () => dispatch(CounterActions.demo())
// }), (state, actions, props) => {
//   return {};
// })

@connect(state => ({
  auth: state.auth
}))

export default class Test extends React.Component {

	constructor(props, context) {
    super(props, context);
  }

  render() {
    let { auth, dispatch } = this.props;
    // const Acti = bindActionCreators(CounterActions, dispatch);

    return (
      <div>
        <DocumentMeta {...meta}/>
        Test
        <Link to="/test/hihi" state={{ fromTest: true }}> to hihi</Link>

        {this.props.children}
      </div>
    );
  }

}

/*
@prepareRoute(async function ({ store, params, location }) {
  return await * [
    store.dispatch(CounterActions.test()),
  ];
})

@connect(state => ({
  counter : state.counter
}))

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const { counter, dispatch } = this.props;
    const counterAction = bindActionCreators(CounterActions, dispatch);
    console.log('render')
    return (
      <div>
        <DocumentMeta {...meta} />

        Home! {counter.get('counter')}
        <p onClick={counterAction.test}>click me</p>
        <Link to="/test">Test</Link>
      </div>
    );
  }

}

 */
