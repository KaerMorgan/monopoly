export interface FieldData {
  id: number;
  title: string;
  subtitle?: string;
  price?: number;
  iconName?: string;
  color?: string;
  hasSideWalk?: boolean;
}

export type FieldList = Array<FieldData>;

export const fieldList: FieldList = [
  { id: 0, title: 'Вперёд', subtitle: 'Получите $200 при проходе' },

  { id: 1, title: 'Средиземноморский проспект', price: 60, color: '#8B4513' },
  { id: 2, title: 'Общественная казна' },
  { id: 3, title: 'Балтийский проспект', price: 60, color: '#8B4513' },
  { id: 4, title: 'Подоходный налог', subtitle: 'Заплатите $200' },

  { id: 5, title: 'Железная дорога «Ридинг»', price: 200 },

  { id: 6, title: 'Ориентал Авеню', price: 100, color: '#ADD8E6' },
  { id: 7, title: 'Шанс' },
  { id: 8, title: 'Вермонт Авеню', price: 100, color: '#ADD8E6' },
  { id: 9, title: 'Коннектикут Авеню', price: 120, color: '#ADD8E6' },

  { id: 10, title: 'Тюрьма / Просто в гостях', hasSideWalk: true },

  { id: 11, title: 'Сент-Чарльз-Плейс', price: 140, color: '#FFC0CB' },
  { id: 12, title: 'Электрическая компания', price: 150 },
  { id: 13, title: 'Штейтс Авеню', price: 140, color: '#FFC0CB' },
  { id: 14, title: 'Вирджиния Авеню', price: 160, color: '#FFC0CB' },

  { id: 15, title: 'Железная дорога «Пенсильвания»', price: 200 },

  { id: 16, title: 'Сент-Джеймс-Плейс', price: 180, color: '#FFA500' },
  { id: 17, title: 'Общественная казна' },
  { id: 18, title: 'Теннесси Авеню', price: 180, color: '#FFA500' },
  { id: 19, title: 'Нью-Йорк Авеню', price: 200, color: '#FFA500' },

  { id: 20, title: 'Бесплатная стоянка' },

  { id: 21, title: 'Кентукки Авеню', price: 220, color: '#FF0000' },
  { id: 22, title: 'Шанс' },
  { id: 23, title: 'Индиана Авеню', price: 220, color: '#FF0000' },
  { id: 24, title: 'Иллинойс Авеню', price: 240, color: '#FF0000' },

  { id: 25, title: 'Железная дорога «B&O»', price: 200 },

  { id: 26, title: 'Атлантик Авеню', price: 260, color: '#FFFF00' },
  { id: 27, title: 'Вентнор Авеню', price: 260, color: '#FFFF00' },
  { id: 28, title: 'Водопровод', price: 150 },
  { id: 29, title: 'Марвин Гарденс', price: 280, color: '#FFFF00' },

  { id: 30, title: 'Отправляйтесь в тюрьму' },

  { id: 31, title: 'Пацифик Авеню', price: 300, color: '#008000' },
  { id: 32, title: 'Норт-Каролина Авеню', price: 300, color: '#008000' },
  { id: 33, title: 'Общественная казна' },
  { id: 34, title: 'Пенсильвания Авеню', price: 320, color: '#008000' },

  { id: 35, title: 'Железная дорога «Шорт Лайн»', price: 200 },

  { id: 36, title: 'Шанс' },
  { id: 37, title: 'Парк-Плейс', price: 350, color: '#0000FF' },
  { id: 38, title: 'Роскошный налог', subtitle: 'Заплатите $100' },
  { id: 39, title: 'Бродвей', price: 400, color: '#0000FF' },
];
