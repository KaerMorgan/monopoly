import type { FieldData } from '@/data';
import { getCompoundFieldClassName } from './getCompoundFieldClassName';
import { DynamicIcon } from '../DynamicIcon';
import { getFieldCellInfo } from './getFieldCellInfo';
import { getFieldRotationClassName } from './getFieldRotationClassName';
import clsx from 'clsx';

const taxColor = '#FA6060';

type Props = { data: FieldData };

export const TaxField = ({ data: { id, title, iconName } }: Props) => {
  const { cellSide } = getFieldCellInfo(id);

  const compoundFieldClassName = getCompoundFieldClassName(id);
  const rotationClassName = getFieldRotationClassName(cellSide);

  return (
    <div
      className={compoundFieldClassName}
      style={{ backgroundColor: taxColor }}
      data-id={id}
    >
      <span
        className={clsx(rotationClassName, 'text-tiny text-center')}
        style={{ color: taxColor }}
      >
        {title}
      </span>
      <DynamicIcon
        className={rotationClassName}
        name={iconName ?? 'chance'}
        size={16}
        color={taxColor}
      />
    </div>
  );
};
