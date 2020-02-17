import React from 'react';

import useProfile from '../../../hooks/useProfile';
import { Ul, Li } from '../../../components/snippets/Ul';

function ProfilePage(props) {
  const { data } = useProfile();

  return (
    <div className="profile-page">
      <div className="profile-page__main">
        <Ul title="Виды размещения:">
          <Li>
            VIP <span className="profile-page--text-yellow">50р./день</span>
          </Li>
          <Li>
            Обычное <span className="profile-page__text-yellow">15р./день</span>
          </Li>
        </Ul>
        <p>VIP анкеты привлекают больше внимания.</p>
        <p>
          Для включения анкеты нажмите кнопку Сделать VIP или Сделать обычное
        </p>
        <p>
          Списание денег за размещение анкет 1 раз в сутки в 00:00. При
          включении анкет деньги списываются с учетом разницы во времени между
          включением и плановым списанием в полночь.
        </p>
        <p>
          При возниковении вопросов, пожалуйста,{' '}
          <a className="link" href="">
            напишите нам
          </a>
        </p>
        <Ul title="Информация:">
          <Li>Запрещено дублировать анкеты с одними и теми же фотками</Li>
          <Li>
            Одинаковые номера телефонов могут совпадать только на 7 анкетах
            подряд
          </Li>
          <Li>
            Для смены номера волспользуйтесь кнопкой Изменить, номер телефона
            будет сразу без отправления анкеты на модерацию
          </Li>
          <Li>
            Анкеты проверяются в течении суток. Если по прошествии этого времени
            ваши анкеты не были проверены, пожалуйста, напишите нам
          </Li>
        </Ul>
      </div>
    </div>
  );
}

export default ProfilePage;
