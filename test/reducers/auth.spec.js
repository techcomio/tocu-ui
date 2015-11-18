import { expect } from 'chai';
import auth from '../../src/universal/reducers/auth';
import * as types from '../../src/universal/actions/actionsTypes';
import { fromJS, Map, List } from 'immutable';


describe('reducers auth', () => {
  it('should handle load auth', () => {
    const data = { id: 1, name: 'ngthorg'}
    expect(
      auth(fromJS({}), {
        type: types.LOAD_AUTH
        , data
      })
    ).to.equal(fromJS({
      user: data
    }));
  });

  it('should handle create auth load', () => {
    expect(
      auth(fromJS({createLoad: false}), {
        type: types.CREATE_AUTH_LOAD
      })
    ).to.equal(fromJS({
      createLoad: true
      , createErr: null
      , user: Map()
    }));
  });

  // it('should handle create auth success', () => {
  //   let data = { id: 1, name: "dev" };
  //   expect(
  //     auth(fromJS({createLoad: true}), {
  //       type: types.CREATE_AUTH_SUCCESS
  //       , data
  //     })
  //   ).to.equal(fromJS({
  //     createLoad: false
  //     , createErr: null
  //     , user: Map(data)
  //   }));
  // });

  it('should handle create auth fail', () => {
    let err = {message: "Số điện thoại đã tồn tại."};
    expect(
      auth(fromJS({createLoad: true}), {
        type: types.CREATE_AUTH_FAIL
        , err
      })
    ).to.equal(fromJS({
      createLoad: false
      , createErr: Map(err)
      , user: Map()
    }));
  });


  it('should handle logIn load', () => {
    expect(
      auth(fromJS({loginLoad: false}), {
        type: types.LOGIN_LOAD
      })
    ).to.equal(fromJS({
      loginLoad: true
      , loginErr: null
      , user: Map()
    }));
  });

  // it('should handle logIn success', () => {
  //   let data = {id: 1, name: 'dev'};
  //   expect(
  //     auth(fromJS({loginLoad: true}), {
  //       type: types.LOGIN_SUCCESS
  //       , data
  //     })
  //   ).to.equal(fromJS({
  //     loginLoad: false
  //     , loginErr: null
  //     , user: Map(data)
  //   }));
  // });

  it('should handle logIn fail', () => {
    let err = 'Unauthorized';
    expect(
      auth(fromJS({loginLoad: true}), {
        type: types.LOGIN_FAIL
        , err
      })
    ).to.equal(fromJS({
      loginLoad: false
      , loginErr: err
      , user: Map()
    }));
  });


  it('should handle logOut load', () => {
    let user = {id: 1, name: 'dev'};
    expect(
      auth(fromJS({user, logoutLoad: false}), {
        type: types.LOGOUT_LOAD
      })
    ).to.equal(fromJS({
      user
      , logoutLoad: true
      , logoutErr: null
    }));
  });

  // it('should handle logOut success', () => {
  //   expect(
  //     auth(fromJS({}), {
  //       type: types.LOGOUT_SUCCESS
  //     })
  //   ).to.equal(fromJS({
  //     logoutLoad: false
  //     , logoutErr: null
  //     , user: Map()
  //   }));
  // });

  it('should handle logOut fail', () => {
    let err = 'Unauthorized';
    expect(
      auth(fromJS({logoutLoad: true}), {
        type: types.LOGOUT_FAIL
        , err
      })
    ).to.equal(fromJS({
      logoutLoad: false
      , logoutErr: err
      , user: Map()
    }));
  });


  it('should handle getCode load', () => {
    expect(
      auth(fromJS({verifyLoad: false}), {
        type: types.GET_CODE_LOAD
      })
    ).to.equal(fromJS({
      verifyLoad: false
      , getcodeLoad: true
      , getcodeErr: null
      , verifyErr: null
    }));
  });

  it('should handle getCode success', () => {
    expect(
      auth(fromJS({verifyLoad: false}), {
        type: types.GET_CODE_SUCCESS
      })
    ).to.equal(fromJS({
      verifyLoad: false
      , getcodeLoad: false
      , getcodeErr: null
    }));
  });

  it('should handle getCode fail', () => {
    const err = { "message": "Đã gửi tối đa 5 lần tới số điện thoại xxxxxxxxxx" };
    const err2 = { message: 'Số điện thoại xxxxxxxxxx đã xác thực' };

    expect(
      auth(fromJS({verifyLoad: false}), {
        type: types.GET_CODE_FAIL
        , err
      })
    ).to.equal(fromJS({
      verifyLoad: false
      , getcodeLoad: false
      , getcodeErr: err
    }));

    expect(
      auth(fromJS({verifyLoad: false}), {
        type: types.GET_CODE_FAIL
        , err: err2
      })
    ).to.equal(fromJS({
      verifyLoad: false
      , getcodeLoad: false
      , getcodeErr: err2
    }));
  });


  it('should handle Verify load', () => {
    expect(
      auth(fromJS({verifyErr: { "message": "Mã xác thực không đúng" }, getcodeLoad: false}), {
        type: types.VERIFY_LOAD
      })
    ).to.equal(fromJS({
      verifyErr: null
      , getcodeLoad: false
      , verifyLoad: true
      , getcodeErr: null
    }));
  });

  it('should handle Verify load', () => {
    const user = {id: 1, name: 'dev', 'isVerifyMobilePhone': false};
    expect(
      auth(fromJS({user}), {
        type: types.VERIFY_SUCCESS
      })
    ).to.equal(fromJS({
      user: {id: 1, name: 'dev', 'isVerifyMobilePhone': true}
      , verifyLoad: false
      , verifyErr: null
    }));
  });

  it('should handle Verify fail', () => {
    const err = { "message": "Mã xác thực không đúng" };
    expect(
      auth(fromJS({getcodeLoad: false}), {
        type: types.VERIFY_FAIL
        , err
      })
    ).to.equal(fromJS({
      getcodeLoad: false
      , verifyLoad: false
      , verifyErr: err
    }));
  });

});
