import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

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

  const updateProfile = (values) =>
    dispatch(
      fetchData({
        id: PAGE_ID,
        url: Api.girl,
        mappingOptions: {
          id,
        },
        options: {
          method: 'UPDATE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      })
    );

  useEffect(() => {
    getEditProfile();
  }, []);

  return {
    profile: datasource,
    updateProfile,
  };
};

export default useEditProfilePage;
