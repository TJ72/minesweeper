import React, { useState, useEffect } from "react";
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
  img {
    width: 40px;
    height: 40px;
  }
`;

function Game() {
  const { difficulty } = useParams();
  const [info, setInfo] = useState();
  const [start, setStart] = useState(false);
  const [flags, setFlags] = useState(0);
  let rows, cols, bombs;
  // modified useEffect function into useState
  useEffect(() => {
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
      default:
        [rows, cols, bombs] = [8, 8, 10];
    }
    setInfo({ rows, cols, bombs });
    setFlags(bombs);
  }, []);

  return (
    <>
      <Header>
        <Link to="/">
          <HomeBtn />
        </Link>
        <InfoContainer>
          <Info>
            <img
              src="https://www.google.com/logos/fnbx/minesweeper/flag_icon.png"
              alt="flags"
            />
            {flags}
          </Info>
          <Info>
            <img
              src="https://www.google.com/logos/fnbx/minesweeper/clock_icon.png"
              alt="timer"
            />
            <Timer />
          </Info>
        </InfoContainer>
      </Header>
      {info && (
        <Board
          rows={info.rows}
          cols={info.cols}
          bombs={info.bombs}
          start={start}
          setStart={setStart}
          setFlags={setFlags}
        />
      )}
    </>
  );
}

export default Game;
