import {
	BOX_COUNT
	, GET_BOX_REQUEST
  , GET_BOX
  , GET_BOX_FAIL
  , GET_BOX_ID_REQUEST
  , GET_BOX_ID
  , GET_BOX_ID_FAIL
  , BOX_ID_PUSH_REQUEST
  , BOX_ID_PUSH
  , BOX_ID_PUSH_FAIL
  , GET_BOXID_INFO_REQUEST
  , GET_BOXID_INFO
  , GET_BOXID_INFO_FAIL
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  boxsLoad: false
  , boxsIdLoad: false
  , boxIdInfoLoad: false
	, boxs: List()
	, boxsId: List()
	, boxIdInfo: Map()
  , pagination: Map({hasMore: false, skip: 0})
	, boxsErr: null
	, boxsIdErr: null
	, boxIdInfoErr: null
	, boxCount: 0
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case GET_BOX_REQUEST:
		return state.merge({
			boxsLoad: true
			, boxs: List()
			, boxsErr: null
		});
  case GET_BOX:
		return state.merge({
			boxsLoad: false
			, boxs: Immutable.fromJS(action.data)
			, boxsErr: null
		});
  case GET_BOX_FAIL:
		return state.merge({
			boxsLoad: false
			, boxs: List()
			, boxsErr: action.err
		});
	case GET_BOX_ID_REQUEST:
		return state.merge({
			boxsIdLoad: true
			, boxsId: List()
			, pagination: Map({hasMore: false, skip: 0})
			, boxsIdErr: null
		});
	case GET_BOX_ID:
		return state.merge({
			boxsIdLoad: false
			, boxsId: Immutable.fromJS(action.data)
			, pagination: Map({hasMore: action.hasMore, skip: action.skip})
			, boxsIdErr: null
		});
	case GET_BOX_ID_FAIL:
		return state.merge({
			boxsIdLoad: false
			, boxsId: List()
			, pagination: Map({hasMore: false, skip: action.skip})
			, boxsIdErr: action.err
		});
	case BOX_ID_PUSH_REQUEST:
		return state.merge({
			boxsIdLoad: true
			, pagination: Map({hasMore: false, skip: 0})
			, boxsIdErr: null
		});
	case BOX_ID_PUSH:
		return state.merge({
			boxsIdLoad: false
			, boxsId: state.get('boxsId').toJS().concat(action.data)
			, pagination: Map({hasMore: action.hasMore, skip: action.skip})
			, boxsIdErr: null
		});
	case BOX_ID_PUSH_FAIL:
		return state.merge({
			boxsIdLoad: false
			, boxsId: List()
			, pagination: Map({hasMore: false, skip: action.skip})
			, boxsIdErr: action.err
		});
	case GET_BOXID_INFO_REQUEST:
		return state.merge({
			boxIdInfoLoad: true
			, boxIdInfo: Map()
			, boxIdInfoErr: null
		});
	case GET_BOXID_INFO:
		return state.merge({
			boxIdInfoLoad: false
			, boxIdInfo: Map(action.data)
			, boxIdInfoErr: null
		});
	case GET_BOXID_INFO_FAIL:
		return state.merge({
			boxIdInfoLoad: false
			, boxIdInfo: Map()
			, boxIdInfoErr: action.err
		});
	case BOX_COUNT:
		return state.merge({
			boxCount: action.data
		});
  default:
    return state;
  }
}
