import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu from 'rc-menu/es';
import { NavLink } from 'react-router-dom';
import { Path } from '../../../routes';

function UserInfo({ logout, username }) {
  return (
    <Dropdown
      trigger={['hover']}
      animation="slide-up"
      overlay={
        <Menu className="user-box__profile">
          <div className="user-box__row">
            <NavLink className="user-box__profile-link" to={Path.PROFILE}>
              Профиль
            </NavLink>
          </div>
          <div className="user-box__row">
            <a className="user-box__profile-link" onClick={logout}>
              Выйти
            </a>
          </div>
        </Menu>
      }
    >
      <a className="user-box__link">Привет, {username}</a>
    </Dropdown>
  );
}

export default UserInfo;
