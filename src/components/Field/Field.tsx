import clsx from 'clsx';
import type { FieldData } from '../../data';
import { DynamicIcon } from '../DynamicIcon';
import { JailField } from '../JailField';
import { getFieldGridClassName } from './getFieldGridClassName';
import { getFieldCellInfo } from './getFieldCellInfo';
import { getFieldSizeClassName } from './getFieldSizeClassName';
import { getFieldBorderClassName } from './getFieldBorderClassName';

type Props = {
  data: FieldData;
};

export const Field: React.FC<Props> = ({ data }) => {
  const { id, title, color, iconName, price, subtitle, isDoubleField } = data;
  const { cellSide, isCorner, cellNumber, isSideField } = getFieldCellInfo(id);
  const gridClassName = getFieldGridClassName(cellSide, cellNumber);
  const sizeClassName = getFieldSizeClassName(isSideField, isCorner);
  const borderClassName = getFieldBorderClassName(cellNumber, isSideField);

  const fieldColorStyles = color
    ? ({ backgroundColor: color } as React.CSSProperties)
    : undefined;

  if (isDoubleField) return <JailField title={title} subtitle={subtitle} id={id} />;

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-around',
        gridClassName,
        sizeClassName,
        borderClassName,
      )}
      data-id={id}
    >
      {color && (
        <div className="h-4 w-full justify-self-start" style={fieldColorStyles}></div>
      )}
      <span className="text-tiny text-center break-all">{title}</span>
      {iconName && <DynamicIcon name={iconName} size={16} color={color} />}
      {subtitle && <span className="text-tiny text-center break-all">{subtitle}</span>}
      {price && <span className="text-tiny text-center break-all">{price}</span>}
    </div>
  );
};
