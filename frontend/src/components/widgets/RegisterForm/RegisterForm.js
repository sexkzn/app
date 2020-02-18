import React from 'react';

import useRegisterFormState from './useRegisterFormState';
import ProfileForm from '../ProfileForm/ProfileForm';
import VerifyEmail from './VerifyEmail';
import Modal from '../../Modal';

function RegisterFormModal({
  isOpen,
  changeVisible,
  handleSubmit,
  handleSubmitCode,
}) {
  const { onSubmit, onSubmitCode, showCode, email } = useRegisterFormState({
    handleSubmit,
    handleSubmitCode,
  });

  return (
    <Modal isOpen={isOpen} changeVisible={changeVisible}>
      <div className="profile-form">
        {!showCode ? (
          <ProfileForm
            onSubmit={onSubmit}
            changeVisible={changeVisible}
            label="Регистрация"
          />
        ) : (
          <VerifyEmail
            email={email}
            onSendCode={onSubmitCode}
            changeVisible={changeVisible}
          />
        )}
      </div>
    </Modal>
  );
}

export default RegisterFormModal;
