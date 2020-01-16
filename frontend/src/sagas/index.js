import { all } from 'redux-saga/effects';

import fetchSaga from './fetchSaga';
import authorize from './authorize';
import user from './user';

export default () => {
  return function*() {
    yield all([...fetchSaga, ...authorize, ...user]);
  };
};
