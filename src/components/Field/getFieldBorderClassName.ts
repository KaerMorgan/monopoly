export const getFieldBorderClassName = (
  cellNumber: number,
  isSideField: boolean,
): string => {
  const isOddField = cellNumber % 2 !== 0;

  if (isOddField) return 'border';

  if (isSideField) return 'border-x';
  return 'border-y';
};
