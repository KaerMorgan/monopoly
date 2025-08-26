// import type { FieldData } from '@/data';
import { getFieldCellInfo, type CellSide } from './getFieldCellInfo';

// export const getCompoundFieldClassName = (data: FieldData) => {
//   const { cellSide, isCorner, cellNumber, isSideField } = getFieldCellInfo(data.id);

export const getCompoundFieldClassName = (fieldId: number) => {
  const { cellSide, cellNumber, isSideField } = getFieldCellInfo(fieldId);

  const gridClassName = getFieldGridClassName(cellSide, cellNumber);
  const borderClassName = getFieldBorderClassName(cellNumber, isSideField);
  const orientationClassName = getFieldOrientationClassName(cellSide);

  const baseClassName = 'bg-field flex size-full items-center justify-between gap-1';

  return [baseClassName, orientationClassName, gridClassName, borderClassName].join(' ');
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

const getFieldOrientationClassName = (cellSide: CellSide) =>
  (cellSide === 'left' && 'flex-row-reverse') ||
  (cellSide === 'right' && 'flex-row') ||
  (cellSide === 'top' && 'flex-col-reverse') ||
  'flex-col';
