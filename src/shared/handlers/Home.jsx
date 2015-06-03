 /* @jsx React.DOM */
'use strict';

import React from 'react';

/* @jsx */
import Thumbnail from '../components/thumbnail';


export default React.createClass({
  
  statics: {
  	async routerWillRunOnServer(state, flux) {
      let AppActions = flux.getActions('appActions');
      return await AppActions.dataActions();
    },
  },

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
	  router: React.PropTypes.func.isRequired,
  },

  getInitialState() {
  	this.AppActions = this.context.flux.getActions('appActions');
    this.AppStore = this.context.flux.getStore('appStore');

   	return this.getFromStore();
  },

  getFromStore () {
  	return {
      posts: this.AppStore.getData(),
	  };
  },

  componentWillMount() {
  	this.props.headParams.setTitle("Home | tocu.vn");
    this.props.headParams.setDescription("home Description");
  },

  componentDidMount() {
    this.AppStore.addListener('change', this.onStoreChange);
		this.AppActions.dataActions();
  },

  componentWillUnmount() {
    this.AppStore.removeListener('change', this.onStoreChange);
  },

  onStoreChange() {
    this.setState(this.getFromStore());
  },

  render() {
  	if(!this.state.posts) {
  		return (<div>...loading!</div>);
  	} else {
  		let {posts} = this.state;
	    var ThumbList = posts.map(function(post, i) {
				return (
					<div key={i} className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
						<Thumbnail {...post} />
					</div>
				);
			});
			return (
				<div onClick={this.TestActions}>
					<header>
			      <div className="container">
			      </div>
			    </header>

					<section id="content">
				    <div className="container">
					    <div className="row">
		  	     		{ThumbList}
						  </div>
					  </div>
				  </section>
			  </div>
			)
  	}
  },
});

