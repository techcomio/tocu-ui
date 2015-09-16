import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import box from './box';
import cart from './cart';
import auth from './auth';
import sale from './sale';
import order from './order';
import product from './product';
import location from './location';
import boxRequireAuth from './boxRequireAuth';

const rootReducer = combineReducers({
  auth
  , box
  , cart
  , sale
  , order
  , product
  , location
  , boxRequireAuth
  , form: formReducer
});

export default rootReducer;
