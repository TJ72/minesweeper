import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 120px;
  &:hover {
    border-radius: 50%;
    background: #b6fabf;
  }
`;

function HomeBtn() {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1cd434"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </Wrapper>
  );
}

export default HomeBtn;
