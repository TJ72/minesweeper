import React from "react";
import styled from "styled-components";

const Border = styled.div`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid black;
`;

function Block() {
  return <Border />;
}

export default Block;
