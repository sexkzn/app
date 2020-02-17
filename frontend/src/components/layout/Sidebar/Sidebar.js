import React from 'react';

import cn from 'classnames';
import map from 'lodash/map';

function Sidebar({ className, items }) {
  return (
    <aside className={cn('sidebar', className)}>
      <ul className="sidebar__list">
        {map(items, ({ title, icon, links }, itemIndex) => (
          <li className="sidebar__item" key={`item-${itemIndex}`}>
            <div className="sidebar__item-title">{title}</div>
            <ul className="sidebar__links">
              {map(links, ({ link, label }, linkIndex) => (
                <li
                  className="sidebar__links-item"
                  key={`link-${itemIndex}-${linkIndex}`}
                >
                  <a href={link} className="sidebar__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
