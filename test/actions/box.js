import expect from 'expect';
import Axios from 'axios';
import {API_URL} from '../../config';
import * as boxActions from '../../src/shared/actions/box';
import * as types from '../../src/shared/actions/actionsTypes';


describe('actions box', () => {
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
    const err = {test: 'hihi'};
    const expectedAction = {
      type: types.BOX_LOAD_FAIL
      , err
    };
    expect(boxActions.loadFail(err)).toEqual(expectedAction);
  });

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

  it('should load box ID action', () => {
    const expectedAction = {
      type: types.BOX_ID_LOAD
    };
    expect(boxActions.loadId()).toEqual(expectedAction);
  });

  it('should loadSuccess ID action', () => {
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
    const expectedAction = {
      type: types.BOX_ID_LOAD_SUCCESS
      , data
    };
    expect(boxActions.loadIdSuccess(data)).toEqual(expectedAction);
  });

  it('should loadFail ID action', () => {
    const err = {message: 'test'};
    const expectedAction = {
      type: types.BOX_ID_LOAD_FAIL
      , err
    };
    expect(boxActions.loadIdFail(err)).toEqual(expectedAction);
  });

  it('should get Box ID action', async () => {
    const boxId = 1;
    let data = {};
    const fn = boxActions.getBoxId({id: boxId});
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({ state: 'test' });
    await fn(dispatch, getState);
    await Axios.get(`${API_URL}/box/${boxId}`)
      .then((res) => {
        data = res.data;
      })
      .catch((res) => {
        data = res.data;
      });
    expect(dispatch).toHaveBeenCalledWith({ type: types.BOX_ID_LOAD_SUCCESS, data: data});
  });

});
