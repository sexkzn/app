import React from 'react';
import { NavLink } from 'react-router-dom';

function BreadcrumbsItem({ label, link }) {
  return (
    <div className="breadcrumbs__item">
      {link ? (
        <NavLink className="breadcrumbs__link" to={link}>
          {label}
        </NavLink>
      ) : (
        <span className="breadcrumbs__link">{label}</span>
      )}
    </div>
  );
}

export default BreadcrumbsItem;
