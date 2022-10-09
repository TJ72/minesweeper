import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  opacity: ${(props) => (props.render ? 1 : 0)};
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerImg = styled.div`
  width: 550px;
  height: 300px;
  opacity: 100;
  z-index: 4;
  margin-bottom: 45px;
  background: ${(props) =>
    props.nonMineCount === 0
      ? `url("https://www.google.com/logos/fnbx/minesweeper/win_screen.png")`
      : `url("https://www.google.com/logos/fnbx/minesweeper/lose_screen.png")`};
  background-repeat: repeat-x;
  background-size: cover;
  position: relative;
`;

const TryAgain = styled.div`
  width: 230px;
  height: 55px;
  margin: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: #1c992d;
  color: #b6fabf;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 7px;
  cursor: pointer;
  img {
    width: 36px;
    height: 36px;
  }
`;

function Modal({ restartGame, nonMineCount }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);
  return (
    <Wrapper render={render}>
      <BannerImg nonMineCount={nonMineCount} />
      <TryAgain onClick={restartGame}>
        <img src="https://www.gstatic.com/images/icons/material/system/2x/refresh_white_24dp.png" />
        {nonMineCount === 0 ? "Play Again" : "Try Again"}
      </TryAgain>
    </Wrapper>
  );
}

export default Modal;
