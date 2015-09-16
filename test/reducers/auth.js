import expect from 'expect';
import auth from '../../src/shared/reducers/auth';
import * as types from '../../src/shared/actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

describe('reducers auth', () => {
  it('should handle create auth load', () => {
    expect(
      auth(Immutable.fromJS({createLoad: false}), {
        type: types.CREATE_AUTH_LOAD
      })
    ).toEqual(Immutable.fromJS({
      createLoad: true
      , createErr: null
      , user: Map({})
    }));
  });

  // it('should handle create auth success', () => {
  //   let data = { id: 1, name: "dev" };
  //   expect(
  //     auth(Immutable.fromJS({createLoad: true}), {
  //       type: types.CREATE_AUTH_SUCCESS
  //       , data
  //     })
  //   ).toEqual(Immutable.fromJS({
  //     createLoad: false
  //     , createErr: null
  //     , user: Map(data)
  //   }));
  // });

  it('should handle create auth fail', () => {
    let err = {message: "Số điện thoại đã tồn tại."};
    expect(
      auth(Immutable.fromJS({createLoad: true}), {
        type: types.CREATE_AUTH_FAIL
        , err
      })
    ).toEqual(Immutable.fromJS({
      createLoad: false
      , createErr: Map(err)
      , user: Map()
    }));
  });


  it('should handle logIn load', () => {
    expect(
      auth(Immutable.fromJS({loginLoad: false}), {
        type: types.LOGIN_LOAD
      })
    ).toEqual(Immutable.fromJS({
      loginLoad: true
      , loginErr: null
      , user: Map()
    }));
  });
/*
  it('should handle logIn success', () => {
    let data = {id: 1, name: 'dev'};
    expect(
      auth(Immutable.fromJS({loginLoad: true}), {
        type: types.LOGIN_SUCCESS
        , data
      })
    ).toEqual(Immutable.fromJS({
      loginLoad: false
      , loginErr: null
      , user: Map(data)
    }));
  });
*/
  it('should handle logIn fail', () => {
    let err = 'Unauthorized';
    expect(
      auth(Immutable.fromJS({loginLoad: true}), {
        type: types.LOGIN_FAIL
        , err
      })
    ).toEqual(Immutable.fromJS({
      loginLoad: false
      , loginErr: err
      , user: Map()
    }));
  });


  it('should handle logOut load', () => {
    let user = {id: 1, name: 'dev'};
    expect(
      auth(Immutable.fromJS({user, logoutLoad: false}), {
        type: types.LOGOUT_LOAD
      })
    ).toEqual(Immutable.fromJS({
      user
      , logoutLoad: true
      , logoutErr: null
    }));
  });
/*
  it('should handle logOut success', () => {
    expect(
      auth(Immutable.fromJS({}), {
        type: types.LOGOUT_SUCCESS
      })
    ).toEqual(Immutable.fromJS({
      logoutLoad: false
      , logoutErr: null
      , user: null
    }));
  });
*/
  it('should handle logOut fail', () => {
    let err = 'Unauthorized';
    expect(
      auth(Immutable.fromJS({logoutLoad: true}), {
        type: types.LOGOUT_FAIL
        , err
      })
    ).toEqual(Immutable.fromJS({
      logoutLoad: false
      , logoutErr: err
      , user: Map()
    }));
  });


  it('should handle getCode load', () => {
    expect(
      auth(Immutable.fromJS({verifyLoad: false}), {
        type: types.GET_CODE_LOAD
      })
    ).toEqual(Immutable.fromJS({
      verifyLoad: false
      , getcodeLoad: true
      , getcodeErr: null
      , verifyErr: null
    }));
  });

  it('should handle getCode success', () => {
    expect(
      auth(Immutable.fromJS({verifyLoad: false}), {
        type: types.GET_CODE_SUCCESS
      })
    ).toEqual(Immutable.fromJS({
      verifyLoad: false
      , getcodeLoad: false
      , getcodeErr: null
    }));
  });

  it('should handle getCode fail', () => {
    const err = { "message": "Đã gửi tối đa 5 lần tới số điện thoại xxxxxxxxxx" };
    const err2 = { message: 'Số điện thoại xxxxxxxxxx đã xác thực' };

    expect(
      auth(Immutable.fromJS({verifyLoad: false}), {
        type: types.GET_CODE_FAIL
        , err
      })
    ).toEqual(Immutable.fromJS({
      verifyLoad: false
      , getcodeLoad: false
      , getcodeErr: err
    }));

    expect(
      auth(Immutable.fromJS({verifyLoad: false}), {
        type: types.GET_CODE_FAIL
        , err: err2
      })
    ).toEqual(Immutable.fromJS({
      verifyLoad: false
      , getcodeLoad: false
      , getcodeErr: err2
    }));
  });


  it('should handle Verify load', () => {
    expect(
      auth(Immutable.fromJS({verifyErr: { "message": "Mã xác thực không đúng" }, getcodeLoad: false}), {
        type: types.VERIFY_LOAD
      })
    ).toEqual(Immutable.fromJS({
      verifyErr: null
      , getcodeLoad: false
      , verifyLoad: true
      , getcodeErr: null
    }));
  });

  it('should handle Verify load', () => {
    const user = {id: 1, name: 'dev', 'isVerifyMobilePhone': false};
    expect(
      auth(Immutable.fromJS({user}), {
        type: types.VERIFY_SUCCESS
      }).toJS()
    ).toEqual(Immutable.fromJS({
      user: {id: 1, name: 'dev', 'isVerifyMobilePhone': true}
      , verifyLoad: false
      , verifyErr: null
    }).toJS());
  });

  it('should handle Verify fail', () => {
    const err = { "message": "Mã xác thực không đúng" };
    expect(
      auth(Immutable.fromJS({getcodeLoad: false}), {
        type: types.VERIFY_FAIL
        , err
      })
    ).toEqual(Immutable.fromJS({
      getcodeLoad: false
      , verifyLoad: false
      , verifyErr: err
    }));
  });

});
