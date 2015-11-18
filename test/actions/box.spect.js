import expect from 'expect';
import Axios from 'axios';
import {API_URL} from '../../config';
import * as boxActions from '../../src/universal/actions/box';
import * as types from '../../src/universal/actions/actionsTypes';


describe('actions box', () => {
  it('should get all BOX action', async () => {
    const fn = boxActions.getBox();
    let data = {};
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({ state: 'test' });
    await fn(dispatch, getState);
    await Axios.get(`${API_URL}/box`)
      .then((res) => {
        data = res.data;
      })
      .catch((res) => {
        data = res.data;
      });
    expect(dispatch).toHaveBeenCalledWith({ type: types.BOX_LOAD_SUCCESS, data: data});
  });

  it('should load box action', () => {
    const expectedAction = {
      type: types.BOX_LOAD
    };
    expect(boxActions.load()).toEqual(expectedAction);
  });

  it('should loadSuccess action', () => {
    const data = {test: 'hihi'};
    const expectedAction = {
      type: types.BOX_LOAD_SUCCESS
      , data
    };
    expect(boxActions.loadSuccess(data)).toEqual(expectedAction);
  });

  it('should loadFail action', () => {
    const err = { message: 'Internal server error', status: 500 };
    const expectedAction = {
      type: types.BOX_LOAD_FAIL
      , err
    };
    expect(boxActions.loadFail(err)).toEqual(expectedAction);
  });


  it('should get all BOX action', async () => {
    const id = 1;
    const fn = boxActions.getBoxIdInfo({id});
    let data = {};
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({});
    await fn(dispatch, getState);
    await Axios.get(`${API_URL}/box/${id}`)
      .then((res) => {
        data = res.data;
      })
      .catch((res) => {
        data = res.data;
      });
    expect(dispatch).toHaveBeenCalledWith({ type: types.BOX_ID_LOAD_INFO_SUCCESS, data});
  });

  it('should load boxId info action', () => {
    const expectedAction = {
      type: types.BOX_ID_LOAD_INFO
    };
    expect(boxActions.loadIdInfo()).toEqual(expectedAction);
  });

  it('should load boxId success action', () => {
    const data = {test: 'hihi'};
    const expectedAction = {
      type: types.BOX_ID_LOAD_INFO_SUCCESS
      , data
    };
    expect(boxActions.loadIdInfoSuccess(data)).toEqual(expectedAction);
  });

  it('should load boxId fail action', () => {
    const err = { message: 'Internal server error', status: 500 };
    const expectedAction = {
      type: types.BOX_ID_LOAD_INFO_FAIL
      , err
    };
    expect(boxActions.loadIdInfoFail(err)).toEqual(expectedAction);
  });


  it('should get BOX skip action', async () => {
    const id = 1;
    const skip = 0;
    const limit = 15;
    const fn = boxActions.getBoxId({id, skip, limit});
    let data = {};
    let hasMore = null;
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({});
    await fn(dispatch, getState);
    await Axios.get(`${API_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
      .then((res) => {
        data = res.data;
      })
      .catch((res) => {
        data = res.data;
      });
    expect(dispatch).toHaveBeenCalledWith({type: types.BOX_ID_LOAD_SUCCESS, data: data, hasMore: false, skip: limit});
  });

  it('should load boxId skip load action', () => {
    const expectedAction = {
      type: types.BOX_ID_LOAD
    };
    expect(boxActions.getBoxIdLoad()).toEqual(expectedAction);
  });

  it('should load boxId skip success action', () => {
    const data = {test: 'hihi'};
    const skip = 0;
    const hasMore = true;
    const expectedAction = {
      type: types.BOX_ID_LOAD_SUCCESS
      , data
      , skip
      , hasMore
    };
    expect(boxActions.getBoxIdSuccess(data, hasMore, skip)).toEqual(expectedAction);
  });

  it('should load boxId skip fail action', () => {
    const err = { message: 'Internal server error', status: 500 };
    const skip = 0;
    const expectedAction = {
      type: types.BOX_ID_LOAD_FAIL
      , err
      , hasMore: false
      , skip
    };
    expect(boxActions.getBoxIdFail(err, skip)).toEqual(expectedAction);
  });


  // it('should get boxId page action', async () => {
  //   const id = 1;
  //   const skip = 0;
  //   const limit = 15;
  //   const fn = boxActions.getBoxIdPage({id, skip, limit});
  //   let data = {};
  //   let hasMore = null;
  //   expect(fn).toBeA('function');
  //   const dispatch = expect.createSpy();
  //   const getState = () => ({});
  //   await fn(dispatch, getState);
  //   await Axios.get(`${API_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
  //     .then((res) => {
  //       data = res.data;
  //     })
  //     .catch((res) => {
  //       data = res.data;
  //     });
  //   expect(dispatch).toHaveBeenCalledWith({type: types.BOX_ID_PUSH_SUCCESS, data: data, hasMore: false, skip: limit});
  // });

  it('should load boxId page load action', () => {
    const expectedAction = {
      type: types.BOX_ID_PUSH_LOAD
    };
    expect(boxActions.getBoxIdPageLoad()).toEqual(expectedAction);
  });

  it('should load boxId page load success action', () => {
    const data = {
      "id": 3,
      "name": "Áo ren, len móc Nhật",
      "type": "product",
      "priority": 3,
      "createdAt": "2015-06-28T19:14:40.384Z",
      "updatedAt": "2015-06-28T19:14:40.384Z",
      "postsCount": 2,
      "likesCount": 1
    };
    const skip = 0;
    const hasMore = true;
    const expectedAction = {
      type: types.BOX_ID_PUSH_SUCCESS
      , data
      , skip
      , hasMore
    };
    expect(boxActions.getBoxIdPageSuccess(data, hasMore, skip)).toEqual(expectedAction);
  });

  it('should load boxId page load fail action', () => {
    const err = { message: 'Internal server error', status: 500 };
    const skip = 0;
    const expectedAction = {
      type: types.BOX_ID_PUSH_FAIL
      , err
      , skip
    };
    expect(boxActions.getBoxIdPageFail(err, skip)).toEqual(expectedAction);
  });


  it('should count box action', async () => {
    const fn = boxActions.count();
    let data = {};
    let hasMore = null;
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({});
    await fn(dispatch, getState);
    await await Axios.get(`${API_URL}/box/count`)
      .then((res) => {
        data = res.data;
      })
      .catch((res) => {
        data = res.data;
      });
    expect(dispatch).toHaveBeenCalledWith({type: types.BOX_COUNT, data: data});
  });

  it('should count box success action', () => {
    const data = 15;
    const expectedAction = {
      type: types.BOX_COUNT
      , data
    };
    expect(boxActions.countSuccess(data)).toEqual(expectedAction);
  });

});
