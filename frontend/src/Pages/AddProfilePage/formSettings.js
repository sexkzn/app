export default [
  {
    src: 'InputText',
    name: 'name',
    label: 'Имя:',
    labelPosition: 'left',
  },
  {
    src: 'InputNumber',
    name: 'age',
    label: 'Возраст:',
    labelPosition: 'left',
  },
  {
    src: 'InputNumber',
    name: 'growth',
    label: 'Рост:',
    labelPosition: 'left',
  },
  {
    src: 'InputNumber',
    name: 'weight',
    label: 'Вес:',
    labelPosition: 'left',
  },
  {
    src: 'InputSelect',
    name: 'boobsSize',
    label: 'Размер груди:',
    labelPosition: 'left',
    options: [
      {
        value: 1,
        label: 1,
      },
      {
        value: 2,
        label: 2,
      },
      {
        value: 3,
        label: 3,
      },
      {
        value: 4,
        label: 4,
      },
      {
        value: 5,
        label: 5,
      },
      {
        value: 6,
        label: 6,
      },
      {
        value: 7,
        label: 7,
      },
    ],
  },
  {
    src: 'InputSelect',
    name: 'hairColor',
    label: 'Цвет волос:',
    labelPosition: 'left',
    options: [
      {
        label: 'Блондинка',
        value: 'Блондинка',
      },
    ],
  },
  {
    src: 'InputSelect',
    name: 'nation',
    label: 'Национальность:',
    labelPosition: 'left',
    options: [
      {
        label: 'Русская',
        value: 'Русская',
      },
    ],
  },
  {
    src: 'InputText',
    name: 'appearance',
    label: 'Внешность:',
    labelPosition: 'left',
  },
  {
    src: 'InputMask',
    name: 'phone',
    label: 'Телефон:',
    labelPosition: 'left',
    placeholder: '+7',
    mask: [
      '+',
      '7',
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ],
  },
  {
    src: 'InputSelect',
    name: 'metro',
    label: 'Метро',
    labelPosition: 'left',
    options: [
      {
        label: 'Кремлевская',
        value: 'Кремлевская',
      },
    ],
  },
  {
    src: 'CheckboxGroup',
    label: 'Территория',
    name: 'territory',
    labelPosition: 'left',
    left: [
      {
        id: 'apartments',
        label: 'Апартаменты',
        value: 'apartments',
      },
      {
        label: 'Выезд',
        value: 'departure',
        subItems: [
          {
            id: 'departureFlat',
            label: 'Выезд в квартиры',
            value: 'departureFlat',
          },
          {
            id: 'departureHotel',
            label: 'Выезд в гостиницы',
            value: 'departureHotel',
          },
          {
            id: 'departureSauna',
            label: 'Выезд в сауны',
            value: 'departureSauna',
          },
          {
            id: 'departureOffice',
            label: 'Выезд в офис',
            value: 'departureOffice',
          },
        ],
      },
    ],
  },
  {
    src: 'InputRates',
    name: 'rates',
    label: 'Расценки',
    labelPosition: 'left',
    items: [
      {
        label: 'Апартаменты',
        subItems: [
          {
            id: 'apartmentsRateForHour',
            placeholder: 'За час',
          },
          {
            id: 'apartmentsRateFor2Hours',
            placeholder: 'За два часа',
          },
          {
            id: 'apartmentsRateForNight',
            placeholder: 'За ночь',
          },
        ],
      },
      {
        label: 'Выезд',
        subItems: [
          {
            id: 'departureRateForHour',
            placeholder: 'За час',
          },
          {
            id: 'departureRateFor2Hours',
            placeholder: 'За два часа',
          },
          {
            id: 'departureRateForNight',
            placeholder: 'За ночь',
          },
        ],
      },
    ],
  },
  {
    src: 'Textarea',
    name: 'aboutSelf',
    label: 'О себе',
    labelPosition: 'left',
  },
  {
    src: 'CheckboxGroup',
    name: 'services',
    label: 'Услуги',
    labelPosition: 'left',
    left: [
      {
        label: 'Секс',
        subItems: [
          {
            id: 'sexClassic',
            label: 'Секс классический',
            value: 'sexClassic',
          },
          {
            id: 'sexAnal',
            label: 'Секс анальный',
            value: 'sexAnal',
          },
          {
            id: 'sexGroup',
            label: 'Секс групповой',
            value: 'sexGroup',
          },
          {
            id: 'sexDoublePenetration',
            label: 'Двойное проникновение',
            value: 'sexDoublePenetration',
          },
        ],
      },
      {
        label: 'Ласка',
        subItems: [
          {
            id: 'affectionWithCondom',
            label: 'С резинкой',
            value: 'affectionWithCondom',
          },
          {
            id: 'affectionWithoutCondom',
            label: 'Без резинки',
            value: 'affectionWithCondom',
          },
          {
            id: 'affectionDeep',
            label: 'Глубокий',
            value: 'affectionDeep',
          },
          {
            id: 'affectionInCar',
            label: 'В машине',
            value: 'affectionInCar',
          },
          {
            id: 'affectionСunnilingus',
            label: 'Кунилингус',
            value: 'affectionСunnilingus',
          },
          {
            id: 'affectionAnnilingus',
            label: 'Анилингус',
            value: 'affectionAnnilingus',
          },
        ],
      },
      {
        label: 'Финиш',
        subItems: [
          {
            id: 'finishInMouth',
            label: 'В рот',
            value: 'finishInMouth',
          },
          {
            id: 'finishOnFace',
            label: 'На лицо',
            value: 'finishOnFace',
          },
          {
            id: 'finishOnChest',
            label: 'На грудь',
            value: 'finishOnChest',
          },
        ],
      },
      {
        label: 'BDSM',
        subItems: [
          {
            id: 'BDSM_BONDAGE',
            label: 'Бондаж',
            value: 'BDSM_BONDAGE',
          },
          {
            id: 'BDSM_MRS',
            label: 'Госпожа',
            value: 'BDSM_MRS',
          },
          {
            id: 'BDSM_ROLE_PLAYS',
            label: 'Ролевые игры',
            value: 'BDSM_ROLE_PLAYS',
          },
          {
            id: 'BDSM_LIGHT_DOMINATION',
            label: 'Легкая доминация',
            value: 'BDSM_LIGHT_DOMINATION',
          },
          {
            id: 'BDSM_FLOGGING',
            label: 'Порка',
            value: 'BDSM_FLOGGING',
          },
          {
            id: 'BDSM_SLAVE_GIRL',
            label: 'Рабыня',
            value: 'BDSM_SLAVE_GIRL',
          },
          {
            id: 'BDSM_FETISH',
            label: 'Фетиш',
            value: 'BDSM_FETISH',
          },
          {
            id: 'BDSM_TRAMPING',
            label: 'Трампинг',
            value: 'BDSM_TRAMPING',
          },
        ],
      },
    ],
    right: [
      {
        label: 'Экстрим',
        subItems: [
          {
            id: 'extrimStrapon',
            label: 'Страпон',
            value: 'extrimStrapon',
          },
          {
            id: 'extrimToys',
            label: 'Игрушки',
            value: 'extrimToys',
          },
        ],
      },
      {
        label: 'Стриптиз',
        subItems: [
          {
            id: 'stripteaseProfi',
            label: 'Профи',
            value: 'stripteaseProfi',
          },
          {
            id: 'stripteaseNotProfi',
            label: 'Не профи',
            value: 'stripteaseNotProfi',
          },
        ],
      },
      {
        label: 'Массаж',
        subItems: [
          {
            id: 'massageClassic',
            label: 'Массаж классический',
            value: 'massageClassic',
          },
          {
            id: 'massageProf',
            label: 'Массаж профессиональный',
            value: 'massageProf',
          },
          {
            id: 'massageRelax',
            label: 'Массаж расслабляющий',
            value: 'massageRelax',
          },
          {
            id: 'massageTai',
            label: 'Массаж тайский',
            value: 'massageTai',
          },
          {
            id: 'massageUrological',
            label: 'Массаж урологический',
            value: 'massageUrological',
          },
          {
            id: 'massageErotic',
            label: 'Массаж эротический',
            value: 'massageErotic',
          },
          {
            id: 'massageSakuraBranch',
            label: 'Ветка сакуры',
            value: 'massageSakuraBranch',
          },
        ],
      },
      {
        label: 'Лесби шоу',
        subItems: [
          {
            id: 'lesbianShowFrank',
            label: 'Откровенное',
            value: 'lesbianShowFrank',
          },
          {
            id: 'lesbianShowLight',
            label: 'Легкое',
            value: 'lesbianShowLight',
          },
        ],
      },
      {
        label: 'Фистинг',
        subItems: [
          {
            id: 'fistingAnal',
            label: 'Анальный',
            value: 'fistingAnal',
          },
          {
            id: 'fistingClassic',
            label: 'Классический',
            value: 'fistingClassic',
          },
        ],
      },
      {
        label: 'Золотой дождь',
        subItems: [
          {
            id: 'goldRainOut',
            label: 'Выдача',
            value: 'goldRainOut',
          },
          {
            id: 'goldRainUp',
            label: 'Прием',
            value: 'goldRainUp',
          },
        ],
      },
      {
        label: 'Дополнительно',
        subItems: [
          {
            id: 'additionallyEscort',
            label: 'Эскорт',
            value: 'additionallyEscort',
          },
          {
            id: 'additionallyMedia',
            label: 'Фото/Видео',
            value: 'additionallyMedia',
          },
          {
            id: 'additionallyFamily',
            label: 'Услуги сеймной паре',
            value: 'additionallyFamily',
          },
        ],
      },
    ],
  },
];
