import { Request } from 'superagent';
import request from 'superagent';


Request.prototype.exec = function() {
  let req = this;

  return new Promise ((resolve, reject) => {
    setTimeout(() => {
     	req.end((error, res) => {
	      if (error) return reject(error);
	      return resolve(res);
	    });
    }, 0);
  });
};

export default request;