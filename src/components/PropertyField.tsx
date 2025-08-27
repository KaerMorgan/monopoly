import type { PropertyFieldData } from '@/data';
import clsx from 'clsx';
import { DynamicIcon } from './DynamicIcon';
import { getCompoundFieldClassName } from './Field/utils/getCompoundFieldClassName';
import { getFieldCellInfo } from './Field/utils/getFieldCellInfo';
import { getFieldRotationClassName } from './Field/utils/getFieldRotationClassName';
import { PropertyStrip } from './PropertyStrip';

type Props = { data: PropertyFieldData };

export const PropertyField = ({ data: { id, color, iconName, price, title } }: Props) => {
  const compoundFieldClassName = getCompoundFieldClassName(id);
  const { cellSide, isSideField } = getFieldCellInfo(id);

  const rotationClassName = getFieldRotationClassName(cellSide);
  const orderClassName = {
    top: 'order-first',
    right: 'order-last',
    bottom: 'order-last',
    left: 'order-first',
  }[cellSide];

  return (
    <div className={compoundFieldClassName} data-id={id}>
      <PropertyStrip
        cellSide={cellSide}
        isSideField={isSideField}
        color={color}
        title={title}
      />
      <DynamicIcon
        className={rotationClassName}
        name={iconName ?? 'home'}
        size={16}
        color={color}
      />
      <span className={clsx(rotationClassName, orderClassName, 'text-xs font-bold')}>
        {price}$
      </span>
    </div>
  );
};
