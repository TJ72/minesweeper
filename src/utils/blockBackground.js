function unrevealedBlock(indexSum) {
  return indexSum % 2 === 1 ? "#ace83f" : "#c4f569";
}

function revealedBlock(indexSum) {
  return indexSum % 2 === 1 ? "#f0cead" : "#e5c29f";
}

export { unrevealedBlock, revealedBlock };
