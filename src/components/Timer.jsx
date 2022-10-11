import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40px;
`;

function Timer({ time, setTime, start, setStart }) {
  useEffect(() => {
    if (!start) return;
    const timerId = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [time, start, setStart]);
  return <Wrapper>{String(time).padStart(3, "0")}</Wrapper>;
}

export default Timer;
