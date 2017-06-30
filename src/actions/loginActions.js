import * as types from './types';
import { Actions } from 'react-native-router-flux';

export function requestLogin(username) {
  return {
    type: types.REQUEST_LOGIN,
    username,
  };
}

export function receiveLogin(token) {
  return {
    type: types.RECEIVE_LOGIN,
    token,
  };
}

export function fetchLogin(username) {
  return (dispatch) => {
    Actions.main();
    /*
    dispatch(requestLogin(username));
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(receiveLogin('######TestToken######'));
        alert('loggedIn')
        resolve();
      }, 2000);
    });
    */
  };
}
