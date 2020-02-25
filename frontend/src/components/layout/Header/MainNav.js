import React from 'react';
import cn from 'classnames';

function MainNav({ className, opened, isAuth }) {
  return (
    <nav className={cn('main-nav', className, { 'main-nav--opened': opened })}>
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a className="main-nav__link" href="">
            Новые
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="">
            Дешевые
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="">
            Элитные
          </a>
        </li>
        {isAuth && (
          <li className="main-nav__item">
            <a className="main-nav__link" href="">
              Добавить анкету
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MainNav;
