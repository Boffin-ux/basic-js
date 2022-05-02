const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  let prevItem = str.slice(0, 1);
  let result = '';
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== prevItem && i === 1) {
      result += prevItem;
      prevItem = str[i];
    } else if (str[i] === prevItem && i !== str.length - 1) {
      count++;
      prevItem = str[i];
    } else if (str[i] === prevItem && i === str.length - 1) {
      count++;
      result += count + prevItem;
    } else if (str[i] !== prevItem && i === str.length - 1 && count !== 1) {
      result += count + prevItem + str[i];
    } else if (str[i] !== prevItem && i !== str.length - 1 && i !== 1 && count !== 1) {
      result += count + prevItem;
      prevItem = str[i];
      count = 1;
    } else {
      result += prevItem + str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
