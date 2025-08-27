import type { FieldData } from '@/data';
import clsx from 'clsx';
import { DynamicIcon } from './DynamicIcon';
import { getCompoundFieldClassName } from './Field/utils/getCompoundFieldClassName';
import { getFieldCellInfo } from './Field/utils/getFieldCellInfo';
import { getFieldRotationClassName } from './Field/utils/getFieldRotationClassName';

type Props = { data: FieldData };

export const ChestField = ({ data: { id, title, iconName } }: Props) => {
  const { cellSide } = getFieldCellInfo(id);

  const compoundFieldClassName = getCompoundFieldClassName(id);
  const rotationClassName = getFieldRotationClassName(cellSide);

  const directionClassName = cellSide === 'left' && 'dir-rtl';

  return (
    <div className={clsx(compoundFieldClassName, directionClassName)} data-id={id}>
      <span className={clsx(rotationClassName, 'text-tiny font-bold')}>{title}</span>
      <DynamicIcon className={rotationClassName} name={iconName ?? 'chest'} size={16} />
    </div>
  );
};
