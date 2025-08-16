import { fieldList } from '../data';
import { Field } from './Field';

const getFieldGridPosition = (fieldId: number): string => {
  // const isCorner = fieldId % 10 === 0;

  // top
  if (fieldId < 11) {
    return `row-start-1 col-start-${fieldId + 1}`;
  }

  // right
  if (fieldId < 20) {
    return `row-start-${fieldId - 9} col-start-11`;
  }

  // bottom
  if (fieldId < 31) {
    // return `row-start-11 col-start-${11 - (fieldId - 20)}`;
    return `row-start-11 col-start-[-${fieldId - 18}]`;
    // 20 -> 11
    // 26 -> 6
    // 30 -> 1
  }

  //left
  // return `row-start-[${fieldId - 42}] col-start-1`;
  return `row-start-${11 - (fieldId - 30)} col-start-1`;
  // 31 -> 10
  // 36 -> 5
  // 39 -> 2
};

export const Board = () => {
  return (
    <main className="grid max-w-full grid-cols-11 grid-rows-11">
      {/* <main className="grid max-w-full grid-cols-[2fr_repeat(9,1fr)_2fr] grid-rows-[2fr_repeat(9,1fr)_2fr]"> */}
      {fieldList.map(field => (
        <Field
          data={field}
          key={field.id}
          className={getFieldGridPosition(field.id)}
        />
      ))}
      <div className="col-span-9 col-start-2 row-span-9 row-start-2 flex items-center justify-center bg-blue-900">
        chat placeholder
      </div>
    </main>
  );
};
