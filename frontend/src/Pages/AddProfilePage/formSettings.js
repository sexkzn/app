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
    name: 'height',
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
    src: 'InputSelect',
    name: 'appearance',
    label: 'Внешность:',
    labelPosition: 'left',
    options: [
      {
        label: 'Славянская',
        value: 'Славянская',
      },
    ],
  },
  {
    src: 'InputMask',
    name: 'phoneNumber',
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
            id: 'flat',
            label: 'Выезд в квартиры',
            value: 'flat',
          },
          {
            id: 'hotel',
            label: 'Выезд в гостиницы',
            value: 'hotel',
          },
          {
            id: 'sauna',
            label: 'Выезд в сауны',
            value: 'sauna',
          },
          {
            id: 'office',
            label: 'Выезд в офис',
            value: 'office',
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
            id: 'priceInOne',
            placeholder: 'За час',
          },
          {
            id: 'priceInTwo',
            placeholder: 'За два часа',
          },
          {
            id: 'priceInNight',
            placeholder: 'За ночь',
          },
        ],
      },
      {
        label: 'Выезд',
        subItems: [
          {
            id: 'priceOutOne',
            placeholder: 'За час',
          },
          {
            id: 'priceOutTwo',
            placeholder: 'За два часа',
          },
          {
            id: 'priceOutNight',
            placeholder: 'За ночь',
          },
        ],
      },
    ],
  },
  {
    src: 'Textarea',
    name: 'description',
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
            id: 'sexDouble',
            label: 'Двойное проникновение',
            value: 'sexDouble',
          },
        ],
      },
      {
        label: 'Ласка',
        subItems: [
          {
            id: 'affectionCondom',
            label: 'С резинкой',
            value: 'affectionCondom',
          },
          {
            id: 'affectionNoCondom',
            label: 'Без резинки',
            value: 'affectionNoCondom',
          },
          {
            id: 'affectionDeep',
            label: 'Глубокий',
            value: 'affectionDeep',
          },
          {
            id: 'affectionCar',
            label: 'В машине',
            value: 'affectionCar',
          },
          {
            id: 'affectionCun',
            label: 'Кунилингус',
            value: 'affectionCun',
          },
          {
            id: 'affectionAn',
            label: 'Анилингус',
            value: 'affectionAn',
          },
        ],
      },
      {
        label: 'Финиш',
        subItems: [
          {
            id: 'finishMouth',
            label: 'В рот',
            value: 'finishMouth',
          },
          {
            id: 'finishFace',
            label: 'На лицо',
            value: 'finishFace',
          },
          {
            id: 'finishChest',
            label: 'На грудь',
            value: 'finishChest',
          },
        ],
      },
      {
        label: 'BDSM',
        subItems: [
          {
            id: 'bdsmBondage',
            label: 'Бондаж',
            value: 'bdsmBondage',
          },
          {
            id: 'bdsmMistress',
            label: 'Госпожа',
            value: 'bdsmMistress',
          },
          {
            id: 'bdsmRpGames',
            label: 'Ролевые игры',
            value: 'bdsmRpGames',
          },
          {
            id: 'bdsmEasy',
            label: 'Легкая доминация',
            value: 'bdsmEasy',
          },
          {
            id: 'bdsmFlogging',
            label: 'Порка',
            value: 'bdsmFlogging',
          },
          {
            id: 'bdsmSlave',
            label: 'Рабыня',
            value: 'bdsmSlave',
          },
          {
            id: 'bdsmFetish',
            label: 'Фетиш',
            value: 'bdsmFetish',
          },
          {
            id: 'bdsmTrumping',
            label: 'Трампинг',
            value: 'bdsmTrumping',
          },
        ],
      },
    ],
    right: [
      {
        label: 'Экстрим',
        subItems: [
          {
            id: 'extremeStrapon',
            label: 'Страпон',
            value: 'extremeStrapon',
          },
          {
            id: 'extremeToys',
            label: 'Игрушки',
            value: 'extremeToys',
          },
        ],
      },
      {
        label: 'Стриптиз',
        subItems: [
          {
            id: 'stripProf',
            label: 'Профи',
            value: 'stripProf',
          },
          {
            id: 'stripAmateur',
            label: 'Не профи',
            value: 'stripAmateur',
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
            id: 'massageProfessional',
            label: 'Массаж профессиональный',
            value: 'massageProfessional',
          },
          {
            id: 'massageRelax',
            label: 'Массаж расслабляющий',
            value: 'massageRelax',
          },
          {
            id: 'massageThai',
            label: 'Массаж тайский',
            value: 'massageThai',
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
            id: 'massageSakura',
            label: 'Ветка сакуры',
            value: 'massageSakura',
          },
        ],
      },
      {
        label: 'Лесби шоу',
        subItems: [
          {
            id: 'lesbiFull',
            label: 'Откровенное',
            value: 'lesbiFull',
          },
          {
            id: 'lesbiLight',
            label: 'Легкое',
            value: 'lesbiLight',
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
            id: 'goldenRainOut',
            label: 'Выдача',
            value: 'goldenRainOut',
          },
          {
            id: 'goldenRainIn',
            label: 'Прием',
            value: 'goldenRainIn',
          },
        ],
      },
      {
        label: 'Дополнительно',
        subItems: [
          {
            id: 'addEscort',
            label: 'Эскорт',
            value: 'addEscort',
          },
          {
            id: 'addPhoto',
            label: 'Фото/Видео',
            value: 'addPhoto',
          },
          {
            id: 'addFamily',
            label: 'Услуги семейной паре',
            value: 'addFamily',
          },
        ],
      },
    ],
  },
];
