import React from 'react';
import cn from 'classnames';

import useGettingProfileInfo from './useGettingProfileInfo';
import ProfileHeader from './ProfileHeader';
import StatsBlock from '../../snippets/StatsBlock';
import Sidebar from '../Sidebar';
import { Path } from '../../../routes';
import defaultTo from 'lodash/defaultTo';
import useConfig from '../../../hooks/useConfig';

const prepareValue = (value, postfix = '') =>
  `${defaultTo(value, 0)} ${postfix}`;

function ProfileLayout({ className, children }) {
  const { title } = useGettingProfileInfo();
  const { user } = useConfig();
  const { views, consumption, stats } = user;

  return (
    <div className={cn('profile-layout', className)}>
      <ProfileHeader className="profile-layout__header" title={title} />
      <div className="profile-layout__sidebar">
        <StatsBlock
          className="profile-layout__stats"
          title="Девушки"
          items={[
            {
              label: 'Добавить анкету',
              link: Path.ADD,
            },
            {
              label: 'Мои анкеты',
              link: Path.PROFILES,
            },
          ]}
        />
        <Sidebar
          className="profile-layout__sidebar-info"
          items={[
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
      </div>
      <div className="profile-layout__main">
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
        {children}
      </div>
    </div>
  );
}

ProfileLayout.defaultProps = {
  views: {},
};

export default ProfileLayout;
