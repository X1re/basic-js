const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  for (let row = 0; row < rows; row++) {
    result[row] = [];
    for (let col = 0; col < columns; col++) {
      let count = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue;
          const newRow = row + dx;
          const newCol = col + dy;
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < columns &&
            matrix[newRow][newCol] === true
          ) {
            count++;
          }
        }
      }

      result[row][col] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
