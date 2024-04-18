export const matrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const matrixFormed = (posX, posY, turn) => {
  console.log(matrix);
  matrix[posX][posY] = turn;
  return matrix;
};

export default matrixFormed;
