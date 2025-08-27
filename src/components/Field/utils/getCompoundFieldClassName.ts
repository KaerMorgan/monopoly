import clsx from 'clsx';
import { getFieldCellInfo } from './getFieldCellInfo';

export const getCompoundFieldClassName = (fieldId: number) => {
  const { cellSide, cellNumber, isSideField } = getFieldCellInfo(fieldId);

  const gridClassName = getFieldGridClassName(cellSide, cellNumber);
  const borderClassName = getFieldBorderClassName(cellNumber, isSideField);
  const orientationClassName = getFieldOrientationClassName(isSideField);

  const baseClassName = 'bg-field grid size-full gap-1 justify-items-center items-center';

  return clsx(baseClassName, orientationClassName, gridClassName, borderClassName);
};

const getFieldBorderClassName = (cellNumber: number, isSideField: boolean): string => {
  const isOddField = cellNumber % 2 !== 0;

  if (isOddField) return 'border-main-black border-2';

  if (isSideField) return 'border-main-black border-x-2';
  return 'border-main-black border-y-2';
};

const getFieldGridClassName = (cellSide: string, cellNumber: number) => {
  if (cellSide === 'top') return `row-start-1 col-start-${cellNumber}`;
  if (cellSide === 'right') return `row-start-${cellNumber} col-start-11`;
  if (cellSide === 'bottom') return `row-start-11 col-start-${cellNumber}`;
  return `row-start-${cellNumber} col-start-1`;
};

const getFieldOrientationClassName = (isSideField: boolean) =>
  isSideField ? 'grid-rows-1 grid-cols-3' : 'grid-rows-3 grid-cols-1';
