'use strict';

export default {
	statics: {
	  willTransitionTo: function(transition, params, query) {
      let { flux } = transition.context;
      if(flux.getStore('authStore').getCookieToken() === undefined) {
        transition.redirect('signin', {}, {'nextPath' : transition.path});
      }
	  }
	}
}
