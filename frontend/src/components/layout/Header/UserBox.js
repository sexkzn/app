import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { NavLink } from 'react-router-dom';
import Dropdown from 'rc-dropdown';
import Menu, { MenuItem } from 'rc-menu';
import { useDispatch } from 'react-redux';

import { fetchData } from '../../../actions/fetch';
import RegisterFormModal from '../../widgets/RegisterForm/RegisterForm';
import AuthForm from '../../widgets/AuthForm/AuthForm';
import useLogin from '../../../hooks/useLogin';
import { Path } from '../../../routes';
import Api from '../../../api';
import Button from '../../snippets/Button';
import UserAuth from './UserAuth';
import UserInfo from './UserInfo';

function UserBox({ username }) {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const toggle = () => setOpen(!isOpen);
  const logout = () =>
    dispatch(
      fetchData({
        url: Api.logout,
        onSuccess: () => (window.location.href = '/'),
      })
    );

  useClickAway(ref, () => setOpen(false));

  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  const {
    login: signIn,
    register,
    email,
    handleSubmitCode,
    handleGetUser,
  } = useLogin();

  const toggleRegisterModal = () => {
    setRegisterIsOpen(!registerIsOpen);
    setOpen(false);
  };

  return (
    <div ref={ref} className="header__user-box user-box">
      <RegisterFormModal
        isOpen={registerIsOpen}
        changeVisible={toggleRegisterModal}
        handleSubmit={register}
        handleSubmitCode={handleSubmitCode}
      />

      {!username ? (
        <UserAuth signIn={signIn} toggleRegisterModal={toggleRegisterModal} />
      ) : (
        <UserInfo logout={logout} username={username} />
      )}
    </div>
  );
}

export default UserBox;
