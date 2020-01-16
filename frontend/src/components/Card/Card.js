import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

function Card({
  className,
  id,
  title,
  img,
  subtitle,
  priceOne,
  priceTwo,
  priceNight,
  age,
  weight,
  boobsSize,
}) {
  return (
    <article className={cn('card', className)}>
      <NavLink to={`/girl/${id}`}>
        <img className="card__image" src={img} alt={title} />
      </NavLink>
      <div className="card__content">
        <div className="card__title">{title}</div>
        <div className="card__subtitle">{subtitle}</div>
        <div className="card__cost-list">
          <div className="card__cost-item">
            <span>за 1 час</span>
            <span>{priceOne}</span>
          </div>
          {priceTwo && (
            <div className="card__cost-item">
              <span>за 2 часa</span>
              <span>{priceTwo}</span>
            </div>
          )}
          {priceNight && (
            <div className="card__cost-item">
              <span>за ночь</span>
              <span>{priceNight}</span>
            </div>
          )}
        </div>
        <ul className="card__tags">
          <li className="card__tag">{age} лет</li>
          <li className="card__tag">{weight} кг</li>
          <li className="card__tag">{boobsSize} размер</li>
        </ul>
      </div>
    </article>
  );
}

export default Card;
