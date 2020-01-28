const REQUIRED_FIELD = 'Поле обязательное для заполнения';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = REQUIRED_FIELD;
  }

  if (!values.age) {
    errors.age = REQUIRED_FIELD;
  } else if (values.age < 18 || values.age > 50) {
    errors.age = 'Возраст должен быть в пределах 18 - 50 лет';
  }

  if (!values.growth) {
    errors.growth = REQUIRED_FIELD;
  } else if (values.growth < 150 || values.growth > 200) {
    errors.growth = 'Рост должен быть в пределах 150 - 200 см';
  }

  if (!values.weight) {
    errors.weight = REQUIRED_FIELD;
  }

  if (!values.hairColor) {
    errors.hairColor = REQUIRED_FIELD;
  }

  if (!values.boobsSize) {
    errors.boobsSize = REQUIRED_FIELD;
  }

  if (!values.nation) {
    errors.nation = REQUIRED_FIELD;
  }

  if (!values.appearance) {
    errors.appearance = REQUIRED_FIELD;
  }

  if (!values.phone) {
    errors.phone = REQUIRED_FIELD;
  }

  if (!values.metro) {
    errors.metro = REQUIRED_FIELD;
  }

  if (!values.territory) {
    errors.territory = REQUIRED_FIELD;
  }

  if (!values.rates) {
    errors.rates = REQUIRED_FIELD;
  }

  if (!values.aboutSelf) {
    errors.aboutSelf = REQUIRED_FIELD;
  }

  if (!values.services) {
    errors.services = REQUIRED_FIELD;
  }

  return errors;
};

export default validate;
