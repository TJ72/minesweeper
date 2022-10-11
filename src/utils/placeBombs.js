function placeBombs(board, bombs, pos) {
  const [rows, cols] = [board.length, board[0].length];
  const bombsBoard = JSON.parse(JSON.stringify(board));
  let bombsCount = 0;
  let mineLocations = [];

  while (bombsCount < bombs) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (r === pos[0] && c === pos[1]) continue;
    if (bombsBoard[r][c].value === 0) {
      bombsBoard[r][c].value = "X";
      mineLocations.push([r, c]);
      bombsCount += 1;
    }
  }
  return { bombsBoard, mineLocations };
}

export default placeBombs;
