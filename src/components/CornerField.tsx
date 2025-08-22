import clsx from 'clsx';
import type { FieldData } from '../data';
import { DynamicIcon } from './DynamicIcon';
import { getFieldBorderClassName } from './Field/getFieldBorderClassName';
import { getFieldGridClassName } from './Field/getFieldGridClassName';
import { getFieldSizeClassName } from './Field/getFieldSizeClassName';
import { JailField } from './JailField';

type Props = {
  data: FieldData;
  cellSide: string;
  cellNumber: number;
};

export const CornerField: React.FC<Props> = ({ data, cellSide, cellNumber }) => {
  const { id, title, color, iconName, subtitle } = data;
  const gridClassName = getFieldGridClassName(cellSide, cellNumber);
  const sizeClassName = getFieldSizeClassName(false, true);
  const borderClassName = getFieldBorderClassName(cellNumber, false);

  if (data.isDoubleField) return <JailField title={title} subtitle={subtitle} id={id} />;

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-2',
        gridClassName,
        sizeClassName,
        borderClassName,
      )}
      data-id={id}
    >
      {iconName && <DynamicIcon name={iconName} size={16} color={color} />}
      <span className="text-tiny text-center">{title}</span>
    </div>
  );
};
