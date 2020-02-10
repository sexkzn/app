import React from 'react';

import VerifierInput from "../controls/VerifierInput";
import Button from "../Button";
import Title from "../Title";

function VerifyEmail({ sendCode, email, changeVisible }) {
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
      <p className='verify-form__description'>На почту <b>{email}</b> было высланно письмо с кодом подтверждения</p>
      <div className="verify-form__control">
        <VerifierInput onComplete={sendCode} fields={6} placeholder='Введите код' />
      </div>
    </div>
  );
}

export default VerifyEmail;
