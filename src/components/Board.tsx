import { fieldList } from '../data';
import { Field } from './Field/Field';

export const Board = () => {
  return (
    <section className="grid max-w-full grid-cols-[100px_repeat(9,50px)_100px] grid-rows-[100px_repeat(9,50px)_100px]">
      {fieldList.map(field => (
        <Field data={field} key={field.id} />
      ))}
      <div className="col-span-9 col-start-2 row-span-9 row-start-2 flex items-center justify-center bg-gray-400">
        chat placeholder
      </div>
    </section>
  );
};
