import type { FieldData } from '@/data';
import { getCompoundFieldClassName } from './getCompoundFieldClassName';
import { DynamicIcon } from '../DynamicIcon';
import { getFieldCellInfo } from './getFieldCellInfo';
import { getFieldRotationClassName } from './getFieldRotationClassName';
import clsx from 'clsx';

type Props = { data: FieldData };

export const RailroadField = ({ data: { id, title, iconName, price } }: Props) => {
  const { cellSide } = getFieldCellInfo(id);

  const compoundFieldClassName = getCompoundFieldClassName(id);
  const rotationClassName = getFieldRotationClassName(cellSide);

  return (
    <div className={compoundFieldClassName} data-id={id}>
      <span className={clsx(rotationClassName, 'text-tiny text-center')}>{title}</span>
      <DynamicIcon className={rotationClassName} name={iconName ?? 'chest'} size={16} />
      <span className={clsx(rotationClassName, 'text-tiny text-center')}>{price}$</span>
    </div>
  );
};
