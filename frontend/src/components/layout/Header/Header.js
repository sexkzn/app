import React from 'react';
import { useToggle } from 'react-use';
import cn from 'classnames';
import useHeader from './useHeader';
import Brand from './Brand';
import MainNav from './MainNav';
import UserBox from './UserBox';
import HeaderFilters from '../../Filters';

function Header({ showFilters }) {
  const { username, fixHeader } = useHeader();
  const [menuIsOpen, toggleMenu] = useToggle(false);

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
          <button
            onClick={toggleMenu}
            className={cn('header__burger hamburger hamburger--boring', {
              'is-active': menuIsOpen,
            })}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <Brand />
          <MainNav
            className="header__main-nav"
            opened={menuIsOpen}
            isAuth={!!username}
          />
          <UserBox username={username} />
        </header>
      </div>
      {showFilters && <HeaderFilters />}
    </div>
  );
}

export default Header;
