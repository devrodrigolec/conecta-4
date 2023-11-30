export const findIndexOfBoard = (column, newBoard) => {
  for (let i = column.length - 1; i >= 0; i--) {
    if (newBoard[column[i]] === null) return column[i];
  }
};
