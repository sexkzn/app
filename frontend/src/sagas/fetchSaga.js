import { call, put, takeEvery } from 'redux-saga/effects';
import has from 'lodash/has';
import pathToRegexp from 'path-to-regexp';

import { FETCH } from '../constants/fetch';
import {
  setDatasource,
  setFetchLoading,
  setFetchError,
} from '../actions/fetch';
import request from '../utils/request';

export function compileUrl(url, mappingOptions = {}) {
  return pathToRegexp.compile(url)(mappingOptions);
}

export function* fetchData({ payload }) {
  const { id } = payload;

  try {
    const { url, options, mappingOptions, onSuccess } = payload;
    yield setLoading(id, true);
    const response = yield call(fetchSaga, url, options, mappingOptions);

    const content = has(response, 'content') ? response.content : response;

    if (id) yield put(setDatasource({ id, content }));
    if (typeof onSuccess === 'function') onSuccess(content);
  } catch (e) {
    const { onError } = payload;

    if (id) yield put(setFetchError(id, e));
    if (typeof onError === 'function') onError(e);
    console.error(e);
  } finally {
    yield setLoading(id, false);
  }
}

export function* fetchSaga(url, options, mappingOptions = {}) {
  try {
    const datasource = yield call(
      request,
      compileUrl(url, mappingOptions),
      options
    );

    return datasource;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export function* setLoading(id, loading) {
  if (id) {
    yield put(setFetchLoading(id, loading));
  }
}

export default [takeEvery(FETCH, fetchData)];
