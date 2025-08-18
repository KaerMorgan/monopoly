interface CellInfo {
  isCorner: boolean;
  isSideField: boolean;
  cellName?: string;
  cellNumber: number;
  cellSide: string;
}

export const getFieldCellInfo = (fieldId: number): CellInfo => {
  let data;

  const cornerName = {
    0: 'top-left-corner',
    10: 'top-right-corner',
    20: 'bottom-right-corner',
    30: 'bottom-left-corner',
  }[fieldId];

  if (fieldId < 11) data = { cellSide: 'top', cellNumber: fieldId + 1 };
  else if (fieldId < 20) data = { cellSide: 'right', cellNumber: fieldId - 9 };
  else if (fieldId < 31) data = { cellSide: 'bottom', cellNumber: 11 - (fieldId - 20) };
  else data = { cellSide: 'left', cellNumber: 11 - (fieldId - 30) };

  if (cornerName !== undefined) data = { ...data, cellName: cornerName };

  return {
    ...data,
    isCorner: fieldId % 10 === 0,
    isSideField: (fieldId > 10 && fieldId < 20) || (fieldId > 30 && fieldId < 40),
  };
};
