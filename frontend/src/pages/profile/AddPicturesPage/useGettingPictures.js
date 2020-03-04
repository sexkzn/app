import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import { fetchData } from '../../../actions/fetch';
import Api from '../../../api';

const useGettingPictures = () => {
  const [pictures, setPictures] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getData = () => {
    dispatch(
      fetchData({
        url: Api.GET_PICTURES,
        mappingOptions: { id },
        onSuccess: setPictures,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    pictures,
    getData,
  };
};

export default useGettingPictures;
