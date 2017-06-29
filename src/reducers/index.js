import { combineReducers } from 'redux';
import * as loginReducer from './loginReducer';

export default combineReducers(Object.assign(
  loginReducer,
));
