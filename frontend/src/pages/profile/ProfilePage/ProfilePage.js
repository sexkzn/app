import React from 'react';

import useProfile from '../../../hooks/useProfile';
import ProfileLayout from '../../../components/layout/ProfileLayout';
import { Ul, Li } from '../../../components/snippets/Ul';
import StatsBlock from '../../../components/snippets/StatsBlock';
import defaultTo from 'lodash/defaultTo';

const prepareValue = (value, postfix = '') =>
  `${defaultTo(value, 0)} ${postfix}`;

function ProfilePage() {
  const { user } = useProfile();
  const { views, consumption, stats } = user;

  return (
    <ProfileLayout>
      <div className="profile-page">
        <div className="profile-page__main">
          <div className="profile-page__stats">
            <StatsBlock
              className="profile-page__stats-block"
              title="Анкеты"
              items={[
                {
                  label: 'Всего:',
                  value: prepareValue(stats.count, 'шт'),
                },
                {
                  label: 'Активные:',
                  value: prepareValue(stats.active, 'шт'),
                },
                {
                  label: 'Отключенные:',
                  value: prepareValue(stats.inactive, 'шт'),
                },
              ]}
            />
            <StatsBlock
              className="profile-page__stats-block"
              title="Просмотры"
              items={[
                {
                  label: 'Сегодня:',
                  value: prepareValue(views.today),
                },
                {
                  label: 'Вчера:',
                  value: prepareValue(views.yesterday),
                },
                {
                  label: 'За все время:',
                  value: prepareValue(views.all),
                },
              ]}
            />
            <StatsBlock
              className="profile-page__stats-block"
              title="Расход"
              items={[
                {
                  value: prepareValue(consumption.forDay, 'р./день'),
                },
                {
                  value: prepareValue(consumption.forWeek, 'р./неделя'),
                },
                {
                  value: prepareValue(consumption.forMonth, 'р./мес'),
                },
              ]}
            />
          </div>
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
    </ProfileLayout>
  );
}

export default ProfilePage;
