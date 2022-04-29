const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let getResult = [];
  let repetCount = names.length;
  let repet = 0;

  const renameItems = (arr) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (result[repet] === arr[i]) {
        count++;
        result.push(`${arr[i]}(${count})`);
      } else {
        result.push(arr[i]);
      }
    }
    getResult = result;
    repet++;
    repetCount--;
    if (repetCount > 0) {
      renameItems(getResult);
    }
  }
  renameItems(names);
  return getResult;
}

module.exports = {
  renameFiles
};
