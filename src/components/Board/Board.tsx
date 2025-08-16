import { fieldList } from '../../data';
import { Field } from '../Field';
import { getFieldGridCell } from './getFieldGridCell';

export const Board = () => {
  return (
    <main className="grid max-h-full max-w-full grid-cols-11 grid-rows-11">
      {/* <main className="grid max-w-full grid-cols-[2fr_repeat(9,1fr)_2fr] grid-rows-[2fr_repeat(9,1fr)_2fr]"> */}
      {fieldList.map(field => (
        <Field
          data={field}
          key={field.id}
          className={getFieldGridCell(field.id)}
        />
      ))}
      <div className="col-span-9 col-start-2 row-span-9 row-start-2 flex items-center justify-center bg-blue-900">
        chat placeholder
      </div>
    </main>
  );
};
