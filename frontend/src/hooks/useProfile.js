import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultTo from 'lodash/defaultTo';

import { makeFetchDatasourceByIdSelector } from "../selectors/fetch";
import {fetchData} from "../actions/fetch";
import Api from "../api";

const FETCH_ID = 'profilePage';

const useProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector(makeFetchDatasourceByIdSelector(FETCH_ID));

  useEffect(() => {
    dispatch(
      fetchData({
        id: FETCH_ID,
        url: Api.profile,
      })
    );
  }, []);

  return {
    data: defaultTo(data, {}) ,
  };
};

export default useProfile;
