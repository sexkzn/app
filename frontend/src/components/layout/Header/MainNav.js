import React from 'react';

function MainNav(props) {
  return (
    <nav className="main-nav">
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
        <li className="main-nav__item">
          <a className="main-nav__link" href="">
            Добавить анкету
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
