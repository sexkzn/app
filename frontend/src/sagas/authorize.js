import { takeEvery, call, put } from 'redux-saga/effects';
import { getUser } from "../actions/user";

import Api from '../api';
import { fetchSaga } from './fetchSaga';
import { LOGIN } from '../constants/authorize';

export function* login({ payload }) {
  try {
    const { username, password, onSuccess } = payload;
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    yield call(fetchSaga, Api.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    });

    onSuccess();
    yield put(getUser());
  } catch (e) {

  }
}

export default [takeEvery(LOGIN, login)];
