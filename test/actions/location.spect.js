import expect from 'expect';
import Axios from 'axios';
import {API_URL} from '../../config';
import * as locationActions from '../../src/universal/actions/location';
import * as types from '../../src/universal/actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const city = [
  "Hà Nội",
  "TP Hồ Chí Minh",
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Bình Định",
  "Bạc Liêu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bắc Ninh",
  "Bến Tre",
  "Cao Bằng",
  "Cà Mau",
  "Cần Thơ",
  "Gia Lai",
  "Hòa Bình",
  "Hà Giang",
  "Hà Nam",
  "Hà Tĩnh",
  "Hưng Yên",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Long An",
  "Lào Cai",
  "Lâm Đồng",
  "Lạng Sơn",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Thanh Hóa",
  "Thái Bình",
  "Thái Nguyên",
  "Thừa Thiên - Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Tây Ninh",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
  "Điện Biên",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Đồng Nai",
  "Đồng Tháp"
];

const district = [
	{ "id":15, "name":"Ba Đình", "ghnDistrictCode":"1A01", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.611Z", "updatedAt":"2015-09-30T19:02:41.611Z" },
	{ "id":19, "name":"Ba Vì", "ghnDistrictCode":"1B17", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.615Z", "updatedAt":"2015-09-30T19:02:41.615Z" },
	{ "id":44, "name":"Bắc Từ Liêm", "ghnDistrictCode":"0110", "province":"Hà Nội", "type":2, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.647Z", "updatedAt":"2015-09-30T19:02:41.647Z" },
	{ "id":199, "name":"Đống Đa", "ghnDistrictCode":"1A04", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.790Z", "updatedAt":"2015-09-30T19:02:41.790Z" },
	{ "id":258, "name":"Hoài Đức", "ghnDistrictCode":"1B23", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.840Z", "updatedAt":"2015-09-30T19:02:41.840Z" },
	{ "id":513, "name":"Sóc Sơn", "ghnDistrictCode":"1A14", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.016Z", "updatedAt":"2015-09-30T19:02:42.016Z" },
	{ "id":101, "name":"Cầu Giấy", "ghnDistrictCode":"1A06", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.706Z", "updatedAt":"2015-09-30T19:02:41.706Z" },
	{ "id":131, "name":"Chương Mỹ", "ghnDistrictCode":"1B21", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.730Z", "updatedAt":"2015-09-30T19:02:41.730Z" },
	{ "id":185, "name":"Đông Anh", "ghnDistrictCode":"1A13", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.776Z", "updatedAt":"2015-09-30T19:02:41.776Z" },
	{ "id":457, "name":"Phú Xuyên", "ghnDistrictCode":"1B28", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.973Z", "updatedAt":"2015-09-30T19:02:41.973Z" },
	{ "id":261, "name":"Hoàng Mai", "ghnDistrictCode":"1A08", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.841Z", "updatedAt":"2015-09-30T19:02:41.841Z" },
	{ "id":526, "name":"Sơn Tây", "ghnDistrictCode":"1B16", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.026Z", "updatedAt":"2015-09-30T19:02:42.026Z" },
	{ "id":163, "name":"Đan Phượng", "ghnDistrictCode":"1B22", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.758Z", "updatedAt":"2015-09-30T19:02:41.758Z" },
	{ "id":228, "name":"Hà Đông", "ghnDistrictCode":"1B15", "province":"Hà Nội", "type":2, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.811Z", "updatedAt":"2015-09-30T19:02:41.811Z" },
	{ "id":260, "name":"Hoàn Kiếm", "ghnDistrictCode":"1A02", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.841Z", "updatedAt":"2015-09-30T19:02:41.841Z" },
	{ "id":340, "name":"Long Biên", "ghnDistrictCode":"1A09", "province":"Hà Nội", "type":2, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.895Z", "updatedAt":"2015-09-30T19:02:41.895Z" },
	{ "id":365, "name":"Mê Linh", "ghnDistrictCode":"1B29", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.911Z", "updatedAt":"2015-09-30T19:02:41.911Z" },
	{ "id":464, "name":"Phúc Thọ", "ghnDistrictCode":"1B18", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.978Z", "updatedAt":"2015-09-30T19:02:41.978Z" },
	{ "id":212, "name":"Gia Lâm", "ghnDistrictCode":"1A12", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.799Z", "updatedAt":"2015-09-30T19:02:41.799Z" },
	{ "id":237, "name":"Hai Bà Trưng", "ghnDistrictCode":"1A03", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.819Z", "updatedAt":"2015-09-30T19:02:41.819Z" },
	{ "id":383, "name":"Mỹ Đức", "ghnDistrictCode":"1B25", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.923Z", "updatedAt":"2015-09-30T19:02:41.923Z" },
	{ "id":398, "name":"Nam Từ Liêm", "ghnDistrictCode":"0130", "province":"Hà Nội", "type":2, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:41.933Z", "updatedAt":"2015-09-30T19:02:41.933Z" },
	{ "id":500, "name":"Quốc Oai", "ghnDistrictCode":"1B20", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.005Z", "updatedAt":"2015-09-30T19:02:42.005Z" },
	{ "id":562, "name":"Tây Hồ", "ghnDistrictCode":"1A05", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.053Z", "updatedAt":"2015-09-30T19:02:42.053Z" },
	{ "id":587, "name":"Thanh Xuân", "ghnDistrictCode":"1A07", "province":"Hà Nội", "type":1, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.073Z", "updatedAt":"2015-09-30T19:02:42.073Z" },
	{ "id":569, "name":"Thạch Thất", "ghnDistrictCode":"1B19", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.058Z", "updatedAt":"2015-09-30T19:02:42.058Z" },
	{ "id":586, "name":"Thanh Trì", "ghnDistrictCode":"1A11", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.072Z", "updatedAt":"2015-09-30T19:02:42.072Z" },
	{ "id":656, "name":"Ứng Hòa", "ghnDistrictCode":"1B26", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.131Z", "updatedAt":"2015-09-30T19:02:42.131Z" },
	{ "id":583, "name":"Thanh Oai", "ghnDistrictCode":"1B24", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.069Z", "updatedAt":"2015-09-30T19:02:42.069Z" },
	{ "id":610, "name":"Thường Tín", "ghnDistrictCode":"1B27", "province":"Hà Nội", "type":3, "ghnSupportType":3, "createdAt":"2015-09-30T19:02:42.092Z", "updatedAt":"2015-09-30T19:02:42.092Z "}
];

describe('actions location', () => {
  it('should get city actions', async () => {
    const fn = locationActions.getCity();
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({ state: 'test' });
    await fn(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({ type: types.CITY_SUCCESS, data: city});
  });

  it('should city load actions', () => {
    const expectedAction = {
      type: types.CITY_LOAD
    };
    expect(locationActions.cityLoad()).toEqual(expectedAction);
  });

  it('should city success actions', () => {
    const expectedAction = {
      type: types.CITY_SUCCESS
      , data: city
    };
    expect(locationActions.citySuccess(city)).toEqual(expectedAction);
  });

  it('should city fail actions', () => {
    const err = { err: 'server err' };
    const expectedAction = {
      type: types.CITY_FAIL
      , err
    };
    expect(locationActions.cityFail(err)).toEqual(expectedAction);
  });


  it('should get district actions', async () => {
    const fn = locationActions.getDistrict({city: city[0]});
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({ state: 'test' });
    await fn(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({ type: types.DISTRICT_LOAD});
  });

  it('should district load actions', () => {
    const expectedAction = {
      type: types.DISTRICT_LOAD
    };
    expect(locationActions.districtLoad()).toEqual(expectedAction);
  });

  it('should district success actions', () => {
    const expectedAction = {
      type: types.DISTRICT_SUCCESS
      , data: district
    };
    expect(locationActions.districtSuccess(district)).toEqual(expectedAction);
  });

  it('should district fail actions', () => {
    const err = { err: 'server err' };
    const expectedAction = {
      type: types.DISTRICT_FAIL
      , err
    };
    expect(locationActions.districtFail(err)).toEqual(expectedAction);
  });

});
