'use strict';

import env from './env';


export default class HeadParams {

  constructor ({title, desc, keys}) {

    this.title       = title || 'Tocu.vn';
    this.description = desc || "tocu";
    this.keywords    = keys || "tocu";
  }

  /**
   * set Title page
   * @param {string} title
   */
  setTitle (title) {
    this.title = title;

    if (env.CLIENT) {
      var TagTitle =  document.querySelector('head > title');
      TagTitle.text = title;
    }
  }

  /**
   * set Description
   * @param {string} description
   */
  setDescription (description) {
    this.description = description;

    if (env.CLIENT) {
      var MetaDescription =  document.querySelector('head > meta[name=description]');
      MetaDescription.setAttribute('content', description);
    }
  }

};