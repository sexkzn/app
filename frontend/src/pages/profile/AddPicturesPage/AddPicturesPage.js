import React from 'react';

import useSendingPictures from './useSendingPictures';
import Title from '../../../components/snippets/Title';
import { Ul, Li } from '../../../components/snippets/Ul';
import DropZone from '../../../components/controls/DropZone';
import Button from '../../../components/snippets/Button';

function AddPicturesPage(props) {
  const { onSendPictures, onSendVerifyPictures, goBack } = useSendingPictures();

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
        <DropZone
          onChange={onSendPictures}
          className="add-pictures-page__dropzone"
        />
      </div>

      <div className="add-pictures-page__item">
        <Ul title="Загузка фото для проверки">
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
        <Button color="primary" onClick={goBack}>
          Вернуться назад
        </Button>
      </div>
    </div>
  );
}

export default AddPicturesPage;
