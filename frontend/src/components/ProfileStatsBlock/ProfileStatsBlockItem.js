import React from 'react';

import { NavLink } from 'react-router-dom';

function ProfileStatsBlockItem({ label, link, value }) {
  return (
    <li className="profile-stats-block__item">
      {link ? (
        <NavLink className="profile-stats-block__link" to={link}>
          {label}
        </NavLink>
      ) : (
        [
          label && (
            <span className="profile-stats-block__item-label">{label}</span>
          ),
          value && (
            <span className="profile-stats-block__item-value">{value}</span>
          ),
        ]
      )}
    </li>
  );
}

export default ProfileStatsBlockItem;
