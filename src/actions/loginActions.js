import * as types from './types';

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
    dispatch(requestLogin(username));
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(receiveLogin('######TestToken######'));
        resolve();
      }, 2000);
    });
  };
}
