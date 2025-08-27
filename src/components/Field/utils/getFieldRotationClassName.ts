import type { CellSide } from './getFieldCellInfo';

export const getFieldRotationClassName = (cellSide: CellSide) =>
  (cellSide === 'left' && 'rotate-90') || (cellSide === 'right' && '-rotate-90') || '';
