import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import pathToRegexp from "path-to-regexp";

import { fetchData } from '../actions/fetch';
import { makeFetchDatasourceByIdSelector } from '../selectors/fetch';
import Api from '../api';
import { Path } from "../routes";

const PAGE_ID = 'profilesList';

const useProfilesListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const profilesList = useSelector(makeFetchDatasourceByIdSelector(PAGE_ID));

  const getProfilesList = () =>
    dispatch(
      fetchData({
        id: PAGE_ID,
        url: Api.profiles,
      })
    );

  const onEdit = (id) => history.push(`/edit/${id}`);
  const onAddPictures = (id) => history.push(pathToRegexp.compile(Path.ADD_IMAGES)({ id }));

  const onDelete = (id) =>
    dispatch(
      fetchData({
        id: PAGE_ID,
        url: Api.profilesDelete,
        options: {
          method: 'DELETE',
        },
        mappingOptions: {
          id,
        },
        onSuccess: getProfilesList,
      })
    );

  useEffect(() => {
    getProfilesList();
  }, []);

  return {
    profilesList,
    onEdit,
    onAddPictures,
    onDelete,
  };
};

export default useProfilesListPage;
