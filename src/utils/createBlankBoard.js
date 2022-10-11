function createBlankBoard(rows, cols) {
  const board = [];
  for (let r = 0; r < rows; r++) {
    const subRow = [];
    for (let c = 0; c < cols; c++) {
      subRow.push({
        value: 0,
        revealed: false,
        flagged: false,
        r,
        c,
      });
    }
    board.push(subRow);
  }
  return board;
}

export default createBlankBoard;
