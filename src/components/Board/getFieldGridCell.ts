export const getFieldGridCell = (fieldId: number): string => {
  const isCorner = fieldId % 10 === 0;
  const cornerStyle = isCorner ? ' bg-red-500' : '';

  // top
  if (fieldId < 11) {
    return `row-start-1 col-start-${fieldId + 1}` + cornerStyle;
  }

  // right
  if (fieldId < 20) {
    return `row-start-${fieldId - 9} col-start-11` + cornerStyle;
  }

  // bottom
  if (fieldId < 31) {
    return `row-start-11 col-start-${11 - (fieldId - 20)}` + cornerStyle;
  }

  //left
  return `row-start-${11 - (fieldId - 30)} col-start-1` + cornerStyle;
};
