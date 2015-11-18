import { expect } from 'chai';
import product from '../../src/universal/reducers/product';
import * as types from '../../src/universal/actions/actionsTypes';
import { fromJS, Map, List, Range } from 'immutable';


describe('test data immutable', () => {

  it('should updated value objects in array', () => {
		var data = fromJS({
			Cart: {
				lines: [
					{
						boxName: "Shorts Hàn Quốc",
						code: "QS2",
						id: 19,
						status: "available"
					}, {
						boxName: "Shorts Hàn Quốc",
						code: "QS2",
						id: 20,
						status: "available"
					}, {
						boxName: "Shorts Hàn Quốc",
						code: "QS2",
						id: 7,
						status: "available"
					}, {
						boxName: "Shorts Hàn Quốc",
						code: "QS2",
						id: 9,
						status: "available"
					}
				]
			}
		});

		var test = data.getIn(['Cart', 'lines']).map(function(item) {
			return item.updateIn(['status'], val => 'success');
		});

		expect(
			test
		).to.equal(
			fromJS([
				{
					boxName: "Shorts Hàn Quốc",
					code: "QS2",
					id: 19,
					status: "success"
				}, {
					boxName: "Shorts Hàn Quốc",
					code: "QS2",
					id: 20,
					status: "success"
				}, {
					boxName: "Shorts Hàn Quốc",
					code: "QS2",
					id: 7,
					status: "success"
				}, {
					boxName: "Shorts Hàn Quốc",
					code: "QS2",
					id: 9,
					status: "success"
				}
			])
		);

  });

});
