const validate = (values) => {
  let error = {};

  if (!values.login) {
    error.login = 'Поле обязательное для заполнения';
  }

  if (!values.password) {
    error.password = 'Поле обязательное для заполнения';
  }

  return error;
};

export default validate;
