import { createSelector } from 'reselect';

const fetchSelector = (state) => state.fetch;

export const makeFetchByIdSelector = (id) =>
  createSelector(
    fetchSelector,
    (fetch) => fetch[id] || {}
  );

export const makeFetchDatasourceByIdSelector = (id) =>
  createSelector(
    makeFetchByIdSelector(id),
    (fetchState) => fetchState.datasource || []
  );
