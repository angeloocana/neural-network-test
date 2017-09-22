
const getInitialScore = () => ({
  x: 0,
  o: 0
});

const getScoreByPositionsInBoard = (b) => (i0, i1, i2) => {
  if (b[i0] !== 0 && b[i0] === b[i1] && b[i1] === b[i2]) {
    return {
      x: b[i0] === 1 ? 1 : -1,
      o: b[i0] === -1 ? 1 : -1
    };
  }
  else return null;
};

const positionToCheck = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];

/**
 * get Score
 * @param {*} b board 0 -> 8 x=1 o=-1
 * @return {{x: {Number}, o: {Number}}} score obj -1 lose, 1 win
 */
const getScore = (b) => {
  const getScoreByPositions = getScoreByPositionsInBoard(b);

  let score = getInitialScore();

  positionToCheck.forEach(positions => {
    const newScore = getScoreByPositions(positions[0], positions[1], positions[2]);
    if (newScore && newScore.x !== 0 && newScore.o !== 0) {
      score = newScore;
    }
  });

  return score;
};

export {
  getScore
};
