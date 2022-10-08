import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Block from "../components/Block";
import Board from "../components/Board";

function Game() {
  const { difficulty } = useParams();
  let rows;
  let cols;
  let bombs;
  switch (difficulty) {
    case "easy":
      [rows, cols, bombs] = [8, 8, 10];
      break;
    case "medium":
      [rows, cols, bombs] = [16, 16, 40];
      break;
    case "hard":
      [rows, cols, bombs] = [16, 30, 99];
      break;
  }
  // return Array.from({ length: rows }, (_, i) => i).map((row) => {
  //   return (
  //     <Row>
  //       {Array.from({ length: cols }, (_, i) => i).map((col) => (
  //         <Block />
  //       ))}
  //     </Row>
  //   );
  // });
  return <Board />;
}

export default Game;
