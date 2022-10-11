import React from "react";
import styled, { css } from "styled-components";
import { renderBlocksBackground } from "../utils/blockBackground";
import { numColorCode } from "../utils/numColorCode";

const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => numColorCode(props.value)};
  background: ${(props) =>
    renderBlocksBackground(props.value, props.revealed, props.indexSum)};
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
  function onClickUpdate(r, c) {
    if (flagged) return;
    revealBlock(r, c);
  }

  function renderRevealedBlocks(value, flagged, revealed) {
    if (flagged && !revealed) {
      return "🚩";
    } else if (revealed && value === "X") {
      return "💣";
    } else if (revealed && value !== 0) {
      return value;
    } else if (revealed && value === 0) {
      return "";
    }
  }

  return (
    <Border
      rows={rows}
      indexSum={r + c}
      revealed={revealed}
      value={value}
      onContextMenu={(e) => updateFlag(e, r, c)}
      onClick={() => {
        onClickUpdate(r, c);
      }}
    >
      {renderRevealedBlocks(value, flagged, revealed)}
    </Border>
  );
}

export default Block;
