import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import map from 'lodash/map';

import { fetchData } from '../../../actions/fetch';
import Api from '../../../api';

const useSendingPictures = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

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
  const goBack = () => history.goBack();

  return {
    onSendPictures,
    onSendVerifyPictures,
    goBack,
  };
};

export default useSendingPictures;