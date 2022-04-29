const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (!s1 || !s2) {
    return 0;
  } else if (s1.length === 1 || s2.length === 1) {
    if (s1[0] !== s2[0]) {
      return 0;
    } else {
      return 1;
    }
    ;
  } else {
    const str1 = [...new Set(s1.split(''))];
    const str2 = s2.split('');
    let count = 0;
    let current;
    if (str1.length === 1) {
      return s1.length;
    } else {
      for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
          if (str1[i] === str1[j] && current !== str1[i]) {
            count++;
            current = str1[i];
            break;
          }
        }
      }
    }
    return count;
  }
}

module.exports = {
  getCommonCharacterCount
};
