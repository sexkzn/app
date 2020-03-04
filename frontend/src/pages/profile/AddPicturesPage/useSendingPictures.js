import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import map from 'lodash/map';

import { fetchData } from '../../../actions/fetch';
import Api from '../../../api';

const useSendingPictures = ({ getData }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const fetchFiles = (url, files) => {
    const formData = new FormData();
    map(files, (file) => formData.append('file', file));

    dispatch(
      fetchData({
        url,
        mappingOptions: {
          id: params.id,
        },
        options: {
          method: 'POST',
          body: formData,
        },
      })
    );
  };

  const onSendPictures = (files) => fetchFiles(Api.PICTURES, files);
  const onSendVerifyPictures = (files) =>
    fetchFiles(Api.VERIFY_PICTURES, files);
  const onDelete = (id) =>
    dispatch(
      fetchData({
        url: Api.PICTURES_DELETE,
        mappingOptions: {
          id,
        },
        options: {
          method: 'DELETE',
        },
        onSuccess: getData,
      })
    );

  return {
    onSendPictures,
    onSendVerifyPictures,
    onDelete,
  };
};

export default useSendingPictures;
