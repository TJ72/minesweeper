import React from "react";
import styled, { css } from "styled-components";
import { unrevealedBlock, revealedBlock } from "../utils/blockBackground";
import { numColorCode } from "../utils/numColorCode";

const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => numColorCode(props.value)};
  background: ${(props) =>
    props.revealed
      ? props.value === "X"
        ? "#e89648"
        : revealedBlock(props.indexSum)
      : unrevealedBlock(props.indexSum)};
  ${(props) => {
    switch (props.rows) {
      case 8:
        return css`
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
          font-weight: 700;
        `;
      default:
        return css`
          width: 30px;
          height: 30px;
          font-size: 1.4rem;
          font-weight: 700;
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
      {flagged && !revealed
        ? "🚩"
        : revealed && value !== 0
        ? value === "X"
          ? "💣"
          : value
        : ""}
    </Border>
  );
}

export default Block;
