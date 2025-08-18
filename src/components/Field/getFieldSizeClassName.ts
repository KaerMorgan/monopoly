export const getFieldSizeClassName = (
  isSideField: boolean,
  isCorner: boolean,
) => (isCorner ? 'size-25' : isSideField ? 'w-25 h-12.5' : 'w-12.5 h-25');
