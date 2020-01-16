import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { NavLink } from 'react-router-dom';

import InputText from '../controls/InputText';
import Button from '../Button';
import Modal from '../Modal';
import RegisterForm from '../RegisterForm/RegisterForm';
import useLogin from '../../hooks/useLogin';
import { Path } from '../../routes';

const AuthBlock = ({ visible, changeVisible }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  const { login: signIn } = useLogin();

  const onLoginChange = (e) => {
    const value = e.target.value;

    setLogin(value);
  };

  const onPasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);
  };

  const toggleRegisterModal = () => {
    setRegisterIsOpen(!registerIsOpen);
    changeVisible(false);
  };

  const onLogin = () => {
    signIn(login, password, () => changeVisible(false));
  };

  return [
    <Modal isOpen={registerIsOpen} changeVisible={toggleRegisterModal}>
      <RegisterForm changeVisible={toggleRegisterModal} />
    </Modal>,
    visible ? (
      <div className="user-box__auth">
        <div className="user-box__row">
          <div className="user-box__label">Логин:</div>
          <div className="user-box__control">
            <InputText value={login} onChange={onLoginChange} autoFocus />
          </div>
        </div>
        <div className="user-box__row">
          <div className="user-box__label">Пароль:</div>
          <div className="user-box__control">
            <InputText
              value={password}
              type="password"
              onChange={onPasswordChange}
            />
          </div>
        </div>
        <div className="user-box__row">
          <Button onClick={onLogin}>Войти</Button>
        </div>
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
      </div>
    ) : null,
  ];
};

function UserBox({ username }) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const toggle = () => setOpen(!isOpen);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="header__user-box user-box">
      {!username ? (
        <a className="user-box__link" onClick={toggle}>
          Войти
        </a>
      ) : (
        <NavLink to={Path.PROFILE} className="user-box__link">
          Привет, {username}
        </NavLink>
      )}

      <AuthBlock visible={isOpen} changeVisible={setOpen} />
    </div>
  );
}

export default UserBox;
