const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result;
  const crop = str => {
    result = str.slice(str.indexOf("@") + 1);
    if (result.indexOf("@") + 1) {
      crop(result);
    } else {
      return result;
    }
  };
  crop(email);
  return result;
}

module.exports = {
  getEmailDomain
};
