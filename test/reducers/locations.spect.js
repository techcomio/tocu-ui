import { expect } from 'chai';
import location from '../../src/shared/reducers/location';
import * as types from '../../src/shared/actions/actionsTypes';
import { fromJS, Map, List } from 'immutable';

const city = ["Hà Nội", "TP Hồ Chí Minh", "An Giang"];
const district = [
  {
    "id": 16,
    "name": "Ba Đình",
    "city": "Hà Nội",
    "isUrban": true
  },
  {
    "id": 20,
    "name": "Ba Vì",
    "city": "Hà Nội",
    "isUrban": false
  },
  {
    "id": 45,
    "name": "Bắc Từ Liêm",
    "city": "Hà Nội",
    "isUrban": true
  }
];

describe('reducers location', () => {
  it('should handle city load', () => {
    expect(
      location(fromJS({district: List(district)}), {
        type: types.CITY_LOAD
      })
    ).to.equal(fromJS({
			district: List([])
			, cityLoad: true
			, cityErr: null
			, city: List()
    }));
  });

  it('should handle city success', () => {
    expect(
      location(fromJS({district: List()}), {
        type: types.CITY_SUCCESS
        , data: city
      })
    ).to.equal(fromJS({
      district: List()
      , cityLoad: false
      , cityErr: null
      , city
    }));
  });

  it('should handle city fail', () => {
    const err = [];
    expect(
      location(fromJS({district: List()}), {
        type: types.CITY_FAIL
        , err
      })
    ).to.equal(fromJS({
      district: List()
      , cityLoad: false
      , cityErr: err
      , city: List()
    }));
  });


  it('should handle district load', () => {
    expect(
      location(fromJS({city: List(city)}), {
        type: types.DISTRICT_LOAD
      })
    ).to.equal(fromJS({
      city
      , districtLoad: true
      , districtErr: null
      , district: List()
    }));
  });

  it('should handle district success', () => {
    expect(
      location(fromJS({city: List(city)}), {
        type: types.DISTRICT_SUCCESS
        , data: district
      })
    ).to.equal(fromJS({
      city
      , districtLoad: false
      , districtErr: null
      , district: List(district)
    }));
  });

  it('should handle district fail', () => {
    const err = [];
    expect(
      location(fromJS({city: List(city)}), {
        type: types.DISTRICT_FAIL
        , err
      })
    ).to.equal(fromJS({
      city
      , districtLoad: false
      , districtErr: err
      , district: List()
    }));
  });

});
