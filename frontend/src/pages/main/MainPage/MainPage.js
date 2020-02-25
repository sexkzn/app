import React from 'react';
import isEmpty from 'lodash/isEmpty';
import chunk from 'lodash/chunk';
import useMainPage from './useMainPage';
import Title from '../../../components/snippets/Title';
import MainPageList from './MainPageList';
import Loader from '../../../components/snippets/Loader';
import LoadMore from '../../../components/snippets/LoadMore';

const ListSize = {
  MOBILE_AND_TABLE: 2,
  DESKTOP: 4,
};

function MainPage() {
  const {
    datasource,
    loading,
    pageIsOver,
    getData,
    isMobile,
    isTablet,
  } = useMainPage();
  const data = chunk(
    datasource,
    isMobile || isTablet ? ListSize.MOBILE_AND_TABLE : ListSize.DESKTOP
  );

  return (
    <div className="main-page">
      <Title className="main-page__title">
        Проститутки и индивидуалки Казани
      </Title>
      {loading && isEmpty(datasource) ? (
        <Loader />
      ) : (
        [
          <MainPageList data={data} />,
          <LoadMore loading={loading} visible={!pageIsOver} onLoad={getData} />,
        ]
      )}
    </div>
  );
}

export default MainPage;
