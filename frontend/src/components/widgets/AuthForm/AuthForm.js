import React from 'react';
import { reduxForm } from 'redux-form';

import Button from '../../snippets/Button';
import Field from '../../Field';
import validate from './validate';

function AuthForm({ handleSubmit }) {
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="user-box__row">
        <div className="user-box__label">Логин:</div>
        <div className="user-box__control">
          <Field src="InputText" name="login" autoFocus />
        </div>
      </div>
      <div className="user-box__row">
        <div className="user-box__label">Пароль:</div>
        <div className="user-box__control">
          <Field src="InputText" name="password" type="password" />
        </div>
      </div>
      <div className="user-box__row">
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'auth',
  validate,
})(AuthForm);
