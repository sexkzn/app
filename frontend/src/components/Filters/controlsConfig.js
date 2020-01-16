const controls = [
  [
    {
      name: 'age',
      label: 'Возраст',
      min: 18,
      max: 65,
      defaultValue: [18, 65],
    },
    {
      name: 'height',
      label: 'Рост',
      min: 150,
      max: 200,
      step: 10,
      defaultValue: [150, 200],
    },
    {
      name: 'boobsSize',
      label: 'Размер груди',
      min: 1,
      max: 7,
      defaultValue: [1, 7],
    },
    {
      name: 'weight',
      label: 'Вес',
      min: 35,
      max: 80,
      step: 5,
      defaultValue: [35, 80],
    },
  ],
  [
    {
      name: 'priceInOne',
      label: 'Цена за час',
      min: 2000,
      max: 10000,
      step: 1000,
      defaultValue: [1500, 10000],
    },
    {
      name: 'priceInTwo',
      label: 'Цена за 2 часа',
      min: 4000,
      max: 20000,
      step: 1000,
      defaultValue: [4000, 20000],
    },
    {
      name: 'priceInNight',
      label: 'Цена за ночь',
      min: 10000,
      step: 1000,
      max: 40000,
      defaultValue: [10000, 40000],
    },
  ],
  [
    {
      src: 'Checkbox',
      name: 'proven',
      label: 'Проверенные',
      labelPosition: 'right',
    },
    {
      src: 'Checkbox',
      name: 'apartments',
      label: 'Аппартаменты',
      labelPosition: 'right',
    },
    {
      src: 'Checkbox',
      name: 'checkOut',
      label: 'На выезд',
      labelPosition: 'right',
    },
  ],
];

export default controls;
