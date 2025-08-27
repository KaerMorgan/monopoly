import type { FieldData } from '@/data';
import clsx from 'clsx';
import { DynamicIcon } from './DynamicIcon';
import { getCompoundFieldClassName } from './Field/utils/getCompoundFieldClassName';
import { getFieldCellInfo } from './Field/utils/getFieldCellInfo';
import { getFieldRotationClassName } from './Field/utils/getFieldRotationClassName';

type Props = { data: FieldData };

export const CommunalField = ({ data: { id, iconName, price } }: Props) => {
  const { cellSide } = getFieldCellInfo(id);

  const compoundFieldClassName = getCompoundFieldClassName(id);
  const rotationClassName = getFieldRotationClassName(cellSide);

  const shortName = id === 12 ? 'ЛЭП' : 'Вода';

  return (
    <div className={compoundFieldClassName} data-id={id}>
      <span className={clsx(rotationClassName, 'text-tiny font-bold')}>{shortName}</span>
      <DynamicIcon className={rotationClassName} name={iconName ?? 'chest'} size={16} />
      <span className={clsx(rotationClassName, 'text-xs font-bold')}>{price}$</span>
    </div>
  );
};
