import { takeEvery, call, put } from 'redux-saga/effects';

import { setUser, setUserLoading } from '../actions/user';
import { fetchSaga } from './fetchSaga';
import { GET_USER } from '../constants/user';
import Api from '../api';

function* getUser() {
  try {
    yield put(setUserLoading(true));
    const config = yield call(fetchSaga, Api.config);

    yield put(setUser(config));
  } catch (e) {
    console.error(e);
  } finally {
    yield put(setUserLoading(false));
  }
}

export default [takeEvery(GET_USER, getUser)];
