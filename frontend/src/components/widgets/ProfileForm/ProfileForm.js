import React from 'react';
import { reduxForm } from 'redux-form';

import Title from '../../snippets/Title';
import Field from '../../Field';
import Button from '../../snippets/Button';
import Captcha from '../../controls/Captcha';

function RegisterForm({ handleSubmit, changeVisible, label }) {
  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="register-form__header">
        <Title className="register-form__title">Регистрация</Title>
        <Button
          className="register-form__close-btn"
          color="link"
          onClick={changeVisible}
        />
      </div>
      <div className="register-form__row">
        <Field src="InputText" label="Логин" name="login" />
      </div>
      <div className="register-form__row">
        <Field src="InputText" type="email" label="Email" name="email" />
      </div>
      <div className="register-form__row">
        <Field src="InputText" label="Пароль" type="password" name="password" />
      </div>
      <div className="register-form__row">
        <Field
          src="InputText"
          label="Повторите пароль"
          type="password"
          name="confirmPassword"
        />
      </div>
      <div className="register-form__row">
        <div className="register-form__captcha">
          <Captcha />
        </div>
        <Field src="InputText" name="captcha" />
      </div>
      <Button type="submit">{label}</Button>
    </form>
  );
}

export default reduxForm({
  form: 'register',
})(RegisterForm);
