import React from "react";
import styled, { css } from "styled-components";
import {
  mineColor,
  unrevealedBlock,
  revealedBlock,
} from "../utils/blockBackground";
import reveal from "../utils/reveal";

const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    props.revealed
      ? props.value === "X"
        ? mineColor()
        : revealedBlock(props.indexSum)
      : unrevealedBlock(props.indexSum)};
  ${(props) => {
    switch (props.rows) {
      case 8:
        return css`
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
          font-weight: 600;
        `;
      default:
        return css`
          width: 30px;
          height: 30px;
          font-size: 1.4rem;
          font-weight: 570;
        `;
    }
  }}
  &:hover {
    opacity: 0.7;
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
  return (
    <Border
      rows={rows}
      indexSum={r + c}
      revealed={revealed}
      value={value}
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
