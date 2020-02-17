import React from 'react';
import PropTypes from 'prop-types';
import defaultTo from 'lodash/defaultTo';
import ProfileStats from '../../../components/layout/ProfileLayout/ProfileStats';
import { Path } from '../../../routes';

const prepareValue = (value, postfix = '') =>
  `${defaultTo(value, 0)} ${postfix}`;

function ProfilePageStats({ views, consumption, inactive, active, count }) {
  return (
    <div className="profile-page__stats">
      <ProfileStats
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
      <ProfileStats
        title="Анкеты"
        items={[
          {
            label: 'Всего:',
            value: prepareValue(count, 'шт'),
          },
          {
            label: 'Активные:',
            value: prepareValue(active, 'шт'),
          },
          {
            label: 'Отключенные:',
            value: prepareValue(inactive, 'шт'),
          },
        ]}
      />
      <ProfileStats
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
      <ProfileStats
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
  );
}

ProfilePageStats.propTypes = {
  profiles: PropTypes.object,
  views: PropTypes.object,
  consumption: PropTypes.object,
};

ProfilePageStats.defaultProps = {
  profiles: {},
  views: {},
  consumption: {},
};

export default ProfilePageStats;
