import React, { useState, useEffect } from "react";
import styled from "styled-components";
import createBoard from "../utils/createBoard";
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

function Board({ rows, cols, bombs, start, setStart, setFlags }) {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  console.log("grid", grid);
  useEffect(() => {
    // freshBoard();
    const blankBoard = createBlankBoard(rows, cols);
    setGrid(blankBoard);
  }, []);

  function freshBoard() {
    const newBoard = createBoard(rows, cols, bombs);
    setGrid(newBoard.board);
    setNonMineCount(rows * cols - bombs);
    setMineLocations(newBoard.mineLocations);
    setFlags(bombs);
  }

  function restartGame() {
    freshBoard();
    setGameOver(false);
  }

  function updateFlag(e, r, c) {
    e.preventDefault();
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
      console.log(r, c);
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
    } else {
      const newRevealedBoard = reveal(newGrid, r, c, nonMineCount);
      setGrid(newRevealedBoard.grid);
      setNonMineCount(newRevealedBoard.newNonMineCount);
      if (newRevealedBoard.newNonMineCount === 0) {
        setGameOver(true);
      }
    }
  }

  if (grid.length === 0) return <LoadReminder>Loading...</LoadReminder>;
  return (
    <>
      {gameOver && (
        <Modal restartGame={restartGame} nonMineCount={nonMineCount} />
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
                start={start}
                setStart={setStart}
              />
            ))}
          </Row>
        );
      })}
    </>
  );
}

export default Board;
