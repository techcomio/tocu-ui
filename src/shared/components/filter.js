/* @react-router static transition */
'use strict';

import authStore from '../store/auth';

export let FilterLog = {
    statics: {
      willTransitionTo(transition) {
        if (!authStore.loggedIn()) {
          transition.redirect('/login', {}, {'nextPath' : transition.path});
        }  
      }
    }
}