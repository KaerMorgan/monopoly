import type { InfrastractureFieldData } from '@/data';
import clsx from 'clsx';
import { DynamicIcon } from './DynamicIcon';
import { getCompoundFieldClassName } from './Field/utils/getCompoundFieldClassName';
import { getFieldCellInfo } from './Field/utils/getFieldCellInfo';
import { getFieldRotationClassName } from './Field/utils/getFieldRotationClassName';

type Props = { data: InfrastractureFieldData };

export const RailroadField = ({ data: { id, title, iconName, price } }: Props) => {
  const { cellSide } = getFieldCellInfo(id);

  const compoundFieldClassName = getCompoundFieldClassName(id);
  const rotationClassName = getFieldRotationClassName(cellSide);
  const directionClassName = cellSide === 'left' && 'dir-rtl';

  const shortName = title.split(' ').at(2);

  return (
    <div className={clsx(compoundFieldClassName, directionClassName)} data-id={id}>
      <span className={clsx(rotationClassName, 'text-tiny font-bold')}>{shortName}</span>
      <DynamicIcon className={rotationClassName} name={iconName ?? 'chest'} size={16} />
      <span className={clsx(rotationClassName, 'text-xs font-bold')}>{price}$</span>
    </div>
  );
};
