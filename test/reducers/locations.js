import expect from 'expect';
import location from '../../src/shared/reducers/location';
import * as types from '../../src/shared/actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

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
      location(Immutable.fromJS({district: List(district)}), {
        type: types.CITY_LOAD
      })
    ).toEqual(Immutable.fromJS({
      district: List()
      , cityLoad: true
      , cityErr: null
      , city: List()
    }));
  });

  it('should handle city success', () => {
    expect(
      location(Immutable.fromJS({district: List()}), {
        type: types.CITY_SUCCESS
        , data: city
      })
    ).toEqual(Immutable.fromJS({
      district: List()
      , cityLoad: false
      , cityErr: null
      , city
    }));
  });

  it('should handle city fail', () => {
    const err = [];
    expect(
      location(Immutable.fromJS({district: List()}), {
        type: types.CITY_FAIL
        , err
      })
    ).toEqual(Immutable.fromJS({
      district: List()
      , cityLoad: false
      , cityErr: err
      , city: List()
    }));
  });


  it('should handle district load', () => {
    expect(
      location(Immutable.fromJS({city: List(city)}), {
        type: types.DISTRICT_LOAD
      })
    ).toEqual(Immutable.fromJS({
      city
      , districtLoad: true
      , districtErr: null
      , district: List()
    }));
  });

  it('should handle district success', () => {
    expect(
      location(Immutable.fromJS({city: List(city)}), {
        type: types.DISTRICT_SUCCESS
        , data: district
      })
    ).toEqual(Immutable.fromJS({
      city
      , districtLoad: false
      , districtErr: null
      , district: List(district)
    }));
  });

  it('should handle district fail', () => {
    const err = [];
    expect(
      location(Immutable.fromJS({city: List(city)}), {
        type: types.DISTRICT_FAIL
        , err
      })
    ).toEqual(Immutable.fromJS({
      city
      , districtLoad: false
      , districtErr: err
      , district: List()
    }));
  });

});
