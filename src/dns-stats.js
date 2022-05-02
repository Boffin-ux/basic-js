const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = [];
  let count = 0;
  let last;
  let fast;
  const sliceName = name => {
    if (fast.lastIndexOf('.') !== -1) {
      last = name.slice(name.lastIndexOf('.'));
      fast = name.slice(0, `${name.lastIndexOf('.')}`);
      result.push(result[count] + last);
      count++;
      sliceName(fast);
    } else {
      result.push(result[count] + `.${fast}`);
    }
  };

  if (domains.length > 0) {
    domains.forEach(str => {
      last = str.slice(str.lastIndexOf('.'));
      result.push(last);
      fast = str.slice(0, `${str.lastIndexOf('.')}`);
      sliceName(fast);
    });
  }
  return result.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {});
}

module.exports = {
  getDNSStats
};
