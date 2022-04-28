const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let result = 0;
  const arrDigits = Array.from(String(num), Number);
  for (let i = arrDigits.length - 1; i >= 0; i--) {
    let n = 0;
    for (let j = 0; j < arrDigits.length; j++) {
      if (j !== i) {
        n = n * 10 + arrDigits[j];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
