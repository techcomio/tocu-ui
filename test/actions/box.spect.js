import expect from 'expect';
import Axios from 'axios';
import { applyMiddleware } from 'redux'
import { API_URL } from '../../config';
import * as boxActions from '../../src/universal/actions/box';
import * as types from '../../src/universal/actions/actionsTypes';
import promiseMiddleware from 'lib/promiseMiddleware';

const middlewares = [ promiseMiddleware ];

/**
 * Creates a mock of Redux store with middleware.
 */
function mockStore(getState, expectedActions, done) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.')
  }
  if (typeof done !== 'undefined' && typeof done !== 'function') {
    throw new Error('done should either be undefined or function.')
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ?
          getState() :
          getState;
      },
      dispatch(action) {
        const expectedAction = expectedActions.shift();

        try {
          expect(action).toEqual(expectedAction);
          if (done && !expectedActions.length) {
            done();
          }
          return action
        } catch (e) {
          done(e);
        }
      }
    };
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware);

  return mockStoreWithMiddleware();
}



describe.only('actions box', () => {

  // it('should get all BOX action', async () => {
  //   const fn = boxActions.getBox();
  //   let data = {};
  //   expect(fn).toBeA('function');
  //   const dispatch = expect.createSpy();
  //   const getState = () => ({ state: 'test' });
  //   await fn(dispatch, getState);
  //   await Axios.get(`${API_URL}/box`)
  //     .then((res) => {
  //       data = res.data;
  //     })
  //     .catch((res) => {
  //       data = res.data;
  //     });
  //   expect(dispatch).toHaveBeenCalledWith({ type: types.BOX_LOAD_SUCCESS, data: data});
  // });

  it.only('should get all BOX action', async (done) => {
    // const getState = () => ({ state: 'test' });
    const getState = { state: 'test' };
    let data = {};
    await Axios.get(`${API_URL}/box`)
      .then((res) => {
        data = res.data;
      });

    const expectedActions = [
      { type: types.GET_BOX_REQUEST },
      { type: types.GET_BOX, status: 200, data }
    ];
    const storeRedux = mockStore(getState, expectedActions, done);
    storeRedux.dispatch(boxActions.getBox());
  });


  it('should get all BOX action', async (done) => {
    const id = 1,
      getState = { state: 'test' };
    let data = {};
    await Axios.get(`${API_URL}/box/${id}`)
      .then((res) => {
        data = res.data;
      });

    const expectedActions = [
      { type: types.GET_BOXID_INFO_REQUEST },
      { type: types.GET_BOXID_INFO, status: 200, data }
    ];
    const storeRedux = mockStore(getState, expectedActions, done);
    storeRedux.dispatch(boxActions.getBoxIdInfo({id}));
  });


  it('should get BOX skip action', async () => {
    const id = 1, skip = 0, limit = 15;
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
        hasMore = res.data.length < limit ? false : true;
      })
      .catch((res) => {
        data = res.data;
      });

    expect(dispatch).toHaveBeenCalledWith({type: types.GET_BOX_ID, data, hasMore, skip: limit});
  });


  it('should get boxId page action', async () => {
    const id = 1, skip = 0, limit = 15;
    const fn = boxActions.getBoxIdPage({id, skip, limit});
    let data = {};
    let hasMore = null;
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({});
    await fn(dispatch, getState);
    await Axios.get(`${API_URL}/product/box/${id}?skip=${skip}&limit=${limit}`)
      .then((res) => {
        data = res.data;
        hasMore = res.data.length < limit ? false : true;
      })
      .catch((res) => {
        data = res.data;
      });

    expect(dispatch).toHaveBeenCalledWith({type: types.BOX_ID_PUSH, data, hasMore, skip: limit});
  });

});
