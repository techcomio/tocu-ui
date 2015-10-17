import {
	BOX_COUNT
	, BOX_LOAD
  , BOX_LOAD_SUCCESS
  , BOX_LOAD_FAIL
  , BOX_ID_LOAD
  , BOX_ID_LOAD_SUCCESS
  , BOX_ID_LOAD_FAIL
  , BOX_ID_PUSH_LOAD
  , BOX_ID_PUSH_SUCCESS
  , BOX_ID_PUSH_FAIL
  , BOX_ID_LOAD_INFO
  , BOX_ID_LOAD_INFO_SUCCESS
  , BOX_ID_LOAD_INFO_FAIL
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
  case BOX_LOAD:
		return state.merge({
			boxsLoad: true
			, boxs: List()
			, boxsErr: null
		});
  case BOX_LOAD_SUCCESS:
		return state.merge({
			boxsLoad: false
			, boxs: Immutable.fromJS(action.data)
			, boxsErr: null
		});
  case BOX_LOAD_FAIL:
		return state.merge({
			boxsLoad: false
			, boxs: List()
			, boxsErr: action.err
		});
	case BOX_ID_LOAD:
		return state.merge({
			boxsIdLoad: true
			, boxsId: List()
			, pagination: Map({hasMore: false, skip: 0})
			, boxsIdErr: null
		});
	case BOX_ID_LOAD_SUCCESS:
		return state.merge({
			boxsIdLoad: false
			, boxsId: Immutable.fromJS(action.data)
			, pagination: Map({hasMore: action.hasMore, skip: action.skip})
			, boxsIdErr: null
		});
	case BOX_ID_LOAD_FAIL:
		return state.merge({
			boxsIdLoad: false
			, boxsId: List()
			, pagination: Map({hasMore: false, skip: action.skip})
			, boxsIdErr: action.err
		});
	case BOX_ID_PUSH_LOAD:
		return state.merge({
			boxsIdLoad: true
			, pagination: Map({hasMore: false, skip: 0})
			, boxsIdErr: null
		});
	case BOX_ID_PUSH_SUCCESS:
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
	case BOX_ID_LOAD_INFO:
		return state.merge({
			boxIdInfoLoad: true
			, boxIdInfo: Map()
			, boxIdInfoErr: null
		});
	case BOX_ID_LOAD_INFO_SUCCESS:
		return state.merge({
			boxIdInfoLoad: false
			, boxIdInfo: Map(action.data)
			, boxIdInfoErr: null
		});
	case BOX_ID_LOAD_INFO_FAIL:
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
