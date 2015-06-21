'use strict';

import 'babel/polyfill';
import React                               from 'react';
import Router, { StaticLocation }          from 'react-router';
import FluxComponent                       from 'flummox/component';
import Flux                                from '../shared/Flux';
import routes                              from "../shared/routers";
import HeadParams                          from '../shared/lib/HeadParams';
import { performRouteHandlerStaticMethod } from '../shared/utils/performRouteHandlerStaticMethod';

let HtmlComponent = React.createFactory(require('./html'));
let headParams = new HeadParams();


export default async function (req, res, next) {
	let flux = new Flux();

	await flux.getActions('authActions').cookieActions(req.cookies.token);

	async function renderApp(location, cb) {
		let router = Router.create({
			routes,
			location,
			onAbort(redirect) {
				cb(null, router, {redirect: redirect});
			},
			transitionContext: { flux },
			onError(err) {
	      cb(err);
	    }
		});

		router.run((Handler, state) => {

			async function run() {

		      await performRouteHandlerStaticMethod(state.routes, 'routerWillRunOnServer', state, flux, req);
		      
					if (state.routes[1].name === 'notFound') {
						let html = React.renderToStaticMarkup(React.createElement(Handler));
						cb(null, router, {notFound: true}, html);
						return;
					}

					let bodyElement = React.renderToString(
						<FluxComponent flux={flux} >
          		<Handler query={state.query} params={state.params} headParams={headParams} />
          	</FluxComponent>
	        );

					// get data Store của tất cả các Store sử dụng func serialize. (chỉ get dữ liệu phần this.state)
					// https://github.com/acdlite/flummox/blob/master/docs/docs/api/store.md#serializestate
					let test = flux.serialize();

			    let dehydratedState ="window.__STATE__=" + test +";";	// set data suống client

			    let html = React.renderToStaticMarkup(HtmlComponent({
			      headParams: headParams,
			      markup: bodyElement,
			      state: dehydratedState
			    }));
			    
					cb(null, router, null, html);

			}

			run().catch(error => {
	      throw error;
	    });
		});
	}

	let location = new StaticLocation(req.url, null);
	renderApp(location, (err, router, special, html) => {
		if(err) {
			return next(err);
		}

		let doctype = '<!DOCTYPE html>';

		if(!special) {
			return res.send(doctype + html);
		}

		if(special.notFound) {
			res.status(404).send(doctype + html);
		}

		if(special.redirect) {
		  let {to, params, query} = special.redirect;
      let path = router.makePath(to, params, query);
      res.redirect(302, path);
      return;
		}
	});
}
