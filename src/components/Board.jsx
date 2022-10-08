import React, { useState, useEffect } from "react";
import styled from "styled-components";
import createBoard from "../utils/createBoard";
import reveal from "../utils/reveal";
import Block from "./Block";

const LoadReminder = styled.div`
  font-size: 2rem;
  font-weight: 660;
`;

const Row = styled.div`
  display: flex;
`;

function Board({ rows, cols, bombs }) {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(rows, cols, bombs);
      setGrid(newBoard.board);
      setNonMineCount(rows * cols - bombs);
      setMineLocations(newBoard.mineLocations);
    }
    freshBoard();
  }, []);

  function updateFlag(e, r, c) {
    e.preventDefault();
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[r][c].flagged = true;
    setGrid(newGrid);
  }

  function revealBlock(r, c) {
    if (grid[r][c].revealed) return;
    const newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[r][c].value === "X") {
      alert("Game Over");
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
    } else {
      const newRevealedBoard = reveal(newGrid, r, c, nonMineCount);
      setGrid(newRevealedBoard.grid);
      setNonMineCount(newRevealedBoard.newNonMineCount);
    }
  }

  if (grid.length === 0) return <LoadReminder>Loading...</LoadReminder>;
  return grid.map((row, idx1) => {
    return (
      <Row key={idx1}>
        {row.map((block, idx2) => (
          <Block
            key={`${idx1}_${idx2}`}
            value={block.value}
            revealed={block.revealed}
            flagged={block.flagged}
            r={block.r}
            c={block.c}
            rows={rows}
            updateFlag={updateFlag}
            revealBlock={revealBlock}
          />
        ))}
      </Row>
    );
  });
}

export default Board;
