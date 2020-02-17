import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import isEmpty from 'lodash/isEmpty';
import { fetchData } from '../../../actions/fetch';
import { makeFetchByIdSelector } from '../../../selectors/fetch';
import Api from '../../../api';

const PAGE_ID = 'girls';

const useMainPage = () => {
  const dispatch = useDispatch();
  const [datasource, setDatasource] = useState([]);
  const [page, setPage] = useState(0);
  const [pageIsOver, setPageIsOver] = useState(false);
  const { loading } = useSelector(makeFetchByIdSelector(PAGE_ID));
  const isTablet = useMediaQuery({
    query: '(min-width: 767px) and (max-width: 1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const onSuccess = (data) => {
    setPage(page + 1);

    if (isEmpty(data.content)) {
      setPageIsOver(true);
    }

    setDatasource([...datasource, ...data.content]);
  };

  const getData = () => {
    dispatch(
      fetchData({
        id: PAGE_ID,
        url: Api.girls,
        mappingOptions: {
          page,
        },
        compareDatasource: true,
        onSuccess,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    datasource,
    pageIsOver,
    getData,
    isTablet,
    isMobile,
  };
};

export default useMainPage;
