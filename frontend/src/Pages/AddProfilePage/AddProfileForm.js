import React from 'react';

import { reduxForm } from 'redux-form';
import map from 'lodash/map';

import ReduxField from '../../components/Field';
import Button from '../../components/Button';
import formSettings from './formSettings';
import validate from './validations';

function AddProfileForm({ handleSubmit }) {
  return (
    <div className="add-profile-page__form">
      <form onSubmit={handleSubmit}>
        {map(formSettings, (field, index) => (
          <ReduxField
            key={index}
            className="add-profile-page__form-field"
            {...field}
          />
        ))}
        <div className="add-profile-page__form-buttons">
          <Button type="submit">Сохранить анкету</Button>
          <Button color="secondary">Вернуться к списку</Button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'addForm',
  validate,
})(AddProfileForm);
