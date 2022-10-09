function createBoard(rows, cols, bombs) {
  let board = [];
  let mineLocations = [];

  // Create Blank Board
  for (let r = 0; r < rows; r++) {
    let subRow = [];
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

  // Randomized Place Bomb
  let bombsCount = 0;
  while (bombsCount < bombs) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);

    if (board[r][c].value === 0) {
      board[r][c].value = "X";
      mineLocations.push([r, c]);
      bombsCount += 1;
    }
  }

  // Calculate the Numbers in Blocks
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].value === "X") continue;

      if (r > 0 && c > 0 && board[r - 1][c - 1].value === "X") {
        board[r][c].value++;
      }
      if (r > 0 && board[r - 1][c].value === "X") {
        board[r][c].value++;
      }
      if (r > 0 && c < cols - 1 && board[r - 1][c + 1].value === "X") {
        board[r][c].value++;
      }
      if (c > 0 && board[r][c - 1].value === "X") {
        board[r][c].value++;
      }
      if (c < cols - 1 && board[r][c + 1].value === "X") {
        board[r][c].value++;
      }
      if (r < rows - 1 && c > 0 && board[r + 1][c - 1].value === "X") {
        board[r][c].value++;
      }
      if (r < rows - 1 && board[r + 1][c].value === "X") {
        board[r][c].value++;
      }
      if (r < rows - 1 && c < cols - 1 && board[r + 1][c + 1].value === "X") {
        board[r][c].value++;
      }
    }
  }

  return { board, mineLocations };
}

export default createBoard;
