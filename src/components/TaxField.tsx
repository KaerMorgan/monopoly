import type { FieldData } from '@/data';
import clsx from 'clsx';
import { addHexTransparency } from '@/lib/utils';
import { DynamicIcon } from './DynamicIcon';
import { getCompoundFieldClassName } from './Field/utils/getCompoundFieldClassName';
import { getFieldCellInfo } from './Field/utils/getFieldCellInfo';
import { getFieldRotationClassName } from './Field/utils/getFieldRotationClassName';

const taxColor = '#FA6060';

type Props = { data: FieldData };

export const TaxField = ({ data: { id, title, iconName } }: Props) => {
  const { cellSide } = getFieldCellInfo(id);

  const compoundFieldClassName = getCompoundFieldClassName(id);
  const rotationClassName = getFieldRotationClassName(cellSide);
  const directionClassName = cellSide === 'left' && 'dir-rtl';

  return (
    <div
      className={clsx(compoundFieldClassName, directionClassName)}
      style={{ backgroundColor: addHexTransparency(taxColor)(35) }}
      data-id={id}
    >
      <span
        className={clsx(rotationClassName, 'text-tiny font-bold')}
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
