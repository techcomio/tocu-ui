import expect from 'expect';
import React from 'react';
import { List, Map, fromJS } from 'immutable';

describe('Immutable', () => {

  describe('sort', () => {

		it('sorts by key a', () => {
			expect(
				List([
					{a: 1, b: 2},
					{a: 3, b: 3},
					{a: 2, b: 5}
				]).sortBy(item => item.a).toArray()
			).toEqual([
				{a: 1, b: 2},
				{a: 2, b: 5},
				{a: 3, b: 3}
			]);
    });

    it('sorts by key b', () => {
			expect(
				List([
					{a: 1, b: 2},
					{a: 2, b: 5},
					{a: 3, b: 3}
				]).sortBy(item => item.b).toArray()
			).toEqual([
				{a: 1, b: 2},
				{a: 3, b: 3},
				{a: 2, b: 5}
			]);
    });

    it('sorts orderBy asc', () => {
      let arr = fromJS([
        {a: 1, b: 2},
        {a: 2, b: 5},
        {a: 3, b: 3}
      ]);

      expect(
        arr.sortBy(item => item.get('b'), (a, b) => {
          return a - b;
        }).toJS()
      ).toEqual([
				{a: 1, b: 2},
				{a: 3, b: 3},
				{a: 2, b: 5}
      ]);
		});

    it('sorts orderBy desc', () => {
      let arr = fromJS([
        {a: 1, b: 2},
        {a: 2, b: 5},
        {a: 3, b: 3}
      ]);

      expect(
        arr.sortBy(item => item.get('b'), (a, b) => {
          return b - a;
        }).toJS()
      ).toEqual([
				{a: 2, b: 5},
				{a: 3, b: 3},
				{a: 1, b: 2}
      ]);
		});

		// console.log(Map({a: {test: 2}, b: {test: 3}}).sortBy(item => item.test)) // OrderedMap { "a": [object Object], "b": [object Object] }
		// console.log(Map({a: {test: 4}, d: {test: 1}, c: {test: 5}, b: {test: 3}}).sortBy(item => item.test, function(a, b) {
    //   return a - b;
    // })) // OrderedMap { "b": [object Object], "a": [object Object] }

    // let test = [
    //   {"city":"new york","id":2},
    //   {"city":"boston","id":3},
    //   {"city":"seattle","id":1},
    //   {"city":"kansas city","id":5}
    // ];
    //
    // test.sort(function(a,b) {
    //   return a.id - b.id;
    // });
    // console.log(test);
    //
    // test.sort(function(a,b) {
    //   return b.id - a.id;
    // });
    // console.log(test);

	});

});
