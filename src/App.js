import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";

const Border = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <Border>
        <Wrapper>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </Wrapper>
      </Border>
    </div>
  );
}

export default App;
