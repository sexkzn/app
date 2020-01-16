import { takeEvery, call, put } from 'redux-saga/effects';

import { setUser } from '../actions/user';
import { fetchSaga } from './fetchSaga';
import { GET_USER } from '../constants/user';
import Api from '../api';

function* getUser() {
  const config = yield call(fetchSaga, Api.config);

  yield put(setUser(config));
}

export default [takeEvery(GET_USER, getUser)];
