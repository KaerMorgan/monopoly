import type { FieldData } from '@/data';
import { getCompoundFieldClassName } from './getCompoundFieldClassName';
import { DynamicIcon } from '../DynamicIcon';
import { getFieldCellInfo } from './getFieldCellInfo';
import { getFieldRotationClassName } from './getFieldRotationClassName';
import clsx from 'clsx';

type Props = { data: FieldData };

export const PropertyField = ({ data: { id, color, iconName, price } }: Props) => {
  const compoundFieldClassName = getCompoundFieldClassName(id);
  const { cellSide, isSideField } = getFieldCellInfo(id);

  const propertyStripClassName = isSideField ? 'h-full w-4' : 'h-4 w-full';
  const rotationClassName = getFieldRotationClassName(cellSide);

  return (
    <div className={compoundFieldClassName} data-id={id}>
      <div className={propertyStripClassName} style={{ backgroundColor: color }} />
      <DynamicIcon
        className={rotationClassName}
        name={iconName ?? 'home'}
        size={16}
        color={color}
      />
      <span className={clsx(rotationClassName, 'text-tiny text-center')}>{price}$</span>
    </div>
  );
};
