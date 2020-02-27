import { takeEvery, call, put } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

import { setUser, setUserLoading, setUserAuthorized } from '../actions/user';
import { fetchSaga } from './fetchSaga';
import { GET_USER } from '../constants/user';
import Api from '../api';

function* getUser() {
  try {
    yield put(setUserLoading(true));
    const config = yield call(fetchSaga, Api.config);

    if (isEmpty(config)) {
      yield put(setUserAuthorized(false));
    } else {
      yield put(setUser(config));
    }
  } catch (e) {
    console.error(e);
  } finally {
    yield put(setUserLoading(false));
  }
}

export default [takeEvery(GET_USER, getUser)];
