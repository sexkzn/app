import React from 'react';

import { useHistory } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import map from 'lodash/map';

import ReduxField from '../../../components/Field';
import Button from '../../../components/snippets/Button';
import formSettings from './formSettings';
import validate from './validations';

function AddProfileForm({ handleSubmit, label }) {
  const history = useHistory();

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
          <Button
            type="button"
            color="secondary"
            onClick={() => history.goBack()}
          >
            Отмена
          </Button>
          <Button type="submit">{label}</Button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'addForm',
  validate,
})(AddProfileForm);
