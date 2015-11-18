import { expect } from 'chai';
import product from '../../src/universal/reducers/product';
import * as types from '../../src/universal/actions/actionsTypes';
import { fromJS, Map, List } from 'immutable';


describe('reducers product', () => {
  it('should handle product Count', () => {
    const data = 12;
    expect(
      product(fromJS({}), {
        type: types.PRODUCT_COUNT
        , data
      })
    ).to.equal(fromJS({
      productCount: data
    }));
  });

  it('should handle product Load', () => {
    const data = 12;
    expect(
      product(fromJS({}), {
        type: types.PRODUCT_LOAD
      })
    ).to.equal(fromJS({
      productLoad: true
      , product: List()
      , pagination: Map({hasMore: false, skip: 0})
      , productErr: null
    }));
  });

  it('should handle product load success', () => {
    const data = [{id: 1, name: 'Chân váy'}];
    const hasMore = 0;
    const skip = 15;
    expect(
      product(fromJS({}), {
        type: types.PRODUCT_LOAD_SUCCESS
        , data
        , hasMore
        , skip
      })
    ).to.equal(fromJS({
      productLoad: false
      , product: data
      , pagination: Map({hasMore, skip})
      , productErr: null
    }));
  });

  it('should handle product load fail', () => {
    const err = { message: 'Internal server error', status: 500 };
    const hasMore = 0;
    const skip = 15;
    expect(
      product(fromJS({}), {
        type: types.PRODUCT_LOAD_FAIL
        , err
        , hasMore
        , skip
      })
    ).to.equal(fromJS({
      productLoad: false
      , product: List()
      , pagination: Map({hasMore: false, skip})
      , productErr: err
    }));
  });

  it('should handle product push', () => {
    expect(
      product(fromJS({}), {
        type: types.PRODUCT_PUSH
      })
    ).to.equal(fromJS({
      productLoad: true
      , pagination: Map({hasMore: false, skip: 0})
      , productErr: null
    }));
  });

  it('should handle product push success', () => {
    const data = [{id: 1, name: 'Chân váy'}];
    const hasMore = 0;
    const skip = 15;
    expect(
      product(fromJS({product: []}), {
        type: types.PRODUCT_PUSH_SUCCESS
        , data
        , hasMore
        , skip
      })
    ).to.equal(fromJS({
      productLoad: false
      , product: data
      , pagination: Map({hasMore, skip})
      , productErr: null
    }));
  });

  // it('should handle productID load', () => {
  //   expect(
  //     box(fromJS({}), {
  //       type: types.PRODUCT_ID_LOAD
  //     })
  //   ).to.equal(fromJS({
  //     boxLoad: true
	// 		, boxs: Map()
	// 		, boxErr: null
  //   }));
  // });

});
