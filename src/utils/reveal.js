function reveal(grid, r, c, newNonMineCount) {
  if (grid[r][c].revealed) return grid;

  const flipped = [grid[r][c]];
  while (flipped.length !== 0) {
    const block = flipped.pop();
    const currRow = block.r;
    const currCol = block.c;

    if (!block.revealed) {
      newNonMineCount -= 1;
      block.revealed = true;
    }
    if (block.value !== 0) break;

    for (let p1 of [currRow - 1, currRow, currRow + 1]) {
      for (let p2 of [currCol - 1, currCol, currCol + 1]) {
        if (
          0 <= p1 &&
          p1 <= grid.length - 1 &&
          0 <= p2 &&
          p2 <= grid[0].length - 1 &&
          !grid[p1][p2].revealed
        ) {
          if (grid[p1][p2].value === 0) {
            flipped.push(grid[p1][p2]);
          } else {
            grid[p1][p2].revealed = true;
            newNonMineCount -= 1;
          }
        }
      }
    }
  }
  return { grid, newNonMineCount };
}

export default reveal;
