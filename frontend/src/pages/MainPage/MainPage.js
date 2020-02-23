import React from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import chunk from 'lodash/chunk';
import useMainPage from '../../hooks/useMainPage';
import Title from '../../components/Title';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import LoadMore from '../../components/LoadMore';

const ListSize = {
  MOBILE_AND_TABLE: 3,
  DESKTOP: 4,
};

function MainPage(props) {
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
          <section className="main-page__list">
            {map(data, (chunk, chunkIndex) => (
              <div key={chunkIndex} className="main-page__row">
                {map(
                  chunk,
                  (
                    {
                      id,
                      name,
                      avatar,
                      phoneNumber,
                      priceInOne,
                      priceInTwo,
                      priceInNight,
                      age,
                      weight,
                      boobsSize,
                    },
                    index
                  ) => (
                    <div key={index} className="main-page__col">
                      <Card
                        id={id}
                        title={name}
                        subtitle={phoneNumber}
                        priceOne={priceInOne}
                        priceTwo={priceInTwo}
                        priceNight={priceInNight}
                        img={`${process.env.PUBLIC_URL}${avatar}`}
                        age={age}
                        weight={weight}
                        boobsSize={boobsSize}
                      />
                    </div>
                  )
                )}
              </div>
            ))}
          </section>,
          <LoadMore loading={loading} visible={!pageIsOver} onLoad={getData} />,
        ]
      )}
    </div>
  );
}

export default MainPage;
