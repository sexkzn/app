import { takeEvery, call, put } from 'redux-saga/effects';
import isFunction from 'lodash/isFunction';

import { getUser } from '../actions/user';
import Api from '../api';
import { fetchSaga } from './fetchSaga';
import { LOGIN, LOGOUT } from '../constants/authorize';

export function* login({ payload }) {
  try {
    const { username, password, onSuccess } = payload;
    const body = `username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(password)}`;

    yield call(fetchSaga, Api.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    if (isFunction(onSuccess)) onSuccess();
    yield put(getUser());
  } catch (e) {
    console.error(e);
  }
}

export function* logout() {
  try {
    yield call(fetchSaga, Api.logout);

    window.location.href = Api.MAIN;
  } catch (e) {
    console.error(e);
  }
}

export default [takeEvery(LOGIN, login), takeEvery(LOGOUT, logout)];
