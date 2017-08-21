import { Actions } from 'react-native-router-flux';
import * as types from './types';

export function requestLogin() {
  return {
    type: types.REQUEST_LOGIN,
  };
}

export function receiveLogin(token) {
  return {
    type: types.RECEIVE_LOGIN,
    token,
  };
}

export function fetchLogin(username, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    return new Promise((resolve) => {
      setTimeout(() => {
        Actions.main();
        dispatch(receiveLogin('######TestToken######'));
        resolve();
      }, 2000);
    });
  };
}
