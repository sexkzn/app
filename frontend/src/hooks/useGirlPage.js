import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchData } from '../actions/fetch';
import Api from '../api';

const useGirlsPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      fetchData({
        url: Api.girl,
        mappingOptions: { id },
        onSuccess: setData,
        onError: setError,
      })
    );
  }, []);

  return {
    data,
  };
};

export default useGirlsPage;
