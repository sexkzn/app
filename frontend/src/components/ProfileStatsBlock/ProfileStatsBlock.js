import React from 'react';

import map from 'lodash/map';

import ProfileStatsBlockItem from './ProfileStatsBlockItem';

function ProfileStatsBlock({ title, items }) {
  return (
    <div className="profile-stats-block">
      <div className="profile-stats-block__title">{title}</div>
      <ul className="profile-stats-block__list">
        {map(items, (item, index) => (
          <ProfileStatsBlockItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ProfileStatsBlock;
