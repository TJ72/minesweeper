import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  margin-bottom: 80px;
  font-size: 3.4rem;
  font-weight: 700;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 10px;
  background: white;
  font-size: 1.5rem;
  font-weight: 550;
  cursor: pointer;
`;

const EasyBtn = styled(Button)`
  color: rgb(0, 184, 163);
  border: 2px solid rgb(0, 184, 163);
  &:hover {
    color: white;
    background: rgb(0, 184, 163);
  }
`;

const MediumBtn = styled(Button)`
  color: rgb(255 192 30);
  border: 2px solid rgb(255 192 30);
  &:hover {
    color: white;
    background: rgb(255 192 30);
  }
`;

const HardBtn = styled(Button)`
  color: rgb(255 55 95);
  border: 2px solid rgb(255 55 95);
  &:hover {
    color: white;
    background: rgb(255 55 95);
  }
`;

function Home() {
  return (
    <>
      <Title>Welcome to Minesweeper!</Title>
      <ButtonsContainer>
        <Link to="/easy">
          <EasyBtn>Easy</EasyBtn>
        </Link>
        <Link to="/medium">
          <MediumBtn>Medium</MediumBtn>
        </Link>
        <Link to="/hard">
          <HardBtn>Hard</HardBtn>
        </Link>
      </ButtonsContainer>
    </>
  );
}

export default Home;
