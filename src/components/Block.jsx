import React from "react";
import styled, { css } from "styled-components";

const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background: #f7f7f7;
  cursor: pointer;
  ${(props) => {
    switch (props.rows) {
      case 8:
        return css`
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
        `;
      default:
        return css`
          width: 30px;
          height: 30px;
          font-size: 1.4rem;
        `;
    }
  }}
  &:hover {
    opacity: 0.5;
  }
`;

function Block({
  value,
  revealed,
  flagged,
  r,
  c,
  rows,
  updateFlag,
  revealBlock,
}) {
  console.log("rows", rows);
  return (
    <Border
      rows={rows}
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
