// import expect from 'expect';
// import Axios from 'axios';
// import {API_URL} from '../../config';
// import * as locationActions from '../../src/shared/actions/location';
// import * as types from '../../src/shared/actions/actionsTypes';
// import Immutable, { Map, List } from 'immutable';
//
// const city = [
//   "Hà Nội",
//   "TP Hồ Chí Minh",
//   "An Giang",
//   "Bà Rịa - Vũng Tàu",
//   "Bình Dương",
//   "Bình Phước",
//   "Bình Thuận",
//   "Bình Định",
//   "Bạc Liêu",
//   "Bắc Giang",
//   "Bắc Kạn",
//   "Bắc Ninh",
//   "Bến Tre",
//   "Cao Bằng",
//   "Cà Mau",
//   "Cần Thơ",
//   "Gia Lai",
//   "Hòa Bình",
//   "Hà Giang",
//   "Hà Nam",
//   "Hà Tĩnh",
//   "Hưng Yên",
//   "Hải Dương",
//   "Hải Phòng",
//   "Hậu Giang",
//   "Khánh Hòa",
//   "Kiên Giang",
//   "Kon Tum",
//   "Lai Châu",
//   "Long An",
//   "Lào Cai",
//   "Lâm Đồng",
//   "Lạng Sơn",
//   "Nam Định",
//   "Nghệ An",
//   "Ninh Bình",
//   "Ninh Thuận",
//   "Phú Thọ",
//   "Phú Yên",
//   "Quảng Bình",
//   "Quảng Nam",
//   "Quảng Ngãi",
//   "Quảng Ninh",
//   "Quảng Trị",
//   "Sóc Trăng",
//   "Sơn La",
//   "Thanh Hóa",
//   "Thái Bình",
//   "Thái Nguyên",
//   "Thừa Thiên - Huế",
//   "Tiền Giang",
//   "Trà Vinh",
//   "Tuyên Quang",
//   "Tây Ninh",
//   "Vĩnh Long",
//   "Vĩnh Phúc",
//   "Yên Bái",
//   "Điện Biên",
//   "Đà Nẵng",
//   "Đắk Lắk",
//   "Đắk Nông",
//   "Đồng Nai",
//   "Đồng Tháp"
// ];
//
// const district = [
//   {
//     "id": 16,
//     "name": "Ba Đình",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 20,
//     "name": "Ba Vì",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 45,
//     "name": "Bắc Từ Liêm",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 102,
//     "name": "Cầu Giấy",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 132,
//     "name": "Chương Mỹ",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 163,
//     "name": "Đan Phượng",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 185,
//     "name": "Đông Anh",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 199,
//     "name": "Đống Đa",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 212,
//     "name": "Gia Lâm",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 228,
//     "name": "Hà Đông",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 237,
//     "name": "Hai Bà Trưng",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 258,
//     "name": "Hoài Đức",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 260,
//     "name": "Hoàn Kiếm",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 261,
//     "name": "Hoàng Mai",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 338,
//     "name": "Long Biên",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 362,
//     "name": "Mê Linh",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 380,
//     "name": "Mỹ Đức",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 395,
//     "name": "Nam Từ Liêm",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 453,
//     "name": "Phú Xuyên",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 460,
//     "name": "Phúc Thọ",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 496,
//     "name": "Quốc Oai",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 509,
//     "name": "Sóc Sơn",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 522,
//     "name": "Sơn Tây",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 558,
//     "name": "Tây Hồ",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 565,
//     "name": "Thạch Thất",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 579,
//     "name": "Thanh Oai",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 582,
//     "name": "Thanh Trì",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 583,
//     "name": "Thanh Xuân",
//     "city": "Hà Nội",
//     "isUrban": true
//   },
//   {
//     "id": 606,
//     "name": "Thường Tín",
//     "city": "Hà Nội",
//     "isUrban": false
//   },
//   {
//     "id": 652,
//     "name": "Ứng Hòa",
//     "city": "Hà Nội",
//     "isUrban": false
//   }
// ];
//
// describe('actions location', () => {
//   it('should get city actions', async () => {
//     const fn = locationActions.getCity();
//     expect(fn).toBeA('function');
//     const dispatch = expect.createSpy();
//     const getState = () => ({ state: 'test' });
//     await fn(dispatch, getState);
//
//     expect(dispatch).toHaveBeenCalledWith({ type: types.CITY_SUCCESS, data: city});
//   });
//
//   it('should city load actions', () => {
//     const expectedAction = {
//       type: types.CITY_LOAD
//     };
//     expect(locationActions.cityLoad()).toEqual(expectedAction);
//   });
//
//   it('should city success actions', () => {
//     const expectedAction = {
//       type: types.CITY_SUCCESS
//       , data: city
//     };
//     expect(locationActions.citySuccess(city)).toEqual(expectedAction);
//   });
//
//   it('should city fail actions', () => {
//     const err = { err: 'server err' };
//     const expectedAction = {
//       type: types.CITY_FAIL
//       , err
//     };
//     expect(locationActions.cityFail(err)).toEqual(expectedAction);
//   });
//
//
//   it('should get district actions', async () => {
//     const fn = locationActions.getDistrict({city: city[0]});
//     expect(fn).toBeA('function');
//     const dispatch = expect.createSpy();
//     const getState = () => ({ state: 'test' });
//     await fn(dispatch, getState);
//
//     expect(dispatch).toHaveBeenCalledWith({ type: types.DISTRICT_SUCCESS, data: district});
//   });
//
//   it('should district load actions', () => {
//     const expectedAction = {
//       type: types.DISTRICT_LOAD
//     };
//     expect(locationActions.districtLoad()).toEqual(expectedAction);
//   });
//
//   it('should district success actions', () => {
//     const expectedAction = {
//       type: types.DISTRICT_SUCCESS
//       , data: district
//     };
//     expect(locationActions.districtSuccess(district)).toEqual(expectedAction);
//   });
//
//   it('should district fail actions', () => {
//     const err = [];
//     const expectedAction = {
//       type: types.DISTRICT_FAIL
//       , err
//     };
//     expect(locationActions.districtFail(err)).toEqual(expectedAction);
//   });
//
// });
