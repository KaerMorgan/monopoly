import type { FieldData } from '@/data';

type Props = {
  data: FieldData;
};

export const StartField = ({ data: { title } }: Props) => {
  return (
    <div className="border-main-black bg-field flex size-full items-center justify-center border-2">
      <p className="text-xs font-bold">{title}</p>
    </div>
  );
};
