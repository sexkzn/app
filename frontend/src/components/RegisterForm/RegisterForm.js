import React from 'react';
import { reduxForm } from 'redux-form';

import useLogin from '../../hooks/useLogin';

import Title from '../Title';
import Field from '../Field/Field';
import Button from '../Button';

function RegisterForm({ handleSubmit, changeVisible }) {
  const { login } = useLogin();

  const onSubmit = (values, err) => {
    console.log(values);
    console.log(err);
  };

  return (
    <form onSubmit={onSubmit} className="register-form slideInDown animated">
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
      <Button type="submit">Регистрация</Button>
    </form>
  );
}

export default reduxForm({
  form: 'register',
})(RegisterForm);
