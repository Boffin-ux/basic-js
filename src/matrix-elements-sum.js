const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let columnCount = matrix[0].length;
  let prev = matrix[0][0];
  let sum = 0;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (prev !== 0 && j !== 0) {
        prev = matrix[j][i];
        sum += matrix[j][i];
      } else if (j === 0) {
        prev = matrix[j][i];
        sum += matrix[j][i];
      } else {
        prev = matrix[j][i];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
