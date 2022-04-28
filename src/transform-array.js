const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
        if (i !== arr.length - 1) {
          newArr.push(arr[i + 1]);
        } else {
          break;
        }
      } else if (arr[i] === '--discard-prev') {
        if (i !== 0) {
          newArr.pop(arr[i - 1]);
        } else {
          continue;
        }
      } else if (arr[i] === '--discard-next') {
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
          i = i + 2;
        } else {
          i++;
        }
      } else if (arr[i] === '--double-prev') {
        if (i !== 0) {
          newArr.push(arr[i - 1]);
        } else {
          continue;
        }
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
