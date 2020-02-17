import React from 'react';
import map from 'lodash/map';
import cn from 'classnames';

import StatsBlockItem from './StatsBlockItem';

function StatsBlock({ className, title, items }) {
  return (
    <div className={cn('profile-stats-block', className)}>
      <div className="profile-stats-block__title">{title}</div>
      <ul className="profile-stats-block__list">
        {map(items, (item, index) => (
          <StatsBlockItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default StatsBlock;
