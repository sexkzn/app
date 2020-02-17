import React from 'react';
import map from 'lodash/map';
import Card from '../../../components/widgets/Card';

function MainPageList({ data }) {
  return (
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
                  img={avatar}
                  age={age}
                  weight={weight}
                  boobsSize={boobsSize}
                />
              </div>
            )
          )}
        </div>
      ))}
    </section>
  );
}

export default MainPageList;
