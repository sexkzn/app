import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import first from 'lodash/first';

import { fetchData } from '../actions/fetch';
import { makeFetchDatasourceByIdSelector } from '../selectors/fetch';
import Api from '../api';

const PAGE_ID = 'editPage';

const useEditProfilePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const datasource = useSelector(makeFetchDatasourceByIdSelector(PAGE_ID));

  const getEditProfile = () =>
    dispatch(
      fetchData({
        id: PAGE_ID,
        url: Api.girl,
        mappingOptions: {
          id,
        },
      })
    );

  useEffect(() => {
    getEditProfile();
  }, []);

  return {
    profile: first(datasource),
  };
};

export default useEditProfilePage;
