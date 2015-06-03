/* @jsx React.DOM */
'use strict';

import React from 'react';

export default React.createClass({
  contextTypes: {
    flux: React.PropTypes.object.isRequired,
    router: React.PropTypes.func.isRequired,
  },
  getInitialState() {
    this.TestActions = this.context.flux.getActions('testActions');
    this.TestStore = this.context.flux.getStore('testStore');

    return this.getFromStore();
  },

  getFromStore () {
    return {
      posts: this.TestStore.getData(),
    };
  },

  componentWillMount() {
    this.props.headParams.setTitle("Posts | tocu.vn");
    this.props.headParams.setDescription("set Description");
  },

  componentDidMount() {
    this.TestStore.addListener('change', this.onStoreChange);
    this.TestActions.TestAction();
  },

  componentWillUnmount() {
    this.TestStore.removeListener('change', this.onStoreChange);
  },
  
  onStoreChange() {
    this.setState(this.getFromStore());
  },

  render() {
    return (
      <div className="container">
        Posts {this.props.params.id} 
      </div>
    );
  },

});
