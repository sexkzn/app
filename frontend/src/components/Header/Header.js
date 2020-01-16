import React from 'react';
import cn from 'classnames';
import useHeader from '../../hooks/useHeader';
import Brand from './Brand';
import MainNav from './MainNav';
import UserBox from './UserBox';
import HeaderFilters from '../Filters';

function Header({ showFilters }) {
  const { username, fixHeader } = useHeader();

  return (
    <div
      className={cn('header__bg-image', {
        'header__bg-image--inner-pages': !showFilters,
      })}
    >
      <div
        className={cn('header__container', {
          'header__container--fixed': fixHeader || !showFilters,
        })}
      >
        <header className="header">
          <Brand />
          <MainNav />
          <UserBox username={username} />
        </header>
      </div>
      {showFilters && <HeaderFilters />}
    </div>
  );
}

export default Header;
