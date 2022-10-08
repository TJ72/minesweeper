import React from "react";
import styled from "styled-components";

const Border = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background: #f7f7f7;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

function Block({ value, revealed, flagged, r, c, updateFlag, revealBlock }) {
  return (
    <Border
      onContextMenu={(e) => updateFlag(e, r, c)}
      onClick={() => {
        revealBlock(r, c);
      }}
    >
      {revealed ? value : ""}
    </Border>
  );
}

export default Block;
