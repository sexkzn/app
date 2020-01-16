import React from 'react';

import ProfileHeader from '../../components/ProfileHeader';
import ProfilePageStats from './ProfilePageStats';
import Sidebar from '../../components/Sidebar';
import { Ul, Li } from '../../components/Ul';

import useProfile from '../../hooks/useProfile';

function ProfilePage(props) {
  const { data } = useProfile();

  return (
    <div className="profile-page">
      <ProfileHeader
        className="profile-page__header"
        title={`Личный кабинет, username`}
      />
      <ProfilePageStats {...data.stats} />
      <div className="profile-page__info">
        <Sidebar
          className="profile-page__sidebar"
          items={[
            {
              title: 'Сообщения',
              links: [
                { label: 'Сообщения 0 из 0', link: '/messages' },
                { label: 'Новое сообщение', link: '/messages/new' },
              ],
            },
            {
              title: 'Финансовая статистика',
              links: [
                {
                  label: 'Списания',
                },
                {
                  label: 'Зачисления',
                },
              ],
            },
            {
              title: 'Администрирование',
              links: [
                {
                  label: 'Регистрационные данные',
                },
              ],
            },
          ]}
        />
        <div className="profile-page__main">
          <Ul title="Виды размещения:">
            <Li>
              VIP <span className="profile-page--text-yellow">50р./день</span>
            </Li>
            <Li>
              Обычное{' '}
              <span className="profile-page__text-yellow">15р./день</span>
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
              Анкеты проверяются в течении суток. Если по прошествии этого
              времени ваши анкеты не были проверены, пожалуйста, напишите нам
            </Li>
          </Ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
