import { fieldList } from '../data';
import { Field } from './Field/Field';

export const Board = () => {
  return (
    <section
      className="grid aspect-square max-h-full max-w-full grid-cols-[2fr_repeat(9,1fr)_2fr] grid-rows-[2fr_repeat(9,1fr)_2fr]"
      style={{
        boxShadow: `
          2px 2px 5px 0px #00000033,
          6px 8px 10px 0px #0000002B,
          14px 18px 13px 0px #0000001A,
          25px 31px 16px 0px #00000008,
          39px 49px 17px 0px #00000000
        `,
      }}
    >
      {fieldList.map(field => (
        <Field data={field} key={field.id} />
      ))}
      <div className="bg-chat col-span-9 col-start-2 row-span-9 row-start-2 flex items-center justify-center"></div>
    </section>
  );
};
