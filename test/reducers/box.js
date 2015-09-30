import expect from 'expect';
import box from '../../src/shared/reducers/box';
import * as types from '../../src/shared/actions/actionsTypes';
import Immutable, { Seq, Map, List } from 'immutable';

const data = [
  {
    "id": 1,
    "name": "Sơ mi xô Nhật Hàn",
    "type": "product",
    "priority": 1,
    "createdAt": "2015-06-24T14:08:43.548Z",
    "updatedAt": "2015-06-24T14:08:43.548Z",
    "latestPosts": [
      {
        "id": 7,
        "name": null,
        "description": "Màu trắng thêu họa tiết tinh tế",
        "BoxId": 1,
        "boxName": "Sơ mi xô Nhật Hàn",
        "code": "SM2",
        "status": "suspended",
        "price": 150000,
        "salePrice": null,
        "weight": 500,
        "ModelId": 2,
        "images": [
          "http://api.tocu.vn/image/93a197c1e33eeb10ad5d-2-7.jpg",
          "http://api.tocu.vn/image/69612e935865baca7476-2-2.jpg",
          "http://api.tocu.vn/image/500c6ee296ef39f4fd86-2-6.jpg"
        ],
        "createdAt": "2015-07-08T15:33:50.007Z",
        "updatedAt": "2015-08-02T15:43:24.723Z"
      },
      {
        "id": 1,
        "name": null,
        "description": "Màu cam họa tiết trắng, chất mát",
        "BoxId": 1,
        "boxName": "Sơ mi xô Nhật Hàn",
        "code": "SM1",
        "status": "suspended",
        "price": 130000,
        "salePrice": null,
        "weight": 500,
        "ModelId": 2,
        "images": [
          "http://api.tocu.vn/image/0cf60858dd9553a692d3-1-1.jpg",
          "http://api.tocu.vn/image/1441317034e4b53365f7-1-4.jpg",
          "http://api.tocu.vn/image/50642ca51b52d42227c7-1-5.jpg"
        ],
        "createdAt": "2015-07-08T15:23:10.568Z",
        "updatedAt": "2015-08-02T15:49:56.035Z"
      }
    ],
    "postsCount": 2,
    "likesCount": 1
  },
  {
    "id": 2,
    "name": "Sơ mi denim Hàn",
    "type": "product",
    "priority": 2,
    "createdAt": "2015-06-24T14:11:06.067Z",
    "updatedAt": "2015-06-24T14:11:06.067Z",
    "latestPosts": [
      {
        "id": 11,
        "name": null,
        "description": "Sơ mi denim nhạt họa tiết đục hoa trắng xinh",
        "BoxId": 2,
        "boxName": "Sơ mi denim Hàn",
        "code": "DN2",
        "status": "suspended",
        "price": 150000,
        "salePrice": 100000,
        "weight": 500,
        "ModelId": 2,
        "images": [
          "http://api.tocu.vn/image/b8fa64ef4cef5471b9c5-11-2.jpg",
          "http://api.tocu.vn/image/dabcde27c52d9809c165-11-1.jpg",
          "http://api.tocu.vn/image/e5acb72f02ccb1ed6641-11-3.jpg"
        ],
        "createdAt": "2015-07-08T15:55:08.168Z",
        "updatedAt": "2015-08-02T16:32:27.472Z"
      },
      {
        "id": 10,
        "name": null,
        "description": "Sơ mi denim dáng croptop",
        "BoxId": 2,
        "boxName": "Sơ mi denim Hàn",
        "code": "DM1",
        "status": "suspended",
        "price": 150000,
        "salePrice": null,
        "weight": 500,
        "ModelId": 2,
        "images": [
          "http://api.tocu.vn/image/be9645becb337e08394a-1-1.jpg",
          "http://api.tocu.vn/image/713532ccc4121b43a353-1-2.jpg"
        ],
        "createdAt": "2015-07-08T15:52:54.275Z",
        "updatedAt": "2015-08-02T10:41:38.092Z"
      }
    ],
    "postsCount": 2,
    "likesCount": 1
  },
  {
    "id": 3,
    "name": "Áo ren, len móc Nhật",
    "type": "product",
    "priority": 3,
    "createdAt": "2015-06-28T19:14:40.384Z",
    "updatedAt": "2015-06-28T19:14:40.384Z",
    "latestPosts": [
      {
        "id": 13,
        "name": null,
        "description": "Áo ren Nhật trắng sữa dáng croptop",
        "BoxId": 3,
        "boxName": "Áo ren, len móc Nhật",
        "code": "RM2",
        "status": "suspended",
        "price": 120000,
        "salePrice": null,
        "weight": 500,
        "ModelId": 2,
        "images": [
          "http://api.tocu.vn/image/1e4bdb15fe3ed751a276-3-3.jpg",
          "http://api.tocu.vn/image/2ac135af005e8be432cb-3-2.jpg",
          "http://api.tocu.vn/image/2af6c7765db5a2bb2590-3-1.jpg"
        ],
        "createdAt": "2015-07-08T15:59:42.444Z",
        "updatedAt": "2015-08-02T09:29:16.400Z"
      },
      {
        "id": 12,
        "name": null,
        "description": "Len móc Nhật kẻ ngan xanh trắng",
        "BoxId": 3,
        "boxName": "Áo ren, len móc Nhật",
        "code": "RM1",
        "status": "suspended",
        "price": 120000,
        "salePrice": null,
        "weight": 500,
        "ModelId": 2,
        "images": [
          "http://api.tocu.vn/image/a16b73c3146a495c1e36-1-1.jpg",
          "http://api.tocu.vn/image/f456c764423c9213e8a7-1-2.jpg",
          "http://api.tocu.vn/image/8e49659f812edfb77739-1-3.jpg"
        ],
        "createdAt": "2015-07-08T15:58:17.144Z",
        "updatedAt": "2015-08-02T09:27:57.587Z"
      }
    ],
    "postsCount": 2,
    "likesCount": 1
  }
];

describe('reducers box', () => {

  it('should handle box load', () => {
    expect(
      box(Immutable.fromJS({}), {
        type: types.BOX_LOAD
      }).toJS()
    ).toEqual(Immutable.fromJS({
      boxsLoad: true
			, boxs: List()
			, boxsErr: null
    }).toJS());
  });

  // it('should handle box load success', () => {
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_LOAD_SUCCESS
  //       , data
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxsLoad: false
	// 		, boxs: Immutable.fromJS(data)
	// 		, boxsErr: null
  //   }));
  // });
  //
  // it('should handle box load fail', () => {
  //   const err = { message: 'Internal server error', status: 500 };
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_LOAD_FAIL
  //       , err
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxsLoad: false
	// 		, boxs: List()
	// 		, boxsErr: err
  //   }));
  // });
  //
  //
  // it('should handle boxId load', () => {
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_ID_LOAD
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxsIdLoad: true
	// 		, boxsId: List()
	// 		, boxsIdErr: null
  //   }));
  // });
  //
  // it('should handle boxId load success', () => {
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_ID_LOAD_SUCCESS
  //       , data
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxsIdLoad: false
	// 		, boxsId: Immutable.fromJS(data)
	// 		, boxsIdPage: 1
	// 		, boxsIdErr: null
  //   }));
  // });
  //
  // // it('should handle boxId push success', () => {
  // //   var datas = Immutable.fromJS({boxsId: Immutable.fromJS([1, 2]), boxsIdPage: 1});
  // //   expect(
  // //     box(datas, {
  // //       type: types.BOX_ID_PUSH_SUCCESS
  // //       , data: 3
  // //     })
  // //   ).toEqual(Immutable.fromJS({
	// // 		boxsId: [1, 2, 3]
  // //     , boxsIdLoad: false
	// // 		, boxsIdPage: 2
	// // 		, boxsIdErr: null
  // //   }));
  // // });
  //
  // it('should handle boxId load Fail', () => {
  //   const err = { message: 'Internal server error', status: 500 };
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_ID_LOAD_FAIL
  //       , err
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxsIdLoad: false
  //     , boxsId: List()
  //     , boxsIdErr: err
  //   }));
  // });
  //
  //
  // it('should handle boxId Info load', () => {
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_ID_LOAD_INFO
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxIdInfoLoad: true
	// 		, boxIdInfo: Map()
	// 		, boxIdInfoErr: null
  //   }));
  // });
  //
  // it('should handle boxId Info load success', () => {
  //   const data = { id: 1, boxName: 'Sơ mi denim Hàn' };
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_ID_LOAD_INFO_SUCCESS
  //       , data
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxIdInfoLoad: false
	// 		, boxIdInfo: Map(data)
	// 		, boxIdInfoErr: null
  //   }));
  // });
  //
  // it('should handle boxId Info load Fail', () => {
  //   const err = { message: 'Internal server error', status: 500 };
  //   expect(
  //     box(Immutable.fromJS({}), {
  //       type: types.BOX_ID_LOAD_INFO_FAIL
  //       , err
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     boxIdInfoLoad: false
  //     , boxIdInfo: Map()
  //     , boxIdInfoErr: err
  //   }));
  // });

});
