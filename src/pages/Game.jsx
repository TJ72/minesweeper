import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Board from "../components/Board";
import Timer from "../components/Timer";
import HomeBtn from "../components/HomeBtn";

const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-right: 90px;
  gap: 15px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

function Game() {
  const { difficulty } = useParams();
  let rows, cols, bombs;

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

  return (
    <>
      <Header>
        <Link to="/">
          <HomeBtn />
        </Link>
        <InfoContainer>
          <Info>
            <Icon src="https://www.google.com/logos/fnbx/minesweeper/flag_icon.png" />
            {15}
          </Info>
          <Info>
            <Icon src="https://www.google.com/logos/fnbx/minesweeper/clock_icon.png" />
            <Timer />
          </Info>
        </InfoContainer>
      </Header>
      <Board rows={rows} cols={cols} bombs={bombs} />
    </>
  );
}

export default Game;
