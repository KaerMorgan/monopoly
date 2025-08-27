import clsx from 'clsx';
import type { CellSide } from './Field/utils/getFieldCellInfo';

type Props = {
  isSideField: boolean;
  cellSide: CellSide;
  title?: string;
  color: string;
};

export const PropertyStrip = ({ isSideField, color, cellSide, title }: Props) => {
  const propertyStripClassName = isSideField ? 'h-full w-4' : 'h-4 w-full';
  const orderClassName = {
    top: 'order-last w-full self-end',
    right: 'order-first h-full justify-self-start',
    bottom: 'order-first w-full self-start',
    left: 'order-last h-full justify-self-end',
  }[cellSide];

  const isTitleVisible = !color && title; // TODO: Добавить проверку на высоту экрана

  return (
    <div className={clsx(orderClassName, 'flex flex-col gap-0.5')}>
      <div className={propertyStripClassName} style={{ backgroundColor: color }} />
      {isTitleVisible && <p className="text-xs">{title}</p>}
    </div>
  );
};
