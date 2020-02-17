import React from 'react';
import map from 'lodash/map';
import cn from 'classnames';
import BreadcrumbsItem from './BreadcrumbsItem';

function Breadcrumbs({ classNames, items }) {
  return (
    <ul className={cn('breadcrumbs', classNames)}>
      {map(items, (item, index) => (
        <BreadcrumbsItem {...item} key={index} />
      ))}
    </ul>
  );
}

export default Breadcrumbs;
