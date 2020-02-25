import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu from 'rc-menu/es';
import AuthForm from '../../widgets/AuthForm/AuthForm';
import Button from '../../snippets/Button';

function UserAuth({ signIn, toggleRegisterModal }) {
  return (
    <Dropdown
      trigger={['click']}
      animation="slide-up"
      overlay={
        <Menu className="user-box__auth">
          <AuthForm onSubmit={signIn} />
          <div className="user-box__actions">
            <Button
              onClick={toggleRegisterModal}
              className="user-box__action"
              color="link"
            >
              Зарегистрироваться
            </Button>
            <Button className="user-box__action" color="link">
              Забыли пароль?
            </Button>
          </div>
        </Menu>
      }
    >
      <div className="user-box__link">Войти</div>
    </Dropdown>
  );
}

export default UserAuth;
