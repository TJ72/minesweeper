function unrevealedBlock(indexSum) {
  return indexSum % 2 === 1 ? "#ace83f" : "#c4f569";
}

function revealedBlock(indexSum) {
  return indexSum % 2 === 1 ? "#f0cead" : "#e5c29f";
}

function renderBlocksBackground(value, revealed, indexSum) {
  if (!revealed) {
    return unrevealedBlock(indexSum);
  } else if (value === "X") {
    return "#e89648";
  } else {
    return revealedBlock(indexSum);
  }
}

export { renderBlocksBackground };
