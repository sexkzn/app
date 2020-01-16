import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchData } from '../actions/fetch';
import { makeFetchDatasourceByIdSelector } from '../selectors/fetch';
import Api from '../api';

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
    onDelete,
  };
};

export default useProfilesListPage;
