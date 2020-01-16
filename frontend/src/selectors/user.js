import { createSelector } from 'reselect';

export const userSelector = (state) => state.user;

export const userNameSelector = () =>
  createSelector(
    userSelector,
    (userState) => userState.username
  );

export const userStatsSelector = () =>
  createSelector(
    userSelector,
    (userState) => userState.stats
  );

export const userBalanceSelector = () =>
  createSelector(
    userSelector,
    (userState) => userState.balance
  );
