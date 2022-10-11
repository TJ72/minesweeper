import React, { useState, useEffect } from "react";
import styled from "styled-components";
import createBlankBoard from "../utils/createBlankBoard";
import placeBombs from "../utils/placeBombs";
import computeBlocks from "../utils/computeBlocks";
import reveal from "../utils/reveal";
import Block from "./Block";
import Modal from "./Modal";

const LoadReminder = styled.div`
  font-size: 2rem;
  font-weight: 660;
`;

const Row = styled.div`
  display: flex;
`;

function Board({ rows, cols, bombs, start, setStart, setFlags, setTime }) {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const blankBoard = createBlankBoard(rows, cols);
    setGrid(blankBoard);
    setNonMineCount(rows * cols - bombs);
    setRestart(false);
    setGameOver(false);
    setFlags(bombs);
    setTime(0);
  }, [restart, setRestart]);

  function updateFlag(e, r, c) {
    e.preventDefault();
    if (grid[r][c].revealed) return;
    const newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[r][c].flagged) {
      newGrid[r][c].flagged = false;
      setFlags((prev) => prev + 1);
    } else {
      newGrid[r][c].flagged = true;
      setFlags((prev) => prev - 1);
    }
    setGrid(newGrid);
  }

  function revealBlock(r, c) {
    if (grid[r][c].revealed || gameOver) return;
    if (!start) {
      const { bombsBoard, mineLocations } = placeBombs(grid, bombs, [r, c]);
      const board = computeBlocks(bombsBoard);
      const newRevealedBoard = reveal(board, r, c, nonMineCount);
      setGrid(newRevealedBoard.grid);
      setNonMineCount(newRevealedBoard.newNonMineCount);
      setMineLocations(mineLocations);
      setStart(true);
      return;
    }
    const newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[r][c].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
      setGameOver(true);
      setStart(false);
    } else {
      const newRevealedBoard = reveal(newGrid, r, c, nonMineCount);
      setGrid(newRevealedBoard.grid);
      setNonMineCount(newRevealedBoard.newNonMineCount);
      if (newRevealedBoard.newNonMineCount === 0) {
        setGameOver(true);
        setStart(false);
      }
    }
  }

  if (grid.length === 0) return <LoadReminder>Loading...</LoadReminder>;
  return (
    <>
      {gameOver && (
        <Modal setRestart={setRestart} nonMineCount={nonMineCount} />
      )}
      {grid.map((row, idx1) => {
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
      })}
    </>
  );
}

export default Board;
