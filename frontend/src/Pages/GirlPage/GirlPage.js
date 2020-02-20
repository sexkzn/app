import React, { useState } from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import useGirlsPage from '../../hooks/useGirlPage';
import Seo from '../../components/Seo';
import Title from '../../components/Title';
import Loader from '../../components/Loader';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Ul, Li } from '../../components/Ul';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
};

function GirlPage() {
  const { data } = useGirlsPage();
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = map(
    get(data, 'photos', []),
    (url) => `${process.env.PUBLIC_URL}${url}`
  );
  const items = [
    {
      label: 'Главная',
      link: '/',
    },
    {
      label: get(data, 'name'),
    },
  ];
  const nextSrc = photos[(photoIndex + 1) % photos.length];
  const prevSrc = photos[(photoIndex + photos.length - 1) % photos.length];

  return [
    <Seo
      title={`Проститутка ${get(
        data,
        'name',
        ''
      )}. Портал для поиска проституток в Казани. Девочки на разный вкус и кошелек готовы обслужить Вас в любое время! dosugkzn.xyz`}
      description={get(data, 'description', '')}
    />,
    data ? (
      <div className="girl-page">
        <Breadcrumbs items={items} />
        <Title className="girl-page__title">{get(data, 'name')}</Title>
        <div className="girl-page__phone">{get(data, 'phoneNumber')}</div>
        <div className="girl-page__main">
          <Slider {...settings}>
            {map(photos, (photo, index) => (
              <div
                key={index}
                className="slick__item"
                onClick={() => {
                  setPhotoIndex(index);
                  setOpen(!isOpen);
                }}
              >
                <img src={photo} alt="" />
              </div>
            ))}
          </Slider>
          <div className="girl-page__description">
            {get(data, 'description')}
          </div>
          <div className="girl-page__services">
            <div className="girl-page__main-info girl-main-info">
              <div className="girl-main-info__title">Описание:</div>
              <Ul>
                <Li>Город: Казань</Li>
                <Li>Район: Авиастроительный</Li>
                <Li>Возраст: 22</Li>
                <Li>Рост: 188</Li>
                <Li>Вес: 65</Li>
                <Li>Грудь: 3</Li>
                <Li>Цвет волос: Русая</Li>
                <Li>Внешность: Славянская</Li>
                <Li>Национальность: Русская</Li>
              </Ul>
            </div>
            <div className="girl-page__costs girl-costs">
              <div className="girl-costs__title">Стоимость</div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Loader classNames="girl-page__loader" />
    ),
    isOpen && (
      <Lightbox
        mainSrc={photos[photoIndex]}
        nextSrc={nextSrc}
        prevSrc={prevSrc}
        onCloseRequest={() => setOpen(!isOpen)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % photos.length)
        }
      />
    ),
  ];
}

export default GirlPage;
