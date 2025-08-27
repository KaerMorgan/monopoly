import type { FieldData } from '@/data';

type Props = {
  data: FieldData;
};

export const ParkingField = ({ data: { title } }: Props) => {
  return (
    <div className="border-main-black bg-field flex size-full items-center border-2 text-center">
      <p className="text-xs font-bold">{title}</p>
    </div>
  );
};
