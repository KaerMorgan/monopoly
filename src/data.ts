export interface FieldData {
  id: number;
  title: string;
  subtitle?: string;
  price?: number;
  iconName?: string;
  color?: string;
  isDoubleField?: boolean;
}

export type FieldList = Array<FieldData>;

export const fieldList: FieldList = [
  { id: 0, title: 'Вперёд', subtitle: 'Получите $200 при проходе' },
  {
    id: 1,
    title: 'Средиземноморский проспект',
    price: 60,
    color: '#8B4513',
    iconName: 'home',
  },
  { id: 2, title: 'Общественная казна', iconName: 'chest' },
  { id: 3, title: 'Балтийский проспект', price: 60, color: '#8B4513', iconName: 'home' },
  { id: 4, title: 'Подоходный налог', subtitle: 'Заплатите $200', iconName: 'money' },
  { id: 5, title: 'Железная дорога «Ридинг»', price: 200, iconName: 'train' },
  { id: 6, title: 'Ориентал Авеню', price: 100, color: '#ADD8E6', iconName: 'home' },
  { id: 7, title: 'Шанс', iconName: 'dice' },
  { id: 8, title: 'Вермонт Авеню', price: 100, color: '#ADD8E6', iconName: 'home' },
  { id: 9, title: 'Коннектикут Авеню', price: 120, color: '#ADD8E6', iconName: 'home' },
  {
    id: 10,
    title: 'Тюрьма',
    subtitle: 'Обычный посетитель',
    isDoubleField: true,
    iconName: 'prisoner',
  },

  { id: 11, title: 'Сент-Чарльз-Плейс', price: 140, color: '#FFC0CB', iconName: 'home' },
  { id: 12, title: 'Электрическая компания', price: 150, iconName: 'electric-tower' },
  { id: 13, title: 'Штейтс Авеню', price: 140, color: '#FFC0CB', iconName: 'home' },
  { id: 14, title: 'Вирджиния Авеню', price: 160, color: '#FFC0CB', iconName: 'home' },
  { id: 15, title: 'Железная дорога «Пенсильвания»', price: 200, iconName: 'train' },
  { id: 16, title: 'Сент-Джеймс-Плейс', price: 180, color: '#FFA500', iconName: 'home' },
  { id: 17, title: 'Общественная казна', iconName: 'chest' },
  { id: 18, title: 'Теннесси Авеню', price: 180, color: '#FFA500', iconName: 'home' },
  { id: 19, title: 'Нью-Йорк Авеню', price: 200, color: '#FFA500', iconName: 'home' },

  { id: 20, title: 'Бесплатная стоянка', iconName: 'parking' },
  { id: 21, title: 'Кентукки Авеню', price: 220, color: '#FF0000', iconName: 'home' },
  { id: 22, title: 'Шанс', iconName: 'dice' },
  { id: 23, title: 'Индиана Авеню', price: 220, color: '#FF0000', iconName: 'home' },
  { id: 24, title: 'Иллинойс Авеню', price: 240, color: '#FF0000', iconName: 'home' },
  { id: 25, title: 'Железная дорога «B&O»', price: 200, iconName: 'train' },
  { id: 26, title: 'Атлантик Авеню', price: 260, color: '#FFFF00', iconName: 'home' },
  { id: 27, title: 'Вентнор Авеню', price: 260, color: '#FFFF00', iconName: 'home' },
  { id: 28, title: 'Водопровод', price: 150, iconName: 'water-tap' },
  { id: 29, title: 'Марвин Гарденс', price: 280, color: '#FFFF00', iconName: 'home' },
  { id: 30, title: 'Отправляйтесь в тюрьму', iconName: 'arrested' },

  { id: 31, title: 'Пацифик Авеню', price: 300, color: '#008000', iconName: 'home' },
  {
    id: 32,
    title: 'Норт-Каролина Авеню',
    price: 300,
    color: '#008000',
    iconName: 'home',
  },
  { id: 33, title: 'Общественная казна', iconName: 'chest' },
  { id: 34, title: 'Пенсильвания Авеню', price: 320, color: '#008000', iconName: 'home' },
  { id: 35, title: 'Железная дорога «Шорт Лайн»', price: 200, iconName: 'train' },
  { id: 36, title: 'Шанс', iconName: 'dice' },
  { id: 37, title: 'Парк-Плейс', price: 350, color: '#0000FF', iconName: 'home' },
  { id: 38, title: 'Роскошный налог', subtitle: 'Заплатите $100', iconName: 'money' },
  { id: 39, title: 'Бродвей', price: 400, color: '#0000FF', iconName: 'home' },
];
