import React, { useState, useEffect } from "react";
import styled from "styled-components";
import createBoard from "../utils/createBoard";
import reveal from "../utils/reveal";
import Block from "./Block";

const Row = styled.div`
  display: flex;
`;

function Board() {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(10, 10, 20);
      setGrid(newBoard.board);
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
    const newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[r][c].value === "X") {
      alert("Game Over");
    } else {
      const newRevealedBoard = reveal(newGrid, r, c);
      setGrid(newRevealedBoard.grid);
    }
  }

  if (grid.length === 0) return <div>Loading...</div>;
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
            updateFlag={updateFlag}
            revealBlock={revealBlock}
          />
        ))}
      </Row>
    );
  });
}

export default Board;
