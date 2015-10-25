import expect from 'expect';
import Axios from 'axios';
import {API_URL} from '../../config';
import * as authActions from '../../src/shared/actions/auth';
import * as types from '../../src/shared/actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';


describe('actions auth', () => {
  it('should Craete auth actions', async () => {
    let data = {
        name:"test"
        , password:"123"
        , mobilePhone:"0989414660"
        , city:"Hà Nội"
        , district:"Thường Tín"
      };
    const fn = authActions.createAuth(data);
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({ state: 'test' });
    await fn(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({ type: types.CREATE_AUTH_FAIL, err: { message: "Số điện thoại đã tồn tại." }});
  });

  it('should create load actions', () => {
    const expectedAction = {
      type: types.CREATE_AUTH_LOAD
    };
    expect(authActions.createLoad()).toEqual(expectedAction);
  });

  it('should create success actions', () => {
    let data = {
      "isVerifyMobilePhone": false,
      "level": 1,
      "id": 6,
      "name": "test",
      "mobilePhone": "0989414661",
      "city": "Hà Nội",
      "district": "Thường Tín",
      "districtIsUrban": false,
      "avatarUrl": "http://api.tocu.vn/image/egg-avatars/egg12.jpg",
      "updatedAt": "2015-09-02T14:42:26.141Z",
      "createdAt": "2015-09-02T14:42:26.141Z",
      "company": null,
      "address": null,
      "NoteId": null,
      "access_token": "dlomn3rbb94r6k8pmr3c0kpb1hlah13rig4ibds4el30e9nlf8l4ss1j",
      "expires_in": 86400,
      "_ts": "2015-09-02T14:42:26.289Z"
    };
    const expectedAction = {
      type: types.CREATE_AUTH_SUCCESS
      , data
    };
    expect(authActions.createAuthSuccess(data)).toEqual(expectedAction);
  });

  it('should create fail actions', () => {
    let err = {
      message: "Số điện thoại đã tồn tại."
    };
    const expectedAction = {
      type: types.CREATE_AUTH_FAIL
      , err
    };
    expect(authActions.createAuthFail(err)).toEqual(expectedAction);
  });


  // it('should logIn actions', async () => {
  //   let data = {
  //     "mobilePhone": "0989414660"
  //     , "password": "pass sai"
  //     , "rememberme": false
  //   };
  //   const expectedAction = {
  //     type: types.LOGIN_FAIL
  //     , err: 'Unauthorized'
  //   };
  //   const fn = authActions.logIn(data);
  //   expect(fn).toBeA('function');
  //   const dispatch = expect.createSpy();
  //   const getState = () => ({ cart: Map({id: null}) });
  //   await fn(dispatch, getState);
  //
  //   expect(dispatch).toHaveBeenCalledWith(expectedAction);
  // });

/*
  it('should logIn actions', async () => {
    let data = {
      "mobilePhone": "0989414660"
      , "password": "123"
    };
    const expectedAction = {
      type: types.LOGIN_SUCCESS
      , data: {
        "id": 4,
        "name": "test",
        "mobilePhone": "0989414660",
        "avatarUrl": "http://api.tocu.vn/image/egg-avatars/egg16.jpg",
        "isVerifyMobilePhone": false,
        "level": 1,
        "company": null,
        "address": null,
        "district": "Sơn Dương",
        "districtIsUrban": false,
        "city": "Tuyên Quang",
        "NoteId": null,
        "createdAt": "2015-08-03T00:51:23.878Z",
        "updatedAt": "2015-08-03T00:51:23.878Z",
        "access_token": "b52cg0sanfkm2ke57msvq4gl9j72gce5jcto1736nsjv43ccmo5r",
        "expires_in": 86400,
        "_ts": "2015-09-02T15:00:01.772Z"
      }
    };
    const fn = authActions.logIn(data);
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy();
    const getState = () => ({ state: 'test' });
    await fn(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });
*/

  it('should logIn load actions', () => {
    const expectedAction = {
      type: types.LOGIN_LOAD
    };
    expect(authActions.logInLoad()).toEqual(expectedAction);
  });

  it('should logIn success actions', () => {
    let data = {
      "id": 4,
      "name": "test",
      "mobilePhone": "0989414660",
      "avatarUrl": "http://api.tocu.vn/image/egg-avatars/egg16.jpg",
      "isVerifyMobilePhone": false,
      "level": 1,
      "company": null,
      "address": null,
      "district": "Sơn Dương",
      "districtIsUrban": false,
      "city": "Tuyên Quang",
      "NoteId": null,
      "createdAt": "2015-08-03T00:51:23.878Z",
      "updatedAt": "2015-08-03T00:51:23.878Z",
      "access_token": "b52cg0sanfkm2ke57msvq4gl9j72gce5jcto1736nsjv43ccmo5r",
      "expires_in": 86400,
      "_ts": "2015-09-02T15:00:01.772Z"
    };
    const expectedAction = {
      type: types.LOGIN_SUCCESS
      , data
    };
    expect(authActions.logInSuccess(data)).toEqual(expectedAction);
  });

  it('should logIn Fail actions', () => {
    let err = {
      message: "Số điện thoại hoặc mật khẩu ko đúng"
    };
    const expectedAction = {
      type: types.LOGIN_FAIL
      , err
    };
    expect(authActions.logInFail(err)).toEqual(expectedAction);
  });


  // it('should logOut actions', async () => {
  //   const fn = authActions.logOut();
  //   expect(fn).toBeA('function');
  //   const dispatch = expect.createSpy();
  //   const getState = () => ({ auth: {access_token: 'ebefqbtrqvrvns0ug5mrn8sp6s0505hb39iggcilqjmr8jp64f9q'}});
  //   await fn(dispatch, getState);
  //
  //   // expect(dispatch).toHaveBeenCalledWith({ type: types.LOGOUT_SUCCESS, data: true});
  //   expect(dispatch).toHaveBeenCalledWith({ type: types.LOGOUT_FAIL, err: {}});
  // });

  it('should logOut load actions', () => {
    const expectedAction = {
      type: types.LOGOUT_LOAD
    };
    expect(authActions.logOutLoad()).toEqual(expectedAction);
  });

  it('should logOut success actions', () => {
    let data = true;
    const expectedAction = {
      type: types.LOGOUT_SUCCESS
      , data
    };
    expect(authActions.logOutSuccess(data)).toEqual(expectedAction);
  });

  it('should logOut Fail actions', () => {
    let err = {};
    const expectedAction = {
      type: types.LOGOUT_FAIL
      , err
    };
    expect(authActions.logOutFail(err)).toEqual(expectedAction);
  });


  it('should code load actions', () => {
    const expectedAction = {
      type: types.GET_CODE_LOAD
    }
    expect(authActions.codeLoad()).toEqual(expectedAction);
  });

  it('should code success actions', () => {
    const data = {
      "CodeResult": "103",
      "ErrorMessage": "Balance not enough to send message"
    };
    const expectedAction = {
      type: types.GET_CODE_SUCCESS
      , data
    }
    expect(authActions.codeSuccess(data)).toEqual(expectedAction);
  });

  it('should code fail actions', () => {
    const err = {"message": "Đã gửi tối đa 5 lần tới số điện thoại xxxxxxxxxx" };
    const err2 = { message: 'Số điện thoại xxxxxxxxxx đã xác thực' };
    const expectedAction = {
      type: types.GET_CODE_FAIL
      , err
    }
    const expectedAction2 = {
      type: types.GET_CODE_FAIL
      , err: err2
    }
    expect(authActions.codeFail(err)).toEqual(expectedAction);
    expect(authActions.codeFail(err2)).toEqual(expectedAction2);
  });


  it('should Verify actions', async () => {
    // const code = '32352k';
    // const fn = authActions.getVerify({code});
    // expect(fn).toBeA('function');
    // const dispatch = expect.createSpy();
    // const getState = () => ({ auth: Immutable.fromJS({ user: {access_token: 'b52cg0sanfkm2ke57msvq4gl9j72gce5jcto1736nsjv43ccmo5r'}})});
    // await fn(dispatch, getState);
    // expect(dispatch).toHaveBeenCalledWith({ type: types.VERIFY_FAIL, err: { message: 'Mã xác thực không đúng' }}); // nếu token đúng và code sai trả về như hiện tại


    const code2 = '32352k';
    const fn2 = authActions.getVerify({code: code2});
    expect(fn2).toBeA('function');
    const dispatch2 = expect.createSpy();
    const getState2 = () => ({ auth: Immutable.fromJS({ user: {access_token: 'b52cg0sanfkm2ke57msvq4gl9j72gce5jcto1736nsjv43ccmo5r'}})});
    await fn2(dispatch2, getState2);
    expect(dispatch2).toHaveBeenCalledWith({ type: types.VERIFY_FAIL, err: "Forbidden"}); // nếu token sai trả về "Forbidden"
  });

  it('should Verify load actions', () => {
    const expectedAction = {
      type: types.VERIFY_LOAD
    };
    expect(authActions.verifyLoad()).toEqual(expectedAction);
  });

  it('should Verify success actions', () => {
    const data = true;
    const expectedAction = {
      type: types.VERIFY_SUCCESS
      , data
    };
    expect(authActions.verifySuccess(data)).toEqual(expectedAction);
  });

  it('should Verify fail actions', () => {
    const err = { message: 'Mã xác thực không đúng' };
    const err2 = "Forbidden";
    const expectedAction = {
      type: types.VERIFY_FAIL
      , err
    };
    const expectedAction2 = {
      type: types.VERIFY_FAIL
      , err: err2
    };
    expect(authActions.verifyFail(err)).toEqual(expectedAction);
    expect(authActions.verifyFail(err2)).toEqual(expectedAction2);
  });

});
