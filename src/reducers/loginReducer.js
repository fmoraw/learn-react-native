import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  isLoggedIn: false,
};

export const loginReducer = createReducer(initialState, {
  [types.REQUEST_LOGIN]() {
    return Object.assign({}, initialState, {
      isFetching: true,
      isLoggedIn: false,
    });
  },
  [types.RECEIVE_LOGIN](state, action) {
    return Object.assign({}, state, {
      isFetching: false,
      isLoggedIn: true,
      token: action.token,
    });
  },
});

export default loginReducer;
