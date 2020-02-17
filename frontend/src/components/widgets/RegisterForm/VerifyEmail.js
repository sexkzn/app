import React from 'react';

import VerifierInput from '../../controls/VerifierInput';
import Button from '../../snippets/Button';
import Title from '../../snippets/Title';

function VerifyEmail({ onSendCode, email, changeVisible }) {
  return (
    <div className="verify-form register-form">
      <div className="register-form__header">
        <Title className="register-form__title">Подтверждение почты</Title>
        <Button
          className="register-form__close-btn"
          color="link"
          onClick={changeVisible}
        />
      </div>
      <p className="verify-form__description">
        На почту <b>{email}</b> было высланно письмо с кодом подтверждения
      </p>
      <div className="verify-form__control">
        <VerifierInput
          onComplete={onSendCode}
          fields={6}
          placeholder="Введите код"
        />
      </div>
    </div>
  );
}

export default VerifyEmail;
