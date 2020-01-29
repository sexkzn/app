import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../actions/fetch';
import Api from '../../api';

const useGettingCaptcha = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [captcha, setCaptcha] = useState(null);

  useEffect(() => {
    dispatch(
      fetchData({
        url: Api.captcha,
        onSuccess: (image) => {
          setCaptcha(image);
          setLoading(false);
        },
      })
    );
  }, []);

  return {
    loading,
    captcha,
  };
};

export default useGettingCaptcha;
