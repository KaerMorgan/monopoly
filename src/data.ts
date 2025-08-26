export type FieldType =
  | 'property'
  | 'chest'
  | 'chance'
  | 'tax'
  | 'railroad'
  | 'communal'
  | 'start'
  | 'jail'
  | 'go-to-jail'
  | 'parking';

export interface FieldData {
  id: number;
  title: string;
  subtitle?: string;
  price?: number;
  iconName?: string;
  color?: string;
  isDoubleField?: boolean;
  type: FieldType;
}

export type FieldList = Array<FieldData>;

export const fieldList: FieldList = [
  { id: 0, title: 'Старт!', type: 'start' },
  {
    id: 1,
    title: 'Средиземноморский проспект',
    price: 60,
    color: '#AE9270',
    iconName: 'home',
    type: 'property',
  },
  { id: 2, title: 'Казна', iconName: 'chest', type: 'chest' },
  {
    id: 3,
    title: 'Балтийский проспект',
    price: 60,
    color: '#AE9270',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 4,
    title: 'Подоходный налог',
    subtitle: 'Заплатите $200',
    iconName: 'money',
    type: 'tax',
  },
  {
    id: 5,
    title: 'Железная дорога «Ридинг»',
    price: 200,
    iconName: 'train',
    type: 'railroad',
  },
  {
    id: 6,
    title: 'Ориентал Авеню',
    price: 100,
    color: '#689BB2',
    iconName: 'home',
    type: 'property',
  },
  { id: 7, title: 'Шанс', iconName: 'dice', type: 'chance' },
  {
    id: 8,
    title: 'Вермонт Авеню',
    price: 100,
    color: '#689BB2',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 9,
    title: 'Коннектикут Авеню',
    price: 120,
    color: '#689BB2',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 10,
    title: 'Тюрьма',
    subtitle: 'Обычный посетитель',
    isDoubleField: true,
    iconName: 'prisoner',
    type: 'jail',
  },
  {
    id: 11,
    title: 'Сент-Чарльз-Плейс',
    price: 140,
    color: '#919FA6',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 12,
    title: 'Электрическая компания',
    price: 150,
    iconName: 'electric-tower',
    type: 'communal',
  },
  {
    id: 13,
    title: 'Штейтс Авеню',
    price: 140,
    color: '#919FA6',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 14,
    title: 'Вирджиния Авеню',
    price: 160,
    color: '#919FA6',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 15,
    title: 'Железная дорога «Пенсильвания»',
    price: 200,
    iconName: 'train',
    type: 'railroad',
  },
  {
    id: 16,
    title: 'Сент-Джеймс-Плейс',
    price: 180,
    color: '#76A89F',
    iconName: 'home',
    type: 'property',
  },
  { id: 17, title: 'Казна', iconName: 'chest', type: 'chest' },
  {
    id: 18,
    title: 'Теннесси Авеню',
    price: 180,
    color: '#76A89F',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 19,
    title: 'Нью-Йорк Авеню',
    price: 200,
    color: '#76A89F',
    iconName: 'home',
    type: 'property',
  },
  { id: 20, title: 'Бесплатная стоянка', iconName: 'parking', type: 'parking' },
  {
    id: 21,
    title: 'Кентукки Авеню',
    price: 220,
    color: '#91A1CB',
    iconName: 'home',
    type: 'property',
  },
  { id: 22, title: 'Шанс', iconName: 'dice', type: 'chance' },
  {
    id: 23,
    title: 'Индиана Авеню',
    price: 220,
    color: '#91A1CB',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 24,
    title: 'Иллинойс Авеню',
    price: 240,
    color: '#91A1CB',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 25,
    title: 'Железная дорога «B&O»',
    price: 200,
    iconName: 'train',
    type: 'railroad',
  },
  {
    id: 26,
    title: 'Атлантик Авеню',
    price: 260,
    color: '#E6C07B',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 27,
    title: 'Вентнор Авеню',
    price: 260,
    color: '#E6C07B',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 28,
    title: 'Водопровод',
    price: 150,
    iconName: 'water-tap',
    type: 'communal',
  },
  {
    id: 29,
    title: 'Марвин Гарденс',
    price: 280,
    color: '#E6C07B',
    iconName: 'home',
    type: 'property',
  },
  { id: 30, title: 'Отправляйтесь в тюрьму', iconName: 'arrested', type: 'go-to-jail' },
  {
    id: 31,
    title: 'Пацифик Авеню',
    price: 300,
    color: '#EEB46A',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 32,
    title: 'Норт-Каролина Авеню',
    price: 300,
    color: '#EEB46A',
    iconName: 'home',
    type: 'property',
  },
  { id: 33, title: 'Казна', iconName: 'chest', type: 'chest' },
  {
    id: 34,
    title: 'Пенсильвания Авеню',
    price: 320,
    color: '#EEB46A',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 35,
    title: 'Железная дорога «Шорт Лайн»',
    price: 200,
    iconName: 'train',
    type: 'railroad',
  },
  { id: 36, title: 'Шанс', iconName: 'dice', type: 'chance' },
  {
    id: 37,
    title: 'Парк-Плейс',
    price: 350,
    color: '#FF8661',
    iconName: 'home',
    type: 'property',
  },
  {
    id: 38,
    title: 'Роскошный налог',
    subtitle: 'Заплатите $100',
    iconName: 'money',
    type: 'tax',
  },
  {
    id: 39,
    title: 'Бродвей',
    price: 400,
    color: '#FF8661',
    iconName: 'home',
    type: 'property',
  },
];
