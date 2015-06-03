"use strict";

export async function performRouteHandlerStaticMethod(routes, methodName, ...args) {
  return Promise.all(routes
    .map(route => route.handler[methodName])
    .filter(method => typeof method === 'function')
    .map(method => method(...args))
  );
};

export class PromiseUtils {

	constructor() {}

	static retry(options) {

		var c = 1,
		promise = options.what,
		predicate = options.when,
		timeout = options.wait;

		var innerPromiseWhile = (promise, predicate, timeout, counter) => {
			return new Promise((resolve, reject) => {
				promise()
				.then((val) => {
					if (predicate(val, counter)) {
						setTimeout(() => {
							return innerPromiseWhile(promise, predicate, timeout, counter + 1)
									.then((val1) => resolve(val1), (err1) => reject(err1))
						}, timeout(counter));
					} else {
						resolve(val)
					}
				}, (err) => reject(err))
			})
		}

		return innerPromiseWhile(promise, predicate, timeout, c);
	}
}