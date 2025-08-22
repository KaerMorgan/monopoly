import clsx from 'clsx';
import type { FieldData } from '../../data';
import { DynamicIcon } from '../DynamicIcon';
import { JailField } from '../JailField';
import { getFieldGridClassName } from './getFieldGridClassName';
import { getFieldCellInfo } from './getFieldCellInfo';
import { getFieldSizeClassName } from './getFieldSizeClassName';
import { getFieldBorderClassName } from './getFieldBorderClassName';
import { FieldPropertyColorLine } from '../FieldPropertyColorLine';
import { CornerField } from '../CornerField';

type Props = {
  data: FieldData;
};

export const Field: React.FC<Props> = ({ data }) => {
  const { id, title, color, iconName, price, subtitle } = data;
  const { cellSide, isCorner, cellNumber, isSideField } = getFieldCellInfo(id);
  const gridClassName = getFieldGridClassName(cellSide, cellNumber);
  const sizeClassName = getFieldSizeClassName(isSideField, isCorner);
  const borderClassName = getFieldBorderClassName(cellNumber, isSideField);

  const isTopIconVisible = iconName && isSideField;
  const isBottomIconVisible = iconName && !isSideField;

  if (isCorner)
    return <CornerField data={data} cellSide={cellSide} cellNumber={cellNumber} />;

  return (
    <div
      className={clsx(
        'relative flex flex-col items-center justify-center gap-1 px-1 py-0.5',
        gridClassName,
        sizeClassName,
        borderClassName,
      )}
      data-id={id}
    >
      {isTopIconVisible && <DynamicIcon name={iconName} size={16} color={color} />}
      <span className="text-tiny text-center break-all">{title}</span>
      {isBottomIconVisible && (
        <DynamicIcon className="my-auto" name={iconName} size={16} color={color} />
      )}
      {subtitle && <span className="text-tiny text-center">{subtitle}</span>}
      {/* {price && <span className="text-tiny text-center">{price}$</span>} */}

      {color && price && (
        <FieldPropertyColorLine
          cellSide={cellSide}
          color={color}
          isSideField={isSideField}
          price={price}
        />
      )}
    </div>
  );
};
