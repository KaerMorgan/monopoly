export type CellSide = 'top' | 'right' | 'bottom' | 'left';

interface CellInfo {
  isCorner: boolean;
  isSideField: boolean;
  cellName?: string;
  cellNumber: number;
  cellSide: CellSide;
}

export const getFieldCellInfo = (fieldId: number): CellInfo => {
  const cornerName = {
    0: 'top-left-corner',
    10: 'top-right-corner',
    20: 'bottom-right-corner',
    30: 'bottom-left-corner',
  }[fieldId];

  const baseInfo = {
    isCorner: fieldId % 10 === 0,
    isSideField: (fieldId > 10 && fieldId < 20) || (fieldId > 30 && fieldId < 40),
    ...(cornerName && { cellName: cornerName }),
  };

  if (fieldId < 11) return { ...baseInfo, cellSide: 'top', cellNumber: fieldId + 1 };
  if (fieldId < 20) return { ...baseInfo, cellSide: 'right', cellNumber: fieldId - 9 };
  if (fieldId < 31) {
    return { ...baseInfo, cellSide: 'bottom', cellNumber: 11 - (fieldId - 20) };
  }
  return { ...baseInfo, cellSide: 'left', cellNumber: 11 - (fieldId - 30) };
};
