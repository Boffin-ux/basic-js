const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  const arrDigits = Array.from(String(num), Number);
  let sum = 0;
  for (let i = 0; i < arrDigits.length; i++) {
    sum += arrDigits[i];
  }
  const arrSum = Array.from(String(sum), Number);
  if (arrSum.length === 1) {
    return sum;
  } else {
    let newSum = 0;
    for (let j = 0; j < arrSum.length; j++) {
      newSum += arrSum[j];
    }
    return newSum;
  }
}

module.exports = {
  getSumOfDigits
};
