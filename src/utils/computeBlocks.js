function computeBlocks(board) {
  const rows = board.length;
  const cols = board[0].length;
  const finalBoard = JSON.parse(JSON.stringify(board));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (finalBoard[r][c].value === "X") continue;

      if (r > 0 && c > 0 && finalBoard[r - 1][c - 1].value === "X") {
        finalBoard[r][c].value++;
      }
      if (r > 0 && finalBoard[r - 1][c].value === "X") {
        finalBoard[r][c].value++;
      }
      if (r > 0 && c < cols - 1 && finalBoard[r - 1][c + 1].value === "X") {
        finalBoard[r][c].value++;
      }
      if (c > 0 && finalBoard[r][c - 1].value === "X") {
        finalBoard[r][c].value++;
      }
      if (c < cols - 1 && finalBoard[r][c + 1].value === "X") {
        finalBoard[r][c].value++;
      }
      if (r < rows - 1 && c > 0 && finalBoard[r + 1][c - 1].value === "X") {
        finalBoard[r][c].value++;
      }
      if (r < rows - 1 && finalBoard[r + 1][c].value === "X") {
        finalBoard[r][c].value++;
      }
      if (
        r < rows - 1 &&
        c < cols - 1 &&
        finalBoard[r + 1][c + 1].value === "X"
      ) {
        finalBoard[r][c].value++;
      }
    }
  }
  return finalBoard;
}

export default computeBlocks;
