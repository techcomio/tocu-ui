import {
	BOX_LOAD
	, BOX_LOAD_SUCCESS
	, BOX_LOAD_FAIL
	, BOX_ID_LOAD
	, BOX_ID_LOAD_SUCCESS
	, BOX_ID_LOAD_FAIL
} from '../actions/actionsTypes';
import Immutable, { Map, List } from 'immutable';

const initialState = new Immutable.fromJS({
  boxLoad: false
  , boxIdLoad: false
	, boxs: List()
	, boxId: Map()
	, boxErr: null
	, boxIdErr: null
});

export default function counter(state = initialState, action) {
  switch (action.type) {
  case BOX_LOAD:
		return state.merge({
			boxLoad: true
			, boxs: Map()
			, boxErr: null
		});
  case BOX_LOAD_SUCCESS:
		return state.merge({
			boxLoad: false
			, boxs: Immutable.fromJS(action.data)
			, boxErr: null
		});
  case BOX_LOAD_FAIL:
		return state.merge({
			boxLoad: false
			, boxs: Map()
			, boxErr: action.err
		});
	case BOX_ID_LOAD:
		return state.merge({
			boxIdLoad: true
			, boxId: Map()
			, boxIdErr: null
		});
	case BOX_ID_LOAD_SUCCESS:
		return state.merge({
			boxIdLoad: false
			, boxId: Map(action.data)
			, boxIdErr: null
		});
	case BOX_ID_LOAD_FAIL:
		return state.merge({
			boxIdLoad: false
			, boxId: Map()
			, boxIdErr: action.err
		});
  default:
    return state;
  }
}
