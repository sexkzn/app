import React, { useState } from 'react';
import map from 'lodash/map';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';

import useGettingPictures from './useGettingPictures';
import useSendingPictures from './useSendingPictures';
import Title from '../../../components/snippets/Title';
import { Ul, Li } from '../../../components/snippets/Ul';
import DropZone from '../../../components/controls/DropZone';
import Button from '../../../components/snippets/Button';
import { Path } from '../../../routes';

function AddPicturesPage() {
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { pictures, getData } = useGettingPictures();
  const { onSendPictures, onSendVerifyPictures, onDelete } = useSendingPictures(
    {
      getData,
    }
  );

  const nextSrc = pictures[(photoIndex + 1) % pictures.length];
  const prevSrc =
    pictures[(photoIndex + pictures.length - 1) % pictures.length];

  return (
    <div className="add-pictures-page">
      <div className="add-pictures-page__item">
        <Title>Добавление / редактирование фотографий</Title>
        <Ul title="Загрузка фото для анкеты">
          <Li>Минимальное количество фото - 3, максимальное 15</Li>
          <Li>Минимальное разрешение 400px</Li>
          <Li>Допускаются изображения только хорошего качества</Li>
          <Li>На фотографиях не должны быть водяные знаки или логотипы</Li>
          <Li>На фотографиях не должны быть видны гениталии</Li>
        </Ul>
        <div className="add-pictures-page__images">
          {map(pictures, ({ id, src }, index) => (
            <div
              className="add-pictures-page__image"
              key={index}
              onClick={() => {
                setPhotoIndex(index);
                setOpen(!isOpen);
              }}
            >
              <img src={src} width={300} alt={`image-${index}`} />
              <div className="add-pictures-page__image-action">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(id);
                  }}
                  color="link"
                >
                  Удалить
                </Button>
              </div>
            </div>
          ))}
        </div>
        <DropZone
          onChange={onSendPictures}
          className="add-pictures-page__dropzone"
        />
      </div>

      <div className="add-pictures-page__item">
        <Ul title="Загрузка фото для проверки">
          <Li>
            Для получения статуса "Проверено" необходимо загрузить проверочное
            фото с написанной на листе актуальной датой
          </Li>
          <Li>На фото должно быть явно видно, что это вы</Li>
          <Li>
            Также необходимо прикрепить пару фотографий, где хорошо видна фигура
          </Li>
        </Ul>
        <DropZone
          onChange={onSendVerifyPictures}
          className="add-pictures-page__dropzone"
        />
      </div>

      <div className="add-pictures-page__go-back">
        <NavLink className="button button--primary" to={Path.PROFILES}>
          Вернуться назад
        </NavLink>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={pictures[photoIndex]}
          nextSrc={nextSrc}
          prevSrc={prevSrc}
          onCloseRequest={() => setOpen(!isOpen)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + pictures.length - 1) % pictures.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % pictures.length)
          }
        />
      )}
    </div>
  );
}

export default AddPicturesPage;
