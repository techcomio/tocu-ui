'use strict';

import env from './env';


var HeadParams = function(title, description, keywords) {
  this.title = title || 'Tocu.vn';
  this.description = description || "tocu";
  this.keywords = keywords || "tocu";
};

/** Sets the page title */
HeadParams.prototype.setTitle = function(title) {
  this.title = title;

  if (env.CLIENT) {
    var TagTitle =  document.querySelector('head > title');
    TagTitle.text = title;
  }
};

/** Sets content for the description meta tag */
HeadParams.prototype.setDescription = function(description) {
  this.description = description;

  if (env.CLIENT) {
    var MetaDescription =  document.querySelector('head > meta[name=description]');
    MetaDescription.setAttribute('content', description);
  }
};

module.exports = HeadParams;
