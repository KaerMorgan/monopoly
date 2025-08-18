export const getFieldGridClassName = (cellSide: string, cellNumber: number) => {
  if (cellSide === 'top') return `row-start-1 col-start-${cellNumber}`;
  if (cellSide === 'right') return `row-start-${cellNumber} col-start-11`;
  if (cellSide === 'bottom') return `row-start-11 col-start-${cellNumber}`;
  return `row-start-${cellNumber} col-start-1`;
};
